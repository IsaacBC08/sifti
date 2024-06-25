import json
import joblib
import re
from datetime import datetime
import random

# Función para cargar el horario desde el archivo JSON
def cargar_horario(archivo):
    with open(archivo, 'r', encoding='utf-8') as f:
        return json.load(f)

# Cargar el modelo de predicción de intenciones
intencion_comando = joblib.load('model/intencion.pkl')
analisis_comando = joblib.load('model/analisis.pkl')

# Función para evaluar el intervalo basado en la hora actual
def evaluar_intervalo(hora_actual):
    try:
        # Definir los intervalos de tiempo en los que ocurren las clases
        intervalos = [
            ("07:00", "07:40"),
            ("07:40", "08:20"),
            ("08:20", "09:00"),
            ("09:10", "09:50"),
            ("09:50", "10:30"),
            ("10:30", "11:00"),
            ("11:00", "12:00"),
            ("12:00", "12:40"),
            ("12:40", "13:20"),
            ("13:20", "14:00"),
            ("14:10", "14:50"),
            ("14:50", "15:30"),
            ("15:30", "16:10"),
        ]

        # Convertir la hora actual a formato datetime para facilitar la comparación
        hora_actual = datetime.strptime(hora_actual, "%H:%M")
        # Verificar si la hora actual está dentro del intervalo específico
        if (datetime.strptime("09:00", "%H:%M") <= hora_actual < datetime.strptime("09:10", "%H:%M")) or \
           (datetime.strptime("14:00", "%H:%M") <= hora_actual < datetime.strptime("14:10", "%H:%M")):
            return 6  # Índice correspondiente al intervalo entre 09:00-09:10 o 14:00-14:10


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
    return intencion_comando.predict([comando])[0]

# Función para que analice el comando
def clasificar_palabras(palabra):
    return analisis_comando.predict([palabra])[0]

# Función para obtener la clase según la sección, día e índice
def obtener_clase(horario, seccion, dia, indice):
    try:
        return horario[seccion][dia.capitalize()][indice]  # Restar 1 porque el índice proporcionado es 1-based
    except KeyError:
        return f"No se encontró la sección {seccion} o el día {dia} en el horario."
    except IndexError:
        return f"No hay clase en la posición {indice} para la sección {seccion} el día {dia}."

def limpiar_palabra(palabra):
    # Eliminar símbolos no deseados
    return re.sub(r'[?!¡¿]', '', palabra)

# Función para consultar el horario 
def consultar_horario(comando, horario):
    try:
        dia_match = ""
        hora_match = ""
        seccion_match = ""

        palabras = comando.split()
        for palabra in palabras:
            palabra_limpia = limpiar_palabra(palabra)
            categoria = clasificar_palabras(palabra_limpia)
            if categoria == "Día":
                dia_match = palabra_limpia
            elif categoria == "Hora":
                hora_match = palabra_limpia
            elif categoria == "Sección":
                seccion_match = palabra_limpia

        if seccion_match:
            if dia_match and hora_match:
                dia = dia_match.capitalize()
                hora = hora_match
                indice = evaluar_intervalo(hora)

                if indice is not None:
                    clase = obtener_clase(horario, seccion_match, dia, indice)
                    return f"Según lo que pediste, la {seccion_match} está en: {clase}"
                else:
                    return "No estamos en horario lectivo en este momento."

            elif dia_match and not hora_match:
                dia = dia_match.capitalize()
                hora = datetime.now().strftime("%H:%M")
                indice = evaluar_intervalo(hora)

                if indice is not None:
                    clase = obtener_clase(horario, seccion_match, dia, indice)
                    return (f"No se especificó la hora, así que usé la hora actual. "
                            f"La sección {seccion_match} está en: {clase}")
                else:
                    return "No estamos en horario lectivo en este momento."

            elif not dia_match and hora_match:
                dia = datetime.now().strftime("%A")
                dia = dia.replace("Monday", "Lunes").replace("Tuesday", "Martes").replace("Wednesday", "Miércoles")
                dia = dia.replace("Thursday", "Jueves").replace("Friday", "Viernes").replace("Saturday", "Sábado").replace("Sunday", "Domingo")
                hora = hora_match
                indice = evaluar_intervalo(hora)

                if indice is not None:
                    clase = obtener_clase(horario, seccion_match, dia, indice)
                    return (f"No se especificó el día, así que usé hoy ({dia}) como referencia. "
                            f"La sección {seccion_match} está en: {clase}")
                else:
                    return "No estamos en horario lectivo en este momento."

            elif not dia_match and not hora_match:
                dia = datetime.now().strftime("%A")
                dia = dia.replace("Monday", "Lunes").replace("Tuesday", "Martes").replace("Wednesday", "Miércoles")
                dia = dia.replace("Thursday", "Jueves").replace("Friday", "Viernes").replace("Saturday", "Sábado").replace("Sunday", "Domingo")
                hora = datetime.now().strftime("%H:%M")
                indice = evaluar_intervalo(hora)

                if indice is not None:
                    clase = obtener_clase(horario, seccion_match, dia, indice)
                    return (f"No se especificaron día ni hora, así que usé los datos actuales. "
                            f"La sección {seccion_match} está en: {clase}")
                else:
                    responses = [
                        "Ups, no pude entender esa hora. ¿Puedes intentarlo de nuevo, por favor?",
                        "No estoy seguro de la hora que proporcionaste. ¿Puedes intentarlo otra vez?",
                        "Parece que la hora no está en un formato que entienda. ¿Podrías revisarlo e intentarlo de nuevo?",
                        "Lo siento, no reconozco esa hora. ¿Podrías intentar de nuevo con un formato diferente?"
                    ]
                    return random.choice(responses)
        else:
            return "No se especificó una sección. Ingresa una en el formato {grado-numero-subgrupo}, por ejemplo: 10-3-A."
    except Exception as e:
        return f"Hubo un error al procesar el comando: {e}"
# Cargar el horario desde el archivo JSON
horario = cargar_horario("model/data/horarios.json")

def Lawliett(command): 
    # Pedir el comando del usuario
    comando_usuario = command

    # Clasificar la intención del comando
    intencion = clasificar_intencion(comando_usuario)

    # Procesar el comando según la intención
    if intencion == "consulta_de_horario":
        clase = consultar_horario(comando_usuario, horario)
        return clase
    else:
        print(f"Intención: {intencion}")
        print("Intención no reconocida o no es una consulta de horario.")
