import json
import joblib
import re
from datetime import datetime

# Función para cargar el horario desde el archivo JSON
def cargar_horario(archivo):
    with open(archivo, 'r', encoding='utf-8') as f:
        return json.load(f)

# Cargar el modelo de predicción de intenciones
modelo_intenciones = joblib.load('Lawliett_dir/lawliett.pkl')

# Función para evaluar el intervalo basado en la hora actual
def evaluar_intervalo(hora_actual):
    try:
        # Definir los intervalos de tiempo en los que ocurren las clases
        intervalos = [
            ("07:00", "07:40"),
            ("07:40", "08:20"),
            ("08:20", "09:00"),
            ("09:10", "09:50"),
            ("9:50", "10:30"),
            ("10:30", "11:00"),
            ("11:00", "12:00"),
            ("12:00", "12:40"),
            ("12:40", "13:20"),
            ("13:20", "14:00"),
            ("14:10", "14:50"),
            ("14:50", "15:30"),
            ("15:30", "16:10")

        ]

        # Convertir la hora actual a formato datetime para facilitar la comparación
        hora_actual = datetime.strptime(hora_actual, "%H:%M")


        # Iterar sobre los intervalos para encontrar el índice correcto
        for indice, (inicio, fin) in enumerate(intervalos):
            hora_inicio = datetime.strptime(inicio, "%H:%M")
            hora_fin = datetime.strptime(fin, "%H:%M")

            if hora_inicio <= hora_actual < hora_fin:
                return indice

        # Si la hora actual no está dentro de ningún intervalo conocido, retornar None
        return None

    except Exception as e:
        print(f"Error al evaluar intervalo: {e}")
        return None

# Función para clasificar la intención del comando
def clasificar_intencion(comando):
    return modelo_intenciones.predict([comando])[0]

# Función para obtener la clase según la sección, día e índice
def obtener_clase(horario, seccion, dia, indice):
    try:
        return horario[seccion][dia.capitalize()][indice]  # Restar 1 porque el índice proporcionado es 1-based
    except KeyError:
        return f"No se encontró la sección {seccion} o el día {dia} en el horario."
    except IndexError:
        return f"No hay clase en la posición {indice} para la sección {seccion} el día {dia}."

# Función para procesar el comando del usuario
def procesar_comando(comando, horario):
    try:
        # Extraer sección, día e hora del comando
        seccion_match = re.search(r'sección\s*([0-9A-Za-z-]+)', comando)
        dia_match = re.search(r'día\s*([a-zA-Z]+)', comando)
        hora_match = re.search(r'a las\s*(\d+:\d+)', comando)
        if seccion_match: 
            if dia_match and hora_match:
                seccion = seccion_match.group(1)
                dia = dia_match.group(1).capitalize()  # Convertir a mayúscula la primera letra
                hora = hora_match.group(1)
                
                # Evaluar el intervalo de hora
                indice = evaluar_intervalo(hora)
                
                if indice is not None:
                    clase = obtener_clase(horario, seccion, dia, indice)
                    return f"La sección {seccion} ahorita mismo está en: {clase}"
                else:
                    return "No estámos en horario lectivo jaja!"
            
            elif dia_match and not hora_match:
                seccion = seccion_match.group(1)
                dia = dia_match.group(1).capitalize()  # Convertir a mayúscula la primera letra
                hora =  datetime.now().strftime("%H:%M")
                
                # Evaluar el intervalo de hora
                indice = evaluar_intervalo(hora)
                
                if indice is not None:
                    clase = obtener_clase(horario, seccion, dia, indice)
                    return f"No se digitaron espeficicaciones sobre la hora, se usará la hora actual como referencia, la sección {seccion} está en: {clase}"
                else:
                    return "No estámos en horario lectivo jaja!"
            elif not dia_match and hora_match:
                        seccion = seccion_match.group(1)
                        dia_ingles = datetime.now().strftime("%A")  # Obtener el nombre del día actual en formato completo
                        dia = dia_ingles.replace("Mondey", "Lunes").replace("Tuesday", "Martes").replace("Wednesday", "Miércoles").replace("Thursday", "Jueves").replace("Friday", "Viernes").replace("Saturday", "Sábado").replace("Sunday", "Domingo")
                        hora = hora_match.group(1)
                        
                        # Evaluar el intervalo de hora
                        indice = evaluar_intervalo(hora)
                        
                        if indice is not None:
                            clase = obtener_clase(horario, seccion, dia, indice)
                            return f"No se digitaron espeficicaciones sobre el día, por lo que se utilizará hoy {dia} como referencia, la sección {seccion} está en: {clase}"
                        else:
                            return "Error: No estámos en horario lectivo"
            elif not dia_match and not hora_match:
                        seccion = seccion_match.group(1)
                        dia = datetime.now().strftime("%A").replace("Mondey", "Lunes").replace("Tuesday", "Martes").replace("Wednesday", "Miércoles").replace("Thursday", "Jueves").replace("Friday", "Viernes").replace("Saturday", "Sábado").replace("Sunday", "Domingo")  # Obtener el nombre del día actual en formato completo
                        hora = datetime.now().strftime("%H:%M")
                        # Evaluar el intervalo de hora
                        indice = evaluar_intervalo(hora)
                        
                        if indice is not None:
                            clase = obtener_clase(horario, seccion, dia, indice)
                            return f"No se ha digitado especificaciones sobre día u hora, por lo que se usaron los datos de tiempo real, la sección: {seccion} está en: {clase}"
                        else:
                            return "Error: La hora proporcionada no coincide con ningún intervalo conocido."
        else:
            return "No hay una sección especifícada, ingresa una en el formato {grado-numero-subgrupo} ej: 10-3-A"
    except Exception as e:
        return f"Error al procesar el comando: {e}"

# Cargar el horario desde el archivo JSON
horario = cargar_horario("Lawliett_dir/data/horarios.json")
def Lawliett(command): 
    # Pedir el comando del usuario
    comando_usuario = command

    # Clasificar la intención del comando
    intencion = clasificar_intencion(comando_usuario)

    # Procesar el comando según la intención
    if intencion == "consulta_de_horario":
        clase = procesar_comando(comando_usuario, horario)
        return clase
    else:
        print(f"Intención: {intencion}")
        print("Intención no reconocida o no es una consulta de horario.")
