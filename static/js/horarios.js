// Definición de los horarios por grupo
const horarios = {
    '10-1-B': {
        'Lunes': ['Ética - AE', 'Español - AV2', 'Español - AV2', 'Física - AV5', 'Física - AV5', 'Física - AV5', 'Educación Física GIMNASIO', 'Educación Física GIMNASIO', 'Español - AV2', 'PpW - LAB1N', 'PpW - LAB1N', 'PpW - LAB1N'],
        'Martes': ['Física - AV5', 'Física - AV5', 'Física - AV5', 'PpW - LAB1N', 'PpW - LAB1N', 'PpW - LAB1N', 'PpW - LAB1N', 'PpW - LAB1N', 'PpW - LAB1N', 'ST - LAB3V', 'ST - LAB3V', 'ST - LAB3V'],
        'Miércoles': ['PpW - LAB1N', 'PpW - LAB1N', 'PpW - LAB1N', 'DS - LAB1N', 'DS - LAB1N', 'DS - LAB1N', 'EOTWD - LAB4V', 'EOTWD - LAB4V', 'EOTWD - LAB4V', 'DS - LAB1N', 'DS - LAB1N', 'DS - LAB1N'],
        'Jueves': ['Estudios Sociales - AV4', 'Estudios Sociales - AV4', 'Música - Lab2N', 'ST - Lab2N', 'ST - Lab2N', 'ST - Lab2N', 'Guía', 'Cívica - AV5', 'Matemática - AV1', 'Matemática - AV1', 'Inglés Academico - AV6', 'Inglés Academico - AV6'],
        'Viernes': ['TICs - Lab2N', 'TICs - Lab2N', 'TICs - Lab2N', 'TICs - Lab2N', 'TICs - Lab2N', 'TICs - Lab4V', 'EOTWD - Lab4V', 'EOTWD - Lab4V', 'EOTWD - Lab4V', 'Inglés Academico - AV1', 'Inglés Academico - AV1', 'Matemática - AV1']

    },
    '10-1-A': {
        'Lunes': ['Ética - AE', 'Español - AV2', 'Español - AV2', 'Física - AV5', 'Física - AV5', 'Física - AV5', 'Educación Física - Gimnasio', 'Educación Física - Gimnasio', 'Español - AV2', 'DP - Lab4N', 'DP - Lab4N', 'DP - Lab4N'],
        'Martes': ['Física - AV5', 'Física - AV5', 'Física - AV5', 'DP - Lab4N', 'DP - Lab4N', 'DP - Lab4N', 'DP - Lab4N', 'DP - Lab4N', 'DP - Lab4N', 'DP - Lab4N', 'DP - Lab4N', 'DP - Lab4N'],
        'Miércoles': ['DP - AN5', 'DP - AN5', 'DP - AN5', 'DP - AN5', 'DP - AN5', 'DP - AN5', 'EOtA', 'EOtA', 'EOtA', 'DT - AV5', 'DT - AV5', 'DT - AV5'],
        'Jueves': ['Estudios Sociales - AV4', 'Estudios Sociales - AV4', 'Música - Lab4N', 'DP - AV2', 'DP - AV2', 'DP - AV2', 'Guía', 'Cívica - AV5', 'Matemática - AV1', 'Matemática - AV1', 'Inglés Academico - AV6', 'Inglés Academico - AV6'],
        'Viernes': ['Foto - Lab4N', 'Foto - Lab4N', 'Foto - Lab4N', 'Foto - Lab4N', 'Foto - Lab4N', 'FOTO - Lab4N', 'DP - AV6', 'DP - AV6', 'DP - AV6', 'Inglés Academico - AV1', 'Inglés Academico - AV1', 'Matemática - AV1'],
    },
    '10-2-A': {
        'Lunes': ['Física - AV5', 'Física - AV5', 'Física - AV5', 'Ética - AE', 'Español - AV2', 'Inglés academico - Lab5V', 'EOtA - Lab5V', 'EOtA - Lab5V', 'EOtA - Lab5V', 'GeDTC - AN4', 'GeDTC - AN4', 'GeDTC - AN4'],
        'Martes': ['GC - AN4', 'GC - AN4', 'GC - AN4', 'Física - AV5', 'Física - AV5', 'Física - AV5', 'EOtA - Lab5V', 'EOtA - Lab5V', 'EOtA - Lab5V', 'Español - AV2', 'Español - AV2', 'Cívica - AV5'],
        'Miércoles': ['Inglés Academico - AE', 'Inglés Academico - AE', 'Inglés Academico - AE', 'GC - AN4', 'GC - AN4', 'GC - AN4', 'GC - AN4', 'GC - AN4', 'GC - AN4', 'GC - AN4', 'GC - AN4', 'GC - AN4'],
        'Jueves': ['GeDTC - AN4', 'GeDTC - AN4', 'GeDTC - AN4', 'Estudios Sociales - AE', 'Estudios Sociales - AE', 'Música - AE', 'GeDTC - AN4', 'GeDTC - AN4', 'GeDTC - AN4', 'GeDTC - AN4', 'GeDTC - AN4', 'GeDTC - AN4'],
        'Viernes': ['GC - AN4', 'GC - AN4', 'GC - AN4', 'GC - AN4', 'GC - AN4', 'GC - AN4', 'Matemáticas - AV1', 'Matemáticas - AV1', 'Educación Física - Gimnasio', 'Educación Física - Gimnasio', 'Matemáticas - AV1', 'Guía - AV6'],
    },
    '10-2-B': {
        'Lunes': ['Física - AV5', 'Física - AV5', 'Física - AV5', 'Ética - AE', 'Español - AV2', 'Inglés academico - AV5', 'Compras - AN6', 'Compras - AN6', 'Compras - AN6', 'Compras - AN6', 'Compras - AN6', 'Compras - AN6'],
        'Martes': ['Compras - AN6', 'Compras - AN6', 'Compras - AN6', 'Física - AV5', 'Física - AV5', 'Física - Lab4V', 'EOTWD - Lab4V', 'EOTWD - Lab4V', 'EOTWD - Lab4V', 'Español - AV2', 'Español - AV2', 'Cívica - AV5'],
        'Miércoles': ['Inglés Academico - AE', 'Inglés Academico - AE', 'Inglés Academico - AE', 'Compras - AN6', 'Compras - AN6', 'Compras - AN6', 'Import y Export - Lab2V', 'Import y Export - Lab2V', 'Import y Export - Lab2V', 'Import y Export - Lab2V', 'Import y Export - Lab2V', 'Import y Export - Lab2V'],
        'Jueves': ['Logistica - AN6', 'Logistica - AN6', 'Logistica - AN6', 'Estudios Sociales - AE', 'Estudios Sociales - AE', 'Música - AE', 'Logistica - Lab2V', 'Logistica - Lab2V', 'Logistica - Lab2V', 'Import y Export - Lab2V', 'Import y Export - Lab2V', 'Import y Export - Lab2V'],
        'Viernes': ['EOTWD - Lab4V', 'EOTWD - Lab4V', 'EOTWD - Lab4V', 'Import y Export - Lab2V', 'Import y Export - Lab2V', 'Import y Export - Lab2V', 'Matemáticas - AV1', 'Matemáticas - AV1', 'Educación Física - Gimnasio', 'Educación Física - Gimnasio', 'Matemáticas - AV1', 'Guía - AV6'],
    },
    '10-3-A': {
        'Lunes': ['FP - Lab1N', 'FP - Lab1N', 'FP - Lab1N', 'AySaC - Lab2N', 'AySaC - Lab2N', 'AySaC - Lab2N', 'Tdll - Lab3V', 'Tdll - Lab3V', 'Tdll - Lab3V', 'Matemática - AV1', 'Matemática - AV1', 'Guía - AV6'],
        'Martes': ['Lab2N AySaC', 'Lab2N AySaC', 'Lab2N AySaC', 'Español - AV2', 'Ética - AE', 'Matemática - AV1', 'Inglés Acad - AV6', 'Inglés Acad - AV6', 'Estudios Sociales - AV3', 'Estudios Sociales - AV3', 'Física - AV6', 'Física - AV6'],
        'Miércoles': ['Música - AV3', 'Español - AV2', 'Español - AV2', 'Inglés Técnico - LAB4V', 'Inglés Técnico - LAB4V', 'Inglés Técnico - LAB4V', 'FP - Lab1N', 'FP - Lab1N', 'FP - Lab1N', 'Inglés Academico - AV6', 'Inglés Academico - AV6', 'Física - AV4'],
        'Jueves': ['FP - Lab1N', 'FP - Lab1N', 'FP - Lab1N', 'Física - AE', 'Física - AE', 'Cívica - AV4', 'FP - Lab1N', 'FP - Lab1N', 'FP - Lab1N', 'AySaC - Lab2N', 'AySaC - Lab2N', 'AySaC - Lab2N'],
        'Viernes': ['Educación Física - Gimnasio', 'Educación Física - Gimnasio', 'Física - AV5', 'Inglés técnico - LAB4V', 'Inglés técnico - LAB4V', 'Inglés técnico LAB4V', 'Tdll - LAB2N', 'Tdll - LAB2N', 'Tdll - LAB2N', 'AySaC - Lab2N', 'AySaC - Lab2N', 'AySaC - Lab2N']
    },
    '10-3-B': {
        'Lunes': ['EOtBaCSE - Lab6V', 'EOtBaCSE - Lab6V', 'EOtBaCSE - Lab6V', 'GCyCpeSaC - Lab3N', 'GCyCpeSaC - Lab3N', 'GCyCpeSaC - Lab3N', 'DDpGlIyeCE - Lab3N', 'DDpGlIyeCE - Lab3N', 'DDpGlIyeCE - Lab3N', 'Matemática - AV1', 'Matemática - AV1', 'Guía - AV6'],
        'Martes': ['GCyCpeSaC - AN1', 'GCyCpeSaC - AN1', 'GCyCpeSaC - AN1', 'Español - AV2', 'Ética - AE', 'Matematicas - AV1', 'Inglés Academico - AV6', 'Inglés Academico - AV6', 'Estudios Sociales - AV3', 'Estudios Sociales - AV3', 'Física - AV6', 'Física - AV6'],
        'Miércoles': ['Música - AV3', 'Español - AV2', 'Español - AV2', 'DDpGlIyeCE - AV6', 'DDpGlIyeCE - AV6', 'DDpGlIyeCE - AV6', 'DDpGlIyeCE - AV6', 'DDpGlIyeCE - AV6', 'DDpGlIyeCE - AV6', 'Inglés - AV6', 'Inglés - AV6', 'Física - AV6'],
        'Jueves': ['EOtBaCSE - Lab5V', 'EOtBaCSE - Lab5V', 'EOtBaCSE - Lab5V', 'Física - AE', 'Física - AE', 'Cívica - AV4', 'EOtBaCSE - Lab5V', 'EOtBaCSE - Lab5V', 'EOtBaCSE - Lab5V', 'EOtBaCSE - Lab5V', 'EOtBaCSE - Lab5V', 'EOtBaCSE - Lab5V'],
        'Viernes': ['Educación Física - Gimnasio', 'Educación Física - Gimnasio', 'Física - AV5', 'GCyCpeSaC - Lab5N', 'GCyCpeSaC - Lab5N', 'GCyCpeSaC - Lab5N', 'GCyCpeSaC - Lab5N', 'GCyCpeSaC - Lab5N', 'GCyCpeSaC - Lab5N', 'DDpGlIyeCE - Lab3N', 'DDpGlIyeCE - Lab3N', 'DDpGlIyeCE - Lab3N']
    },
    '10-4-A': {
        'Lunes': [
            'GeTDC - AN4', 'GeTDC - AN4', 'GeTDC - AN4', 'GeTDC - AN4', 'GeTDC - AN4', 'GeTDC - AN4',
            'GeTDC - AN4', 'GeTDC - AN4', 'GeTDC - AN4', 'Cívica - AV3', 'Español - AV2', 'Matemática - AV1'
        ],
        'Martes': [
            'Física - AV2', 'Física - AV2', 'ética - AE', 'GC - AN4', 'GC - AN4', 'GC - AN4',
            'GC - AN4', 'GC - AN4', 'GC - AN4', 'GC - AN4', 'GC - AN4', 'GC - AN4'
        ],
        'Miércoles': [
            'GC - AN4', 'GC - AN4', 'GC - AN4', 'Música - AE', 'Estudios Sociales - AV3', 'Estudios Sociales - AV3',
            'Inglés academico - AV6', 'Matemáticas - AV1', 'Matemáticas - AV1', 'Física - AV4', 'Física - AV4', 'Inglés academico - AV6'
        ],
        'Jueves': [
            'EOtA - LAB2V', 'EOtA - LAB2V', 'EOtA - LAB2V', 'GeTDC - AN4', 'GeTDC - AN4', 'GeTDC - AN4',
            'Física - AV5', 'Inglés Academico - AV6', 'Inglés Academico - AV6', 'EOtA - AE', 'EOtA - AE', 'EOtA - AE'
        ],
        'Viernes': [
            'Español - AV2', 'Español - AV2', 'Educación Física - GIMNASIO', 'Educación Física - GIMNASIO',
            'Física - AV4', 'Guía - AV5', 'GC - AN4', 'GC - AN4', 'GC - AN4', 'GC - AN4', 'GC - AN4', 'GC - AN4'
        ]
    },
    '10-4-B': {
        'Lunes': [
            'GCyCpeSaC - LAB3N', 'GCyCpeSaC - LAB3N', 'GCyCpeSaC - LAB3N', 'EOtBaCSE - LAB4V', 'EOtBaCSE - LAB4V', 'EOtBaCSE - LAB4V',
            'EOtBaCSE - LAB4V', 'EOtBaCSE - LAB4V', 'EOtBaCSE - LAB4V', 'Cívica - AV3', 'Español - AV2', 'Matemáticas - AV1'
        ],
        'Martes': [
            'Física - AV2', 'Física - AV2', 'Ética - AE', 'EOtBaCSE - LAB4V', 'EOtBaCSE - LAB4V', 'EOtBaCSE - LAB4V',
            'DDpGlIyeCE - LAB3N', 'DDpGlIyeCE - LAB3N', 'DDpGlIyeCE - LAB3N', 'DDpGlIyeCE - LAB3N', 'DDpGlIyeCE - LAB3N', 'DDpGlIyeCE - LAB3N'
        ],
        'Miércoles': [
            'DDpGlIyeCE - LAB5N', 'DDpGlIyeCE - LAB5N', 'DDpGlIyeCE - LAB5N', 'Música - AE', 'Estudios Sociales - AV3', 'Estudios Sociales - AV3',
            'Inglés Academico - AV6', 'Matemáticas - AV1', 'Matemáticas - AV1', 'Física - AV4', 'Física - AV4', 'Inglés Academico - AV6'
        ],
        'Jueves': [
            'GCyCpeSaC - AN5', 'GCyCpeSaC - AN5', 'GCyCpeSaC - AN5', 'GCyCpeSaC - AN5', 'GCyCpeSaC - AN5', 'GCyCpeSaC - AN5',
            'Física - AV5', 'Inglés Academico - AV6', 'Inglés Academico - AV6', 'EOtBaCSE - LAB4V', 'EOtBaCSE - LAB4V', 'EOtBaCSE - LAB4V'
        ],
        'Viernes': [
            'Español - AV2', 'Español - AV2', 'Educación Física - GIMNASIO', 'Educación Física - GIMNASIO', 'Física - AV4', 'Guía - AV5',
            'DDpGlIyeCE - LAB3N', 'DDpGlIyeCE - LAB3N', 'DDpGlIyeCE - LAB3N', 'GCyCpeSaC - LAB5N', 'GCyCpeSaC - LAB5N', 'GCyCpeSaC - LAB5N'
        ]
    },
    '10-5-A': {
        'Lunes': [
            'Fundamentos Electro - TALLER', 'Fundamentos Electro - TALLER', 'Fundamentos Electro - TALLER', 'Inglés Academico - AV6', 'Ética - AE', 'Español - AV2',
            'Guía - AV3', 'Cívica - AV3', 'Educación Física - GIMNASIO', 'Educación Física - GIMNASIO', 'Estudios Sociales - AV3', 'Estudios Sociales - AV3'
        ],
        'Martes': [
            'IE - TALLER', 'IE - TALLER', 'IE - TALLER', 'EOtIE - LAB6V', 'EOtIE - LAB6V', 'EOtIE - LAB6V', 'Fundamentos Electro - TALLER', 'Fundamentos Electro - TALLER',
            'Fundamentos Electro - TALLER', 'Fundamentos Electro - TALLER', 'Fundamentos Electro - TALLER', 'Fundamentos Electro - TALLER'
        ],
        'Miércoles': [
            'Fundamentos Electro - TALLER', 'Fundamentos Electro - TALLER', 'Fundamentos Electro - TALLER', 'EOtIE - AV5', 'EOtIE - AV5', 'EOtIE - AV5',
            'Física - AV4', 'Español - AV2', 'Español - AV2', 'IE - TALLER', 'IE - TALLER', 'IE - TALLER'
        ],
        'Jueves': [
            'TdIAalEI - TALLER', 'TdIAalEI - TALLER', 'TdIAalEI - TALLER', 'TdIAalEI - TALLER', 'TdIAalEI - TALLER', 'TdIAalEI - TALLER',
            'Matemáticas - AV1', 'Matemáticas - AV1', 'Música - AE', 'Física - AV3', 'Física - AV3', 'Física - AV3'
        ],
        'Viernes': [
            'Física - AV5', 'Física - AV5', 'Matemáticas - AV1', 'Inglés Academico - AV6', 'Inglés Academico - AV6', 'Inglés Academico - AV6',
            'IE - TALLER', 'IE - TALLER', 'IE - TALLER', 'IE - TALLER', 'IE - TALLER', 'IE - TALLER'
        ]
    },
    '10-5-B': {
        'Lunes': [
            'CEySaCI - AN1', 'CEySaCI - AN1', 'CEySaCI - AN1', 'Inglés Academico - AV6', 'Ética - AE', 'Español - AV2',
            'Guía - AV3', 'Cívica - AV3', 'Educación Física - GIMNASIO', 'Educación Física - GIMNASIO', 'Estudios Sociales - AV3', 'Estudios Sociales - AV3'
        ],
        'Martes': [
            'DDpePyAdIF - LAB5N', 'DDpePyAdIF - LAB5N', 'DDpePyAdIF - LAB5N', 'DDpePyAdIF - LAB5N', 'DDpePyAdIF - LAB5N', 'DDpePyAdIF - LAB5N',
            'GCC - AN1', 'GCC - AN1', 'GCC - AN1', 'EOtS - LAB5V', 'EOtS - LAB5V', 'EOtS - LAB5V'
        ],
        'Miércoles': [
            'CEySaCI - AN1', 'CEySaCI - AN1', 'CEySaCI - AN1', 'CEySaCI - AN1', 'CEySaCI - AN1', 'CEySaCI - AN1',
            'Física - AV1', 'Español - AV1', 'Español - AE', 'CEySaCI - AV3', 'CEySaCI - AV3', 'CEySaCI - AV3'
        ],
        'Jueves': [
            'GCC - AN1', 'GCC - AN1', 'GCC - AN1', 'EOtS - LAB5V', 'EOtS - LAB5V', 'EOtS - LAB5V',
            'Matemáticas - AV1', 'Matemáticas - AV1', 'Música - AE', 'Física - AV3', 'Física - AV3', 'Física - AV3'
        ],
        'Viernes': [
            'Física - AV5', 'Física - AV5', 'Matemáticas - AV1', 'Inglés Academico - AV6', 'Inglés Academico - AV6', 'Inglés Academico - AV6',
            'DDpePyAdIF - AN1', 'DDpePyAdIF - AN1', 'DDpePyAdIF - AN1', 'DDpePyAdIF - AN1', 'DDpePyAdIF - AN1', 'DDpePyAdIF - AN1'
        ]
    },
    '11-1-A': {
        'Lunes': [
            'Educación Física - GIMNASIO', 'Educación Física - GIMNASIO',
            'Química - AV4', 'Química - AV4', 'Química - AV4',
            'Ética - AE', 'DD - LAB4N', 'DD - LAB4N', 'DD - LAB4N',
            'Inglés academico - AE', 'Inglés academico - AE', 'Inglés academico - AE'
        ],
        'Martes': [
            'DD - LAB4N', 'DD - LAB4N', 'DD - LAB4N',
            'Cívica - AV1', 'Español - AV2', 'Español - AV2',
            'Matemáticas - AV1', 'Matemáticas - AV1', 'Matemáticas - AV1',
            'Estudios Sociales - AV5', 'Estudios Sociales - AV5', 'Español - AV2'
        ],
        'Miércoles': [
            'DP - LAB4N', 'DP - LAB4N', 'DP - LAB4N',
            'DP - LAB4N', 'DP - LAB4N', 'DP - LAB4N',
            'DT - LAB4N', 'DT - LAB4N', 'DT - LAB4N',
            'DD - LAB4N', 'DD - LAB4N', 'DD - LAB4N'
        ],
        'Jueves': [
            'Biología - AV3', 'Biología - AV3', 'Biología - AV3',
            'Afectividad - AV6', 'Música - AV4', 'Guía - AV2',
            'Foto - LAB4N', 'Foto - LAB4N', 'Foto - LAB4N',
            'Foto - LAB4N', 'Foto - LAB4N', 'Foto - LAB4N'
        ],
        'Viernes': [
            'IT - AE', 'IT - AE', 'IT - AE',
            'DD - AN5', 'DD - AN5', 'DD - AN5',
            'DP - AN5', 'DP - AN5', 'DP - AN5',
            'DP - AN5', 'DP - AN5', 'DP - AN5'
        ]
    },
    '11-1-B': {
        'Lunes': [
            'Educación Física - GIMNASIO', 'Educación Física - GIMNASIO',
            'Química - AV4', 'Química - AV4', 'Química - AV4',
            'Ética - AE', 'EOtA - LAB6V', 'EOtA - LAB6V', 'EOtA - LAB6V',
            'Inglés Academico - AE', 'Inglés Academico - AE', 'Inglés Academico - AE'
        ],
        'Martes': [
            'EOtA - LAB5V', 'EOtA - LAB5V', 'EOtA - LAB5V',
            'Cívica - AV1', 'Español - AV2', 'Español - AV2',
            'Matemáticas - AV1', 'Matemáticas - AV1', 'Matemáticas - AV1',
            'Estudios Sociales - AV5', 'Estudios Sociales - AV5', 'Español - AV2'
        ],
        'Miércoles': [
            'GEpC - LAB6V', 'GEpC - LAB6V', 'GEpC - LAB6V',
            'GEpC - LAB6V', 'GEpC - LAB6V', 'GEpC - LAB6V',
            'GEpC - LAB6V', 'GEpC - LAB6V', 'GEpC - LAB6V',
            'GEpC - LAB6V', 'GEpC - LAB6V', 'GEpC - LAB6V'
        ],
        'Jueves': [
            'Biología - AV3', 'Afectividad - AV6', 'Música - AV4',
            'Guía - AV2', 'GT - AN1', 'GT - AN1', 'GT - AN1',
            'GT - AN1', 'GT - AN1', 'GT - AN1', 'GT - AN1', 'GT - AN1'
        ],
        'Viernes': [
            'GT - LAB3V', 'GT - LAB3V', 'GT - LAB3V',
            'GT - LAB3V', 'GT - LAB3V', 'GT - LAB3V',
            'GT - AV5', 'GT - AV5', 'GT - AV5',
            'GT - AV5', 'GT - AV5', 'GT - AV5'
        ]
    },
    '11-2-A': {
        'Lunes': [
            'Química - AV4', 'Guía - AV4', 'Ética - AE',
            'Electr. Analog - TALLER', 'Electr. Analog - TALLER', 'Electr. Analog - TALLER',
            'Electr. Analog - TALLER', 'Electr. Analog - TALLER', 'Electr. Analog - TALLER',
            'AI - TALLER', 'AI - TALLER', 'AI - TALLER'
        ],
        'Martes': [
            'EOtlE - LAB4V', 'EOtlE - LAB4V', 'EOtlE - LAB4V',
            'AI - TALLER', 'AI - TALLER', 'AI - TALLER',
            'Estudios Sociales - AV5', 'Estudios Sociales - AV5', 'Español - AV2',
            'Inglés Academico - AE', 'Inglés Academico - AE', 'Inglés Academico - AE'
        ],
        'Miércoles': [
            'Biología - AV4', 'Biología - AV4', 'Biología - AV6',
            'Música - TALLER', 'AI - TALLER', 'AI - TALLER',
            'AI - TALLER', 'AI - TALLER', 'AI - TALLER',
            'EOtlE - LAB4V', 'EOtlE - LAB4V', 'EOtlE - LAB4V'
        ],
        'Jueves': [
            'Español - AV2', 'Español - AV2', 'Cívica - AE',
            'Matemáticas - AV5', 'Matemáticas - AV5', 'Matemáticas - AV5',
            'Elec. Dig - TALLER', 'Elec. Dig - TALLER', 'Elec. Dig - TALLER',
            'Elec. Dig - TALLER', 'Elec. Dig - TALLER', 'Elec. Dig - TALLER'
        ],
        'Viernes': [
            'Eel - TALLER', 'Eel - TALLER', 'Eel - TALLER',
            'Eel - TALLER', 'Eel - TALLER', 'Eel - TALLER',
            'Biología - AV3', 'Afectividad - AV4', 'Química - AV3',
            'Química - AV3', 'Educación Física - GIMNASIO', 'Educación Física - GIMNASIO'
        ]
    },
    '11-2-B': {
        'Lunes': [
            'Química - AV4', 'Guía - AV4', 'Ética - AE',
            'EOtS - LAB6V', 'EOtS - LAB6V', 'EOtS - LAB6V',
            'CEySaCI - AN1', 'CEySaCI - AN1', 'CEySaCI - AN1',
            'EelaaSE - LAB3N', 'EelaaSE - LAB3N', 'EelaaSE - LAB3N'
        ],
        'Martes': [
            'DDpePyAdlF - LAB3N', 'DDpePyAdlF - LAB3N', 'DDpePyAdlF - LAB3N',
            'DDpePyAdlF - LAB3N', 'DDpePyAdlF - LAB3N', 'DDpePyAdlF - LAB3N',
            'Estudios Sociales - AV5', 'Estudios Sociales - AV5', 'Español - AV2',
            'Inglés Academico - AE', 'Inglés Academico - AE', 'Inglés Academico - AE'
        ],
        'Miércoles': [
            'Biología - AV4', 'Biología - AV4', 'Música - AV6',
            'CEySaCI - LAB3N', 'CEySaCI - LAB3N', 'CEySaCI - LAB3N',
            'EOtS - LAB5V', 'EOtS - LAB5V', 'EOtS - LAB5V',
            'EelaaSE - LAB5N', 'EelaaSE - LAB5N', 'EelaaSE - LAB5N'
        ],
        'Jueves': [
            'Español - AV2', 'Español - AV2', 'Cívica - AE',
            'Matemáticas - AV5', 'Matemáticas - AV5', 'Matemáticas - AV5',
            'CEySaCI - AN5', 'CEySaCI - AN5', 'CEySaCI - AN5',
            'CEySaCI - AN5', 'CEySaCI - AN5', 'CEySaCI - AN5'
        ],
        'Viernes': [
            'DDpePyAdlF - LAB3N', 'DDpePyAdlF - LAB3N', 'DDpePyAdlF - LAB3N',
            'DDpePyAdlF - LAB3N', 'DDpePyAdlF - LAB3N', 'DDpePyAdlF - LAB3N',
            'Biología - AV3', 'Afectividad - AV4', 'Química - AV3',
            'Química - AV3', 'Educación Física - GIMNASIO', 'Educación Física - GIMNASIO'
        ]
    },
    '11-3-A': {
        'Lunes': [
            'Guía - AV2', 'Ética - AE', 'Educación Física - GIMNASIO', 'Educación Física - GIMNASIO',
            'Inglés Academico - AV6', 'Química - AV4', 'AySaC - LAB2N', 'AySaC - LAB2N', 'AySaC - LAB2N',
            'EotNCaS - LAB4V', 'EotNCaS - LAB4V', 'EotNCaS - LAB4V'
        ],
        'Martes': [
            'EelC - LAB3V', 'EelC - LAB3V', 'EelC - LAB3V', 'EelC - LAB3V', 'EelC - LAB3V', 'EelC - LAB3V',
            'Español - AV2', 'Español - AV2', 'Cívica - AV5', 'EotNCaS - LAB4V', 'EotNCaS - LAB4V', 'EotNCaS - LAB4V'
        ],
        'Miércoles': [
            'Español - AV2', 'Estudios Sociales - AV5', 'Estudios Sociales - AV5',
            'CySaR - LAB2N', 'CySaR - LAB2N', 'CySaR - LAB2N',
            'AySaC - LAB2N', 'AySaC - LAB2N', 'AySaC - LAB2N',
            'AySaC - LAB2N', 'AySaC - LAB2N', 'AySaC - LAB2N'
        ],
        'Jueves': [
            'Matemáticas - AV5', 'Matemáticas - AV5', 'Matemáticas - AV5',
            'Biología - AV3', 'Biología - AV3', 'Biología - AV3',
            'Música - AE', 'Inglés Academico - AV2', 'Inglés Academico - AV2',
            'CySaR - LAB3V', 'CySaR - LAB3V', 'CySaR - LAB3V'
        ],
        'Viernes': [
            'CySaR - LAB1N', 'CySaR - LAB1N', 'CySaR - LAB1N',
            'CySaR - LAB1N', 'CySaR - LAB1N', 'CySaR - LAB1N',
            'AySaC - LAB3V', 'AySaC - LAB3V', 'AySaC - LAB3V',
            'Afectividad - AV4', 'Química - AV3', 'Química - AV3'
        ]
    },
    '11-3-B': {
        'Lunes': [
            'Guía - AV2', 'Ética - AE', 'Educación Física - GIMNASIO', 'Educación Física - GIMNASIO',
            'Inglés Academico - AV6', 'Química - AV4', 'GT - AN2', 'GT - AN2', 'GT - AN2',
            'GT - AN2', 'GT - AN2', 'GT - AN2'
        ],
        'Martes': [
            'GT - AN2', 'GT - AN2', 'GT - AN2', 'EOtA - LAB5V', 'EOtA - LAB5V', 'EOtA - LAB5V',
            'Español - AV2', 'Español - AV2', 'Cívica - AV5', 'GT - AN2', 'GT - AN2', 'GT - AN2'
        ],
        'Miércoles': [
            'Español - AV2', 'Estudios Sociales - AV5', 'Estudios Sociales - AV5',
            'EOtA - LAB5V', 'EOtA - LAB5V', 'EOtA - LAB5V',
            'GEpC - AN2', 'GEpC - AN2', 'GEpC - AN2', 'GEpC - AN2', 'GEpC - AN2', 'GEpC - AN2'
        ],
        'Jueves': [
            'Matemáticas - AV5', 'Matemáticas - AV5', 'Matemáticas - AV5',
            'Biología - AV3', 'Biología - AV3', 'Biología - AV3',
            'Música - AE', 'Inglés Academico - AV2', 'Inglés Academico - AV2',
            'GT - AN2', 'GT - AN2', 'GT - AN2'
        ],
        'Viernes': [
            'GT - AN2', 'GT - AN2', 'GT - AN2',
            'GEpC - AN2', 'GEpC - AN2', 'GEpC - AN2', 'GEpC - AN2', 'GEpC - AN2', 'GEpC - AN2',
            'Afectividad - AV4', 'Química - AV3', 'Química - AV3'
        ]
    },
    '11-4-A': {
        'Lunes': [
            'EelC - LAB3V', 'EelC - LAB3V', 'EelC - LAB3V', 'EelC - LAB3V', 'EelC - LAB3V', 'EelC - LAB3V',
            'EotNCaS - AV6', 'EotNCaS - AV6', 'EotNCaS - AV6', 'AySaC - LAB2N', 'AySaC - LAB2N', 'AySaC - LAB2N'
        ],
        'Martes': [
            'EotNCaS - AV6', 'EotNCaS - AV6', 'EotNCaS - AV6', 'Ética - AE', 'Cívica - AV1', 'Guía - AV6',
            'AySaC - LAB2N', 'AySaC - LAB2N', 'AySaC - LAB2N', 'AySaC - LAB2N', 'AySaC - LAB2N', 'AySaC - LAB2N'
        ],
        'Miércoles': [
            'CySaR - LAB2N', 'CySaR - LAB2N', 'CySaR - LAB2N', 'Matemáticas - AV1', 'Matemáticas - AV1', 'Biología - AV4',
            'Música - AV2', 'Biología - AV4', 'Biología - AV4', 'Matemáticas - AV1', 'Estudios Sociales - AV1', 'Estudios Sociales - AV1'
        ],
        'Jueves': [
            'CySaR - LAB3V', 'CySaR - LAB3V', 'CySaR - LAB3V', 'AySaC - LAB3V', 'AySaC - LAB3V', 'AySaC - LAB3V',
            'CySaR - LAB3V', 'CySaR - LAB3V', 'CySaR - LAB3V', 'Español - AV2', 'Español - AV2', 'Español - AV2'
        ],
        'Viernes': [
            'Química - AV4', 'Química - AV4', 'Química - AV4', 'Inglés Academico - AE', 'Inglés Academico - AE',
            'Inglés Academico - AE', 'Educación Física - GIMNASIO', 'Educación Física - GIMNASIO',
            'Afectividad - AV4', 'CySaR - LAB3V', 'CySaR - LAB3V', 'CySaR - LAB3V'
        ]
    },
    '11-4-B': {
        'Lunes': [
            'Logistica - AN6', 'Logistica - AN6', 'Logistica - AN6', 'Logistica - AN6', 'Logistica - AN6', 'Logistica - AN6',
            'Ope. manu - LAB2V', 'Ope. manu - LAB2V', 'Ope. manu - LAB2V', 'Admin. Inv - LAB2V', 'Admin. Inv - LAB2V', 'Admin. Inv - LAB2V'
        ],
        'Martes': [
            'Admin. Inv - AN3', 'Admin. Inv - AN3', 'Admin. Inv - AN3', 'Ética - AE', 'Cívica - AV1', 'Guía - AV6',
            'Logistica - AN6', 'Logistica - AN6', 'Logistica - AN6', 'Admin. Inv - AN3', 'Admin. Inv - AN3', 'Admin. Inv - AN3'
        ],
        'Miércoles': [
            'Admin. Inv - LAB2V', 'Admin. Inv - LAB2V', 'Admin. Inv - LAB2V', 'Matemáticas - AV1', 'Matemáticas - AV1',
            'Biología - AV4', 'Música - AV2', 'Biología - AV4', 'Biología - AV4', 'Matemáticas - AV1', 'Estudios Sociales - AV1', 'Estudios Sociales - AV1'
        ],
        'Jueves': [
            'Ope. manu - AN3', 'Ope. manu - AN3', 'Ope. manu - AN3', 'Logistica - AN6', 'Logistica - AN6', 'Logistica - AN6',
            'EFCA - LAB4V', 'EFCA - LAB4V', 'EFCA - LAB4V', 'Español - AV2', 'Español - AV2', 'Español - AV2'
        ],
        'Viernes': [
            'Química - AV4', 'Química - AV4', 'Química - AV4', 'Inglés Academico - AE', 'Inglés Academico - AE',
            'Inglés Academico - AE', 'Educación Física - GIMNASIO', 'Educación Física - GIMNASIO',
            'Afectividad - AV4', 'EFCA - LAB4V', 'EFCA - LAB4V', 'EFCA - LAB4V'
        ]
    },
    '11-5-A': {
        'Lunes': [
            'GT - AN2', 'GT - AN2', 'GT - AN2', 'GT - AN2', 'GT - AN2', 'GT - AN2',
            'Química - AV4', 'Química - AV4', 'Química - AV4', 'Guía - AV4', 'Educación Física - GIMNASIO', 'Educación Física - GIMNASIO'
        ],
        'Martes': [
            'Ética - AE', 'Inglés Academico - AV1', 'Inglés Academico - AV1', 'GT - AN2', 'GT - AN2', 'GT - AN2',
            'GT - AN2', 'GT - AN2', 'GT - AN2', 'Biología - AV4', 'Matemáticas - AV1', 'Matemáticas - AV1'
        ],
        'Miércoles': [
            'GEpC - AN2', 'GEpC - AN2', 'GEpC - AN2', 'GEpC - AN2', 'GEpC - AN2', 'GEpC - AN2',
            'Estudios Sociales - AE', 'Estudios Sociales - AE', 'Música - AE', 'Inglés Academico - AE', 'Biología - AE', 'Biología - AE'
        ],
        'Jueves': [
            'GT - AN2', 'GT - AN2', 'GT - AN2', 'GT - AN2', 'GT - AN2', 'GT - AN2',
            'GEpC - AN2', 'GEpC - AN2', 'GEpC - AN2', 'Cívica - AV5', 'Afectividad - AV4', 'Matemáticas - AV1'
        ],
        'Viernes': [
            'EOtA - LAB6V', 'EOtA - LAB6V', 'EOtA - LAB6V', 'Español - AV2', 'Español - AV2', 'Español - AV2',
            'EOtA - AE', 'EOtA - AE', 'EOtA - AE', 'GEpC - AN2', 'GEpC - AN2', 'GEpC - AN2'
        ]
    },
    '11-5-B': {
        'Lunes': [
            'Logistica - LAB2V', 'Logistica - LAB2V', 'Logistica - LAB2V', 'Logistica - LAB2V', 'Logistica - LAB2V', 'Logistica - LAB2V',
            'Química - AV4', 'Química - AV4', 'Química - AV4', 'Guía - AV4', 'Educación Física - GIMNASIO', 'Educación Física - GIMNASIO'
        ],
        'Martes': [
            'Ética - AE', 'Inglés Academico - AV1', 'Inglés Academico - AV1', 'Admin. Inv - AN3', 'Admin. Inv - AN3', 'Admin. Inv - AN3',
            'Logistica - AN3', 'Logistica - AN3', 'Logistica - AN3', 'Biología - AV4', 'Matemáticas - AV1', 'Matemáticas - AV1'
        ],
        'Miércoles': [
            'EFCA - LAB4V', 'EFCA - LAB4V', 'EFCA - LAB4V', 'Logistica - LAB2V', 'Logistica - LAB2V', 'Logistica - LAB2V',
            'Estudios Sociales - AE', 'Estudios Sociales - AE', 'Música - AE', 'Inglés Academico - AE', 'Biología - AE', 'Biología - AE'
        ],
        'Jueves': [
            'EFCA - LAB4V', 'EFCA - LAB4V', 'EFCA - LAB4V', 'Ope. Manu - AN3', 'Ope. Manu - AN3', 'Ope. Manu - AN3',
            'Admin. Inv - AN3', 'Admin. Inv - AN3', 'Admin. Inv - AN3', 'Cívica - AV5', 'Afectividad - AV4', 'Matemáticas - AV1'
        ],
        'Viernes': [
            'Ope. Manu - LAB2V', 'Ope. Manu - LAB2V', 'Ope. Manu - LAB2V', 'Español - AV2', 'Español - AV2', 'Español - AV2',
            'Admin. Inv - LAB2V', 'Admin. Inv - LAB2V', 'Admin. Inv - LAB2V', 'Admin. Inv - LAB2V', 'Admin. Inv - LAB2V', 'Admin. Inv - LAB2V'
        ]
    },
    '12-1-A': {
        'Lunes': [
            'Matemáticas - AV6', 'Matemáticas - AV6', 'Matemáticas - AV6',
            'Estudios Sociales - AV3', 'Estudios Sociales - AV3', 'Matemáticas - AV2',
            'Química - AV5', 'Química - AV5', 'Química - AV5',
            'EFCA - LAB6V'
        ],
        'Martes': [
            'Estudios Sociales - AV3', 'Estudios Sociales - AV3', 'Estudios Sociales - AV3',
            'Import y Export - AN6', 'Import y Export - AN6', 'Import y Export - AN6',
            'EFCA - LAB5V', 'EFCA - LAB5V', 'EFCA - LAB5V',
            'Import y Export - AN6', 'Import y Export - AN6', 'Import y Export - AN6'
        ],
        'Miércoles': [
            'Ope. manu - AN6', 'Ope. manu - AN6', 'Ope. manu - AN6',
            'Español - AV2', 'Español - AV2', 'Biología - AE',
            'Logistica - AN6', 'Logistica - AN6', 'Logistica - AN6',
            'Logistica - AN6', 'Logistica - AN6', 'Logistica - AN6'
        ],
        'Jueves': [
            'Biología - AE', 'Biología - AE', 'Español - AV2',
            'Español - AV2', 'Inglés Academico - AV6', 'Inglés Academico - AV6',
            'Inglés Academico - AV6', 'Psicología - AV4', 'Cívica - AV5',
            'Ope. manu - AN6', 'Ope. manu - AN6', 'Ope. manu - AN6'
        ],
        'Viernes': [
            'Import y Export - AN6', 'Import y Export - AN6', 'Import y Export - AN6',
            'Import y Export - AN6', 'Import y Export - AN6', 'Import y Export - AN6',
            'Ope. manu - AN6', 'Ope. manu - AN6', 'Ope. manu - AN6',
            'Ope. manu - AN6', 'Ope. manu - AN6', 'Ope. manu - AN6'
        ]
    },
    '12-1-B': {
        'Lunes': [
            'Matemáticas - AV6', 'Matemáticas - AV6', 'Matemáticas - AV6',
            'Estudios Sociales - AV3', 'Estudios Sociales - AV3', 'Matemáticas - AV2',
            'Química - AV5', 'Química - AV5', 'Química - AV5',
            'GCyCpeSaC - AN1', 'GCyCpeSaC - AN1', 'GCyCpeSaC - AN1'
        ],
        'Martes': [
            'Estudios Sociales - AV3', 'Estudios Sociales - AV3', 'Estudios Sociales - AV3',
            'GCyCpeSaC - AN1', 'GCyCpeSaC - AN1', 'GCyCpeSaC - AN1',
            'DDpGllyeCE - LAB5N', 'DDpGllyeCE - LAB5N', 'DDpGllyeCE - LAB5N',
            'DDpGllyeCE - LAB5N', 'DDpGllyeCE - LAB5N', 'DDpGllyeCE - LAB5N'
        ],
        'Miércoles': [
            'GCyCpeSaC - LAB3N', 'GCyCpeSaC - LAB3N', 'GCyCpeSaC - LAB3N',
            'Español - AV2', 'Español - AV2', 'Biología - AE',
            'DDpGllyeCE - LAB3N', 'DDpGllyeCE - LAB3N', 'DDpGllyeCE - LAB3N',
            'DDpGllyeCE - LAB3N', 'DDpGllyeCE - LAB3N', 'DDpGllyeCE - LAB3N'
        ],
        'Jueves': [
            'Biología - AE', 'Biología - AE', 'Español - AV2',
            'Español - AV2', 'Inglés Academico - AV6', 'Inglés Academico - AV6',
            'Inglés Academico - AV6', 'Psicología - AV4', 'Cívica - AV5',
            'EOtBaCSE - LAB6V', 'EOtBaCSE - LAB6V', 'EOtBaCSE - LAB6V'
        ],
        'Viernes': [
            'GCyCpeSaC - LAB5N', 'GCyCpeSaC - LAB5N', 'GCyCpeSaC - LAB5N',
            'EOtBaCSE - LAB5V', 'EOtBaCSE - LAB5V', 'EOtBaCSE - LAB5V',
            'EOtBaCSE - LAB5V', 'EOtBaCSE - LAB5V', 'EOtBaCSE - LAB5V',
            'EOtBaCSE - LAB5V', 'EOtBaCSE - LAB5V', 'EOtBaCSE - LAB5V'
        ]
    },
    '12-2-A': {
        'Lunes': [
            'Química - AV1', 'Química - AV1', 'Química - AV1',
            'AySaC - LAB1V', 'AySaC - LAB1V', 'AySaC - LAB1V',
            'AySaC - LAB1V', 'AySaC - LAB1V', 'AySaC - LAB1V',
            'CySaR - LAB1V', 'CySaR - LAB1V', 'CySaR - LAB1V'
        ],
        'Martes': [
            'Biología - AV4', 'Biología - AV4', 'Matemáticas - AV2',
            'Español - AV6', 'Español - AV6', 'Estudios Sociales - AV3',
            'Estudios Sociales - AV3', 'Estudios Sociales - AV3',
            'Biología - AV4', 'ST - LAB1N', 'ST - LAB1N', 'ST - LAB1N'
        ],
        'Miércoles': [
            'Inglés Academico - AV6', 'Inglés Academico - AV6',
            'Estudios Sociales - AV3', 'Estudios Sociales - AV3',
            'Cívica - AE', 'Inglés Academico - AV6',
            'AySaC - LAB1V', 'AySaC - LAB1V', 'AySaC - LAB1V',
            'AySaC - LAB1V', 'AySaC - LAB1V', 'AySaC - LAB1V'
        ],
        'Jueves': [
            'Matamáticas - AV1', 'Matamáticas - AV1', 'Matamáticas - AV1',
            'CySaR - LAB1V', 'CySaR - LAB1V', 'CySaR - LAB1V',
            'EotNCaS - LAB6V', 'EotNCaS - LAB6V', 'EotNCaS - LAB6V',
            'CySaR - LAB1V', 'CySaR - LAB1V', 'CySaR - LAB1V'
        ],
        'Viernes': [
            'EotNCaS - LAB5V', 'EotNCaS - LAB5V', 'EotNCaS - LAB5V',
            'CySaR - LAB1V', 'CySaR - LAB1V', 'CySaR - LAB1V',
            'Psicología - LAB6V', 'Español - LAB6V', 'Español - LAB6V',
            'ST - LAB1V', 'ST - LAB1V', 'ST - LAB1V'
        ]
    },
    '12-2-B': {
        'Lunes': [
            'Química - AV1', 'Química - AV1', 'Química - AV1',
            'DDpePydlF - LAB5N', 'DDpePydlF - LAB5N', 'DDpePydlF - LAB5N',
            'DDpePydlF - LAB5N', 'DDpePydlF - LAB5N', 'DDpePydlF - LAB5N',
            'CEySC - LAB5N', 'CEySC - LAB5N', 'CEySC - LAB5N'
        ],
        'Martes': [
            'Biología - AV4', 'Biología - AV4', 'Matemáticas - AV2',
            'Español - AV6', 'Español - AV6', 'Estudios Sociales - AV3',
            'Estudios Sociales - AV3', 'Estudios Sociales - AV3',
            'Biología - AV4', 'CEySC - AN1', 'CEySC - AN1', 'CEySC - AN1'
        ],
        'Miércoles': [
            'Inglés Academico - AV6', 'Inglés Academico - AV6',
            'Estudios Sociales - AV3', 'Estudios Sociales - AV3',
            'Civíca - AE', 'Inglés Academico - AV6',
            'CEySC - AN1', 'CEySC - AN1', 'CEySC - AN1',
            'EOtS - LAB5V', 'EOtS - LAB5V', 'EOtS - LAB5V'
        ],
        'Jueves': [
            'Matemáticas - AV1', 'Matemáticas - AV1', 'Matemáticas - AV1',
            'DDpePydlF - LAB3N', 'DDpePydlF - LAB3N', 'DDpePydlF - LAB3N',
            'DDpePydlF - LAB3N', 'DDpePydlF - LAB3N', 'DDpePydlF - LAB3N',
            'CEySC - LAB3N', 'CEySC - LAB3N', 'CEySC - LAB3N'
        ],
        'Viernes': [
            'GCC - AN1', 'GCC - AN1', 'GCC - AN1',
            'GCC - AN1', 'GCC - AN1', 'GCC - AN1',
            'Psicología - AV4', 'Español - AV6', 'Español - AV6',
            'EOtS - AE', 'EOtS - AE', 'EOtS - AE'
        ]
    },
    '12-3-A': {
        'Lunes': [
            'Estudios Sociales - AV3', 'Estudios Sociales - AV3', 'Estudios Sociales - AV3',
            'Química - AV1', 'Química - AV1', 'Química - AV1',
            'Matemáticas - AV1', 'Matemáticas - AV1', 'Matemáticas - AV1',
            'Inglés Academico - AV6', 'Inglés Academico - AV6', 'Español - AV2'
        ],
        'Martes': [
            'GeC - LAB2V', 'GeC - LAB2V', 'GeC - LAB2V',
            'Estudios Sociales - AV3', 'Biología - AV3', 'Biología - AV4',
            'GeC - LAB2V', 'GeC - LAB2V', 'GeC - LAB2V',
            'Inglés Academico - AV6', 'Biología - AV4', 'Biología - AV4'
        ],
        'Miércoles': [
            'CF - AN3', 'CF - AN3', 'CF - AN3',
            'CF - AN3', 'CF - AN3', 'CF - AN3',
            'CF - AN3', 'CF - AN3', 'CF - AN3',
            'CF - AN3', 'CF - AN3', 'CF - AN3'
        ],
        'Jueves': [
            'GeC - LAB5N', 'GeC - LAB5N', 'GeC - LAB5N',
            'GeC - LAB5N', 'GeC - LAB5N', 'GeC - LAB5N',
            'Español - AV3', 'Español - AV3', 'Español - AV3',
            'Psicología - AV4', 'Matemáticas - AV1', 'Cívica - AV5'
        ],
        'Viernes': [
            'GeC - AN3', 'GeC - AN3', 'GeC - AN3',
            'GeC - AN3', 'GeC - AN3', 'GeC - AN3',
            'EOtAF - LAB6V', 'EOtAF - LAB6V', 'EOtAF - LAB6V',
            'EOtAF - LAB6V', 'EOtAF - LAB6V', 'EOtAF - LAB6V'
        ]
    },
    '12-3-B': {
        'Lunes': [
            'Estudios Sociales - AV3', 'Estudios Sociales - AV3', 'Estudios Sociales - AV3',
            'Química - AV1', 'Química - AV1', 'Química - AV1',
            'Matemáticas - AV1', 'Matemáticas - AV1', 'Matemáticas - AV1',
            'Inglés Academico - AV6', 'Inglés Academico - AV6', 'Español - AV2'
        ],
        'Martes': [
            'AySaC - LAB1V', 'AySaC - LAB1V', 'AySaC - LAB1V',
            'Estudios Sociales - AV3', 'Estudios Sociales - AV3', 'Biología - AV4',
            'AySaC - LAB1V', 'AySaC - LAB1V', 'AySaC - LAB1V',
            'Inglés Academico - AV6', 'Biología - AV4', 'Biología - AV4'
        ],
        'Miércoles': [
            'EotNCaS - LAB5V', 'EotNCaS - LAB5V', 'EotNCaS - LAB5V',
            'CySaR - LAB1V', 'CySaR - LAB1V', 'CySaR - LAB1V',
            'CySaR - LAB3V', 'CySaR - LAB3V', 'CySaR - LAB3V',
            'AySaC - LAB3V', 'AySaC - LAB3V', 'AySaC - LAB3V'
        ],
        'Jueves': [
            'CySaR - LAB1V', 'CySaR - LAB1V', 'CySaR - LAB1V',
            'ST - LAB1N', 'ST - LAB1N', 'ST - LAB1N',
            'Español - AV3', 'Español - AV3', 'Español - AV3',
            'Psicología - AV4', 'Matemáticas - AV1', 'Cívica - AV5'
        ],
        'Viernes': [
            'AySaC - LAB1V', 'AySaC - LAB1V', 'AySaC - LAB1V',
            'EotNCaS - LAB6V', 'EotNCaS - LAB6V', 'EotNCaS - LAB6V',
            'ST - LAB1N', 'ST - LAB1N', 'ST - LAB1N',
            'CySaR - LAB1V', 'CySaR - LAB1V', 'CySaR - LAB1V'
        ]
    },
    '12-4': {
        'Lunes': [
            'EOtA - LAB4V', 'EOtA - LAB4V', 'EOtA - LAB4V',
            'GeC - AN5', 'GeC - AN5', 'GeC - AN5',
            'GeC - AN5', 'GeC - AN5', 'GeC - AN5',
            'Español - AV2', 'Química - AV4', 'Química - AV4'
        ],
        'Martes': [
            'GeC - AN5', 'GeC - AN5', 'GeC - AN5',
            'GeC - AN5', 'GeC - AN5', 'GeC - AN5',
            'GeC - AN5', 'GeC - AN5', 'GeC - AN5',
            'GeC - AN5', 'GeC - AN5', 'GeC - AN5'
        ],
        'Miércoles': [
            'Matemáticas - AV1', 'Matemáticas - AV1',
            'Biología - AV4', 'Biología - AV4', 'Biología - AV4',
            'Cívica - AV2', 'Estudios Sociales - AV3',
            'Estudios Sociales - AV3', 'Estudios Sociales - AV3',
            'Español - AV2', 'Español - AV2', 'Español - AV2'
        ],
        'Jueves': [
            'Inglés Academico - AV6', 'Inglés Academico - AV6',
            'Psicología - AV6', 'EOtA - LAB4V', 'EOtA - LAB4V',
            'EOtA - LAB4V', 'GC - LAB5N', 'GC - LAB5N',
            'GC - LAB5N', 'GC - LAB5N', 'GC - LAB5N', 'GC - LAB5N'
        ],
        'Viernes': [
            'Matemáticas - AV1', 'Matemáticas - AV1',
            'Inglés Academico - AV6', 'Química - AV4',
            'Estudios Sociales - AV3', 'Estudios Sociales - AV3',
            'GC - AN3', 'GC - AN3', 'GC - AN3',
            'GC - AN3', 'GC - AN3', 'GC - AN3'
        ]
    },
    '12-5': {
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
};

// Función para cargar el horario del grupo seleccionado
function cargarHorario() {
    const grupoSelect = document.getElementById('grupoSelect');
    const grupoSeleccionado = grupoSelect.value;
    const horarioGrupo = horarios[grupoSeleccionado];

    const tablaBody = document.querySelector('#horarioTable tbody');
    tablaBody.innerHTML = ''; // Limpiar contenido anterior

    // Iterar sobre cada día y sus horarios
    Object.keys(horarioGrupo).forEach(dia => {
        const horariosDia = horarioGrupo[dia];
        const nuevaFila = document.createElement('tr');

        // Crear celda para el día
        const celdaDia = document.createElement('td');
        celdaDia.textContent = dia;
        nuevaFila.appendChild(celdaDia);

        // Crear celdas para los horarios, combinando celdas repetidas
        let celdaAnterior = null;
        let colspan = 1;
        horariosDia.forEach((horario, index) => {
            if (horario === celdaAnterior) {
                colspan++;
            } else {
                if (celdaAnterior !== null) {
                    const celdaHorario = document.createElement('td');
                    celdaHorario.textContent = celdaAnterior;
                    if (colspan > 1) {
                        celdaHorario.setAttribute('colspan', colspan);
                    }
                    nuevaFila.appendChild(celdaHorario);
                }
                celdaAnterior = horario;
                colspan = 1;
            }

            // Añadir la última celda si es necesario
            if (index === horariosDia.length - 1) {
                const celdaHorario = document.createElement('td');
                celdaHorario.textContent = celdaAnterior;
                if (colspan > 1) {
                    celdaHorario.setAttribute('colspan', colspan);
                }
                nuevaFila.appendChild(celdaHorario);
            }
        });

        // Agregar fila a la tabla
        tablaBody.appendChild(nuevaFila);
    });
}

