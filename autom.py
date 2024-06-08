def agregar_libre(diccionario):
    for dia in diccionario.values():
        if len(dia) > 6:
            dia.insert(6, 'Libre')
        else:
            print("La lista no tiene suficientes elementos para agregar 'Libre' en la posición 6.")

horarios = {
        'Lunes': [
            'AySaC - LAB1V', 'AySaC - LAB1V', 'AySaC - LAB1V',
            'AySaC - LAB1N', 'AySaC - LAB1N', 'AySaC - LAB1N',
            'CySaR - LAB1N', 'CySaR - LAB1N', 'CySaR - LAB1N',
            'Química - AV5', 'Química - AV5', 'Química - AV5'
        ],
        'Martes': [
            'ST - LAB1N', 'ST - LAB1N', 'ST - LAB1N',
            'CySaR - LAB1V', 'CySaR - LAB1V', 'CySaR - LAB1V',
            'Biología - AV4', 'Biología - AV4', 'Español - AV6',
            'AySaC - LAB1V', 'AySaC - LAB1V', 'AySaC - AV6'
        ],
        'Miércoles': [
            'CySaR - LAB1V', 'CySaR - LAB1V', 'CySaR - LAB1V',
            'Inglés Academico - AV6', 'Inglés Academico - AV6',
            'Matemáticas - AV1', 'Matemáticas - AV1',
            'Inglés Academico - AV6', 'Cívica - AV6',
            'Estudios Sociales - AV3', 'Estudios Sociales - AV3',
            'Estudios Sociales - AV3'
        ],
        'Jueves': [
            'EotNCaS - LAB6V', 'EotNCaS - LAB6V', 'EotNCaS - LAB6V',
            'EotNCaS - LAB6V', 'EotNCaS - LAB6V', 'EotNCaS - LAB6V',
            'AySaC - LAB1V', 'AySaC - LAB1V', 'AySaC - LAB1V',
            'ST - LAB1N', 'ST - LAB1N', 'ST - LAB1N'
        ],
        'Viernes': [
            'Estudios Sociales - AV3', 'Estudios Sociales - AV3',
            'Psicología - AV2', 'Matemáticas - AV1', 'Matemáticas - AV1',
            'Biología - AV4', 'CySaR - LAB1V', 'CySaR - LAB1V',
            'CySaR - LAB1V', 'Español - AV2', 'Español - AV2', 'Español - AV2'
        ]
    }












agregar_libre(horarios)  
print(horarios, ",")