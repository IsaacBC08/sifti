# Función para ingresar las materias por hora y día para un grupo específico
def ingresar_horarios_por_grupo():
    grupo = input("¿Cuál es el profesor?\n").strip()
    horarios_grupo = {}
    
    dias_semana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']
    horas_del_dia = [
        '7-7:40', '7:40-8:20', '8:20-9', '9:10-9:50', '9:50-10:30', '10:30-11',
        '12-12:40', '12:40-1:20', '1:20-2', '2:10-2:50', '2:50-3:30', '3:30-4:10'
    ]
    
    for dia in dias_semana:
        horarios_dia = []
        for hora in horas_del_dia:
            materia = input(f"{dia} {hora}: ").strip()
            horarios_dia.append(materia)
        horarios_grupo[dia] = horarios_dia
    
    return grupo, horarios_grupo

# Función para generar el código Python con los horarios ingresados
def generar_codigo_python(grupo, horarios_grupo):
    codigo_python = f"'{grupo}': {{\n"
    for dia, horarios_dia in horarios_grupo.items():
        codigo_python += f"    '{dia}': {horarios_dia},\n"
    codigo_python += "}"
    return codigo_python

# Función principal para ejecutar el proceso
def main():
    grupo, horarios_grupo = ingresar_horarios_por_grupo()
    codigo_python = generar_codigo_python(grupo, horarios_grupo)
    
    print("\nAquí está la estructura de datos generada:\n")
    print(f"{codigo_python},")

if __name__ == "__main__":
    main()
