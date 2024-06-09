// Definición de los horarios por grupo
const horarios = {
    'Elizabeth Zuñiga Barrientos': {
        'Lunes': ['11-1', '11-1', '11-3', '11-3', '', '', '10-1', '10-1', '10-5', '10-5', '11-5', '11-5'],
        'Martes': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Miércoles': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Jueves': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Viernes': ['10-3', '10-3', '10-4', '10-4', '', '', '11-4', '11-4', '10-2', '10-2', '11-2', '11-2'],
    },
    'Silvia Bermúdez Calderón': {
        'Lunes': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Martes': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Miércoles': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Jueves': ['11-1', '11-1', '11-1', '11-3', '11-3', '11-3', '', '', '', '', '', ''],
        'Viernes': ['', '', '', '', '', '', '', '', '', '', '', ''],
    },
    'Carlos Masis Navarro': {
        'Lunes': ['10-3-A CS', '10-3-A CS', '10-3-A CS', '10-3-A CS', '10-3-A CS', '10-3-A CS', '10-3-A CS', '10-3-A CS', '10-3-A CS', '10-1-B DW', '10-1-B DW', '10-1-B DW'],
        'Martes': ['10-3-A CS', '10-3-A CS', '10-3-A CS', '10-1-B DW', '10-1-B DW', '10-1-B DW', '10-1-B DW', '10-1-B DW', '10-1-B DW', '10-1-B DW', '10-1-B DW', '10-1-B DW'],
        'Miércoles': ['10-1-B DW', '10-1-B DW', '10-1-B DW', '10-1-B DW', '10-1-B DW', '10-1-B DW', '10-3-A CS', '10-3-A CS', '10-3-A CS', '10-1-B DW', '10-1-B DW', '10-1-B DW'],
        'Jueves': ['10-3-A CS', '10-3-A CS', '10-3-A CS', '10-1-B DW', '10-1-B DW', '10-1-B DW', '10-3-A CS', '10-3-A CS', '10-3-A CS', '10-3-A CS', '10-3-A CS', '10-3-A CS'],
        'Viernes': ['10-1-B DW', '10-1-B DW', '10-1-B DW', '10-1-B DW', '10-1-B DW', '10-1-B DW', '10-3-A CS', '10-3-A CS', '10-3-A CS', '10-3-A CS', '10-3-A CS', '10-3-A CS'],
    },
    'Maricel Rodríguez Ramírez': {
        'Lunes': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Martes': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Miércoles': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Jueves': ['', '', '12-4', '11-1', '', '', '', '12-1', '', '12-3', '11-5', ''],
        'Viernes': ['', '', '12-5', '', '', '', '12-2', '11-2', '11-4', '11-3', '', ''],
    },
    'Elke Bruns Coto': {
        'Lunes': ['11-2', '11-2', '11-1', '11-1', '11-1', '11-3', '11-5', '11-5', '11-5', '11-5', '12-4', '12-4'],
        'Martes': ['12-2', '12-2', '', '', '', '12-3', '12-5', '12-5', '12-2', '11-5', '12-3', '12-3'],
        'Miércoles': ['11-2', '11-2', '12-4', '12-4', '12-4', '11-4', '', '11-4', '11-4', '', '11-5', '11-5'],
        'Jueves': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Viernes': ['11-4', '11-4', '11-4', '12-4', '', '12-5', '11-2', '', '11-2', '11-2', '11-3', '11-3'],
    },
    'Daniela Mata Carballo': {
        'Lunes': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Martes': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Miércoles': ['11-1 A', '11-1 A', '11-1 A', '11-1 A', '11-1 A', '11-1 A', '', '', '', '', '', ''],
        'Jueves': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Viernes': ['10-1 A', '10-1 A', '10-1 A', '10-1 A', '10-1 A', '10-1 A', '11-1 A', '11-1 A', '11-1 A', '11-1 A', '11-1 A', '11-1 A'],
    },
    'Gabriela Montealegre Alemán': {
        'Lunes': ['', '', '', '', '', '', '', '', '', 'CA', 'CA', 'CA'],
        'Martes': ['10-4', '10-4', 'CA', 'CA', 'CA', 'CA', 'CA', 'CA', 'CA', 'CA', '10-3', '10-3'],
        'Miércoles': ['', '', '', '', '', '12-1', '10-5', 'CA', 'CA', '10-4', '10-4', '10-3'],
        'Jueves': ['12-1', '12-1', 'CA', '10-3', '10-3', 'CA', '10-4', 'CA', 'CA', '10-5', '10-5', '10-5'],
        'Viernes': ['10-5', '10-5', '10-3', 'CA', '10-4', 'CA', 'Evaluación', 'Evaluación', 'Evaluación', 'CA', '', ''],
    },
    'José Raúl Aguilar López': {
        'Lunes': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Martes': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Miércoles': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Jueves': ['11-3', '11-3', '11-3', '11-2', '11-2', '11-2', '', '', '', '', '', ''],
        'Viernes': ['', '', '', '', '', '', '', '', '', '', '', ''],
    },
    'Kenneth Castillo Tenorio': {
        'Lunes': ['', '', '', '12-2A CS', '12-2A CS', '12-2A CS', '12-2A CS', '12-2A CS', '12-2A CS', '', '', ''],
        'Martes': ['12-5 CS', '12-5 CS', '12-5 CS', '', '', '', '', '', '', '12-2-A CS', '12-2-A CS', '12-2-A CS'],
        'Miércoles': ['', '', '', '', '', '', '12-2-A CS', '12-2-A CS', '12-2-A CS', '12-2-A CS', '12-2-A CS', '12-2-A CS'],
        'Jueves': ['', '', '', '12-3-B', '12-3-B', '12-3-B', '', '', '', '12-5 CS', '12-5 CS', '12-5 CS'],
        'Viernes': ['', '', '', '', '', '', '12-2-B CS', '12-2-B CS', '12-2-B CS', '12-2-A CS', '12-2-A CS', '12-2-A CS'],
    },
    'Alejandro Jiménez Murillo': {
        'Lunes': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Martes': ['', '', '', '11-1', '11-4', '', '11-2', '11-2', '11-3', '11-1', '11-1', '10-2'],
        'Miércoles': ['', '11-3', '11-3', '', '12-2', '12-4', '11-5', '11-5', '12-5', '', '11-4', '11-4'],
        'Jueves': ['10-1', '10-1', '11-2', '10-2', '10-2', '10-3', '', '10-1', '12-1', '11-5', '', '12-3'],
        'Viernes': ['', '', '', '', '', '', '', '', '', '', '', ''],
    },
    'Magaly Pérez Fallas': {
        'Lunes': ['11-1', '11-1', '11-3', '11-3', '', '', '10-1', '10-1', '10-5', '10-5', '11-5',
            '11-5'],
        'Martes': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Miércoles': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Jueves': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Viernes': ['10-3', '10-3', '10-4', '10-4', '', '', '11-4', '11-4', '10-2', '10-2', '11-2', '11-2'],
    },
    'Josefa Espinoza Rivera': {
        'Lunes': ['10-1', '11-3', '11-2', '10-2', '10-5', '11-1', '', '', '', '', '', ''],
        'Martes': ['11-5', '', '10-4', '11-4', '10-3', '', '', '', '', '', '', ''],
        'Miércoles': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Jueves': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Viernes': ['', '', '', '', '', '', '', '', '', '', '', ''],
    },
    'Martha García Marenga': {
        'Lunes': ['11-3', '10-1', '10-1', '', '10-2', '10-5', '', '', '10-1', '12-4', '10-4', '12-3'],
        'Martes': ['', '', '', '10-3', '11-1', '11-1', '11-3', '11-3', '11-2', '10-2', '10-2', '11-1'],
        'Miércoles': ['11-3', '10-3', '10-3', '12-1', '12-1', '', '', '10-5', '10-5', '12-4', '12-4', '12-4'],
        'Jueves': ['11-2', '11-2', '12-1', '12-1', '', '11-1', '12-3', '12-3', '12-3', '11-4', '11-4', '11-4'],
        'Viernes': ['10-4', '10-4', '', '11-5', '11-5', '11-5', '', '', '', '', '', ''],
    },
    'Marvin Zammora Guerrero': {
        'Lunes': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Martes': ['', '', '', '12-2', '12-2', '11-4', '', '', '12-5', '', '', ''],
        'Miércoles': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Jueves': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Viernes': ['', '', '', '', '', '10-4', '', '12-2', '12-2', '12-5', '12-5', '12-5'],
    },
    'Yendry Solís Moya': {
        'Lunes': ['12-3', '12-3', '12-3', '12-1', '12-1', '', '10-5', '10-5', '', '10-4', '10-5',
            '10-5'],
        'Martes': ['12-1', '12-1', '12-1', '12-3', '12-3', '12-2', '12-2', '12-2', '10-3', '10-3', '', ''],
        'Miércoles': ['', '', '12-2', '12-2', '10-4', '10-4', '12-4', '12-4', '12-4', '12-5', '12-5', '12-5'],
        'Jueves': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Viernes': ['12-5', '12-5', '', '', '12-4', '12-4', 'Evaluación', 'Evaluación', 'Evaluación', '', '', ''],
    },
    'Lorna Matarrita Román': {
        'Lunes': ['10-2', '10-2', '10-2', '10-1', '10-1', '10-1', '', '', '', '', '', ''],
        'Martes': ['10-1', '10-1', '10-1', '10-2', '10-2', '10-2', '', '', '', '', '', ''],
        'Miércoles': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Jueves': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Viernes': ['', '', '', '', '', '', '', '', '', '', '', ''],
    },
    'Thelma Sequeira Altamirano': {
        'Lunes': ['', '', '', '10-5', '', '', '11-4', '11-4', '11-4', '12-3', '12-3', '10-3'],
        'Martes': ['11-4', '11-4', '11-4', '', '', '', '10-3', '10-3', '', '12-3', '', ''],
        'Miércoles': ['12-2', '12-2', '', '12-5', '12-5', '12-2', '10-4', '12-5', '', '10-3', '10-3', '10-4'],
        'Jueves': ['12-4', '12-4', '', '', '12-1', '12-1', '12-1', '10-4', '10-4', '', '10-1', '10-1'],
        'Viernes': ['', '', '12-4', '10-5', '10-5', '10-5', 'Evaluación', 'Evaluación', 'Evaluación', '10-1', '10-1', '10-2'],
    },
    'Johannia Piedra Pérez': {
        'Lunes': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Martes': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Miércoles': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Jueves': ['12-5', '12-5', '12-5', '12-5', '12-5', '12-5', '12-2 A', '12-2 A', '12-2 A', '12-1 B', '12-1B', '12-1B'],
        'Viernes': ['12-2 A', '12-2 A', '12-2 A', '12-1 B', '12-1 B', '12-1 B', '12-1 B', '12-1 B', '12-1 B', '12-1 B', '12-1 B', '12-1 B'],
    },
    'Diego Vindas Esquivel': {
        'Lunes': ['12-1', '12-1', '12-1', '', '', '12-1', '12-3', '12-3', '12-3', '10-3', '10-3',
            '10-4'],
        'Martes': ['', '', '12-2', 'Comité Apoyo/Orientación', 'Comité Apoyo/Orientación', '10-3', '11-1', '11-1', '11-1', '', '11-5', '11-5'],
        'Miércoles': ['12-4', '12-4', '', '11-4', '11-4', '12-5', '12-5', '10-4', '10-4', '11-4',
            '', ''],
        'Jueves': ['12-2', '12-2', '12-2', '', '', '', '10-5', '10-5', '10-1', '10-1', '12-3', '11-5'],
        'Viernes': ['12-4', '12-4', '10-5', '12-5', '', '10-2', '10-2', '', '', '10-2', '10-1', ''],
    },

    'Alberto Campos Barrantes': {
        'Lunes': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Martes': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Miércoles': ['10-3', '', '11-2', '10-4', '', '', '11-4', '', '11-5', '', '', ''],
        'Jueves': ['', '', '10-1', '', '11-1', '10-2', '11-3', '', '10-5', '', '', ''],
        'Viernes': ['', '', '', '', '', '', '', '', '', '', '', ''],
    },
    'Helenny Hines Edwards': {
        'Lunes': ['12-2', '12-2', '12-2', '12-3', '12-3', '12-3', '12-1', '12-1', '12-1', '12-5',
            '12-5', '12-5'],
        'Martes': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Miércoles': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Jueves': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Viernes': ['', '', '', '', '', '', '', '', '', '', '', ''],
    },

    'Lizeth Ortega Rodríguez': {
        'Lunes': ['12-4', '12-4', '12-4', '10-4 B', '10-4 B', '10-4 B', '10-4 B', '10-4 B', '10-4 B', '11 - 3 A', '11 - 3 A', '11 - 3 A'],
        'Martes': ['11-2 A', '11-2 A', '11-2 A', '10-4 B', '10-4 B', '10-4 B', '10-2 B', '10-2 B', '10-2 B', '11-3 A', '11-3 A', '11-3 A'],
        'Miércoles': ['11-5 B', '11-5 B', '11-5 B', '10-3 A', '10-3 A', '10-3 A', '10-1', '10-1',
            '10-1', '11-2 A', '11-2 A', '11-2 A'],
        'Jueves': ['11-5 B', '11-5 B', '11-5 B', '12-4', '12-4', '12-4', '11-4 B', '11-4 B', '11-4 B', '10-4 B', '10-4 B', '10-4 B'],
        'Viernes': ['10-2 B', '10-2 B', '10-2 B', '10-3 A', '10-3 A', '10-3 A', '10-1 B', '10-1 B', '10-1 B', '11-4 B', '11-4 B', '11-4 B'],
    },

    'Rebeca Trejos Cerdas': {
        'Lunes': ['11-4 A', '11-4 A', '11-4 A', '11-4 A', '11-4 A', '11-4 A', '11-3 A', '11-3 A',
            '11-3 A', '11-4 A', '11-4 A', '11-4 A'],
        'Martes': ['11-3 A', '11-3 A', '11-3 A', '11-3 A', '11-3 A', '11-3 A', '11-4 A', '11-4 A', '11-4 A', '11-4 A', '11-4 A', '11-4 A'],
        'Miércoles': ['11-4 A', '11-4 A', '11-4 A', '11-3 A', '11-3 A', '11-3 A', '11-3 A', '11-3 A', '11 - 3 A', '11 - 3 A', '11 - 3 A', '11 - 3 A'],
        'Jueves': ['11-4 A', '11-4 A', '11-4 A', '11-4 A', '11-4 A', '11-4 A', '11-4 A', '11-4 A', '11-4 A', '11-3 A', '11-3 A', '11-3 A'],
        'Viernes': ['11-3 A', '11-3 A', '11-3 A', '11-3 A', '11-3 A', '11-3 A', '11-3 A', '11-3 A', '11-3 A', '11-4 A', '11-4 A', '11-4 A'],
    },

    'William Mora Cantillo': {
        'Lunes': ['12-5', '12-5', '12-5', '12-5', '12-5', '12-5', '12-5', '12-5', '12-5', '12-2 A', '12-2 A', '12-2 A'],
        'Martes': ['12-3 B', '12-3 B', '12-3 B', '12-5', '12-5', '12-5', '12-3 B', '12-3 B', '12-3 B', '12-5', '12-5', '12-5'],
        'Miércoles': ['12-5', '12-5', '12-5', '12-3 B', '12-3 B', '12-3 B', '12-3 B', '12-3 B', '12-3 B', '12-3 B', '12-3 B', '12-3 B'],
        'Jueves': ['12-3 B', '12-3 B', '12-3 B', '12-2 A', '12-2 A', '12-2 A', '12-5', '12-5', '12-5', '12-2 A', '12-2 A', '12-2 A'],
        'Viernes': ['12-3 B', '12-3 B', '12-3 B', '12-2 A', '12-2 A', '12-2 A', '12-5', '12-5', '12-5', '12-3 B', '12-3 B', '12-3 B'],
    },
    'Yeinner Esquivel Hidalgo': {
        'Lunes': ['10-5 A', '10-5 A', '10-5 A', '11-2 A', '11-2 A', '11-2 A', '11-2 A', '11-2 A',
            '11-2 A', '11-2 A', '11-2 A', '11-2 A'],
        'Martes': ['10-5 A', '10-5 A', '10-5 A', '11-2 A', '11-2 A', '11-2 A', '10-5 A', '10-5 A', '10-5 A', '10-5 A', '10-5 A', '10-5 A'],
        'Miércoles': ['10-5 A', '10-5 A', '10-5 A', '11-2 A', '11-2 A', '11-2 A', '11-2 A', '11-2 A', '11-2 A', '10-5 A', '10-5 A', '10-5 A'],
        'Jueves': ['10-5 A', '10-5 A', '10-5 A', '10-5 A', '10-5 A', '10-5 A', '11-2 A', '11-2 A', '11-2 A', '11-2 A', '11-2 A', '11-2 A'],
        'Viernes': ['11-2 A', '11-2 A', '11-2 A', '11-2 A', '11-2 A', '11-2 A', '10-5 A', '10-5 A', '10-5 A', '10-5 A', '10-5 A', '10-5 A'],
    },

    'Claudia Palma Rugama': {
        'Lunes': ['10-5 B', '10-5 B', '10-5 B', '12-2 B', '12-2 B', '12-2 B', '12-2 B', '12-2 B',
            '12-2 B', '12-2 B', '12-2 B', '12-2 B'],
        'Martes': ['10-5 B', '10-5 B', '10-5 B', '10-5 B', '10-5 B', '10-5 B', '10-5 B', '10-5 B', '10-5 B', '12-2 B', '12-2 B', '12-2 B'],
        'Miércoles': ['10-5 B', '10-5 B', '10-5 B', '10-5 B', '10-5 B', '10-5 B', '12-2 B', '12-2 B', '12-2 B', '10-5 B', '10-5 B', '10-5 B'],
        'Jueves': ['10-5 B', '10-5 B', '10-5 B', '12-2 B', '12-2 B', '12-2 B', '12-2 B', '12-2 B', '12-2 B', '12-2 B', '12-2 B', '12-2 B'],
        'Viernes': ['12-2 B', '12-2 B', '12-2 B', '12-2 B', '12-2 B', '12-2 B', '10-5 B', '10-5 B', '10-5 B', '10-5 B', '10-5 B', '10-5 B'],
    },
    'Johanna Wolmers Valverde': {
        'Lunes': ['10-4 B', '10-4 B', '10-4 B', '10-3 B', '10-3 B', '10-3 B', '11-2 B', '11-2 B', '11-2 B', '11-1 B', '11-1 B', '11-1 B'],
        'Martes': ['10-3 B', '10-3 B', '10-3 B', '12-1 B', '12-1 B', '12-1 B', '12-1 B', '12-1 B', '12-1 B', '12-1 B', '12-1 B', '12-1 B'],
        'Miércoles': ['12-1 B', '12-1 B', '12-1 B', '11-2 B', '11-2 B', '11-2 B', '12-1 B', '12-1 B', '12-1 B', '12-1 B', '12-1 B', '12-1 B'],
        'Jueves': ['10-4 B', '10-4 B', '10-4 B', '10-4 B', '10-4 B', '10-4 B', '11-2 B', '11-2 B', '11-2 B', '11-2 B', '11-2 B', '11-2 B'],
        'Viernes': ['12-1 B', '12-1 B', '12-1 B', '10-3 B', '10-3 B', '10-3 B', '10-3 B', '10-3 B', '10-3 B', '10-4 B', '10-4 B', '10-4 B'],
    },
    'Arturo Torres Cordero': {
        'Lunes': ['11-5 B', '11-5 B', '11-5 B', '11-5 B', '11-5 B', '11-5 B', '11-4 B', '11-4 B', '11-4 B', '11-4 B', '11-4 B', '11-4 B'],
        'Martes': ['11-4 B', '11-4 B', '11-4 B', '11-5 B', '11-5 B', '11-5 B', '11-5 B', '11-5 B', '11-5 B', '11-4 B', '11-4 B', '11-4 B'],
        'Miércoles': ['11-4 B', '11-4 B', '11-4 B', '11-5 B', '11-5 B', '11-5 B', '10-2 B', '10-2 B', '10-2 B', '10-2 B', '10-2 B', '10-2 B'],
        'Jueves': ['11-4 B', '11-4 B', '11-4 B', '11-5 B', '11-5 B', '11-5 B', '11-5 B', '11-5 B', '11-5 B', '10-2 B', '10-2 B', '10-2 B'],
        'Viernes': ['11-5 B', '11-5 B', '11-5 B', '10-2 B', '10-2 B', '10-2 B', '11-5 B', '11-5 B', '11-5 B', '11-5 B', '11-5 B', '11-5 B'],
    },
    'Viviana Fernández Chaves': {
        'Lunes': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Martes': ['12-3 A', '12-3 A', '12-3 A', '', '', '', '12-3 A', '12-3 A', '12-3 A', '', '', ''],
        'Miércoles': ['12-3 A', '12-3 A', '12-3 A', '12-3 A', '12-3 A', '12-3 A', '12-3 A', '12-3 A', '12-3 A', '12-3 A', '12-3 A', '12-3 A'],
        'Jueves': ['12-3 A', '12-3 A', '12-3 A', '12-3 A', '12-3 A', '12-3 A', '12-4', '12-4', '12-4', '12-4', '12-4', '12-4'],
        'Viernes': ['12-3 A', '12-3 A', '12-3 A', '12-3 A', '12-3 A', '12-3 A', '12-4', '12-4', '12-4', '12-4', '12-4', '12-4'],
    },
    'Luis Leiva Friedman': {
        'Lunes': ['10-4 A', '10-4 A', '10-4 A', '10-4 A', '10-4 A', '10-4 A', '10-4 A', '10-4 A', '10-4 A', '10-2 A', '10-2 A', '10-2 A'],
        'Martes': ['10-2 A', '10-2 A', '10-2 A', '10-4 A', '10-4 A', '10-4 A', '10-4 A', '10-4 A', '10-4 A', '10-4 A', '10-4 A', '10-4 A'],
        'Miércoles': ['10-4 A', '10-4 A', '10-4 A', '10-2 A', '10-2 A', '10-2 A', '10-2 A', '10-2 A', '10-2 A', '10-2 A', '10-2 A', '10-2 A'],
        'Jueves': ['10-2 A', '10-2 A', '10-2 A', '10-4 A', '10-4 A', '10-4 A', '10-2 A', '10-2 A', '10-2 A', '10-2 A', '10-2 A', '10-2 A'],
        'Viernes': ['10-2 A', '10-2 A', '10-2 A', '10-2 A', '10-2 A', '10-2 A', '10-4 A', '10-4 A', '10-4 A', '10-4 A', '10-4 A', '10-4 A'],
    },
    'Andrés Azofeifa Brenes': {
        'Lunes': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Martes': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Miércoles': ['11-1 B', '11-1 B', '11-1 B', '11-1 B', '11-1 B', '11-1 B', '11-1 B', '11-1 B', '11-1 B', '11-1 B', '11-1 B', '11-1 B'],
        'Jueves': ['', '', '', '', '', '', '11-1 B', '11-1 B', '11-1 B', '11-1 B', '11-1 B', '11-1 B'],
        'Viernes': ['11-1 B', '11-1 B', '11-1 B', '11-1 B', '11-1 B', '11-1 B', '11-1 B', '11-1 B', '11-1 B', '11-1 B', '11-1 B', '11-1 B'],
    },
    'Gerardo Sánchez Alvarado': {
        'Lunes': ['11-5 A', '11-5 A', '11-5 A', '11-5 A', '11-5 A', '11-5 A', '11-3 B', '11-3 B',
            '11-3 B', '11-3 B', '11-3 B', '11-3 B'],
        'Martes': ['11-3 B', '11-3 B', '11-3 B', '11-5 A', '11-5 A', '11-5 A', '11-5 A', '11-5 A', '11-5 A', '11-3 B', '11-3 B', '11-3 B'],
        'Miércoles': ['11-5 A', '11-5 A', '11-5 A', '11-5 A', '11-5 A', '11-5 A', '11-3 B', '11-3 B', '11-3 B', '11-3 B', '11-3 B', '11-3 B'],
        'Jueves': ['11-5 A', '11-5 A', '11-5 A', '11-5 A', '11-5 A', '11-5 A', '11-5 A', '11-5 A', '11-5 A', '11-3 B', '11-3 B', '11-3 B'],
        'Viernes': ['11-3 B', '11-3 B', '11-3 B', '11-3 B', '11-3 B', '11-3 B', '11-3 B', '11-3 B', '11-3 B', '11-5 A', '11-5 A', '11-5 A'],
    },
    'Viviana Carballo Araya': {
        'Lunes': ['', '', '', '12-4 CONTA', '12-4 CONTA', '12-4 CONTA', '12-4 CONTA', '12-4 CONTA', '12-4 CONTA', '', '', ''],
        'Martes': ['12-4 CONTA', '12-4 CONTA', '12-4 CONTA', '12-4 CONTA', '12-4 CONTA', '12-4 CONTA', '12-4 CONTA', '12-4 CONTA', '12-4 CONTA', '12-4 CONTA', '12-4 CONTA', '12-4 CONTA'],
        'Miércoles': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Jueves': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Viernes': ['', '', '', '', '', '', '', '', '', '', '', ''],
    },
    'Cristian Cubillo Avila': {
        'Lunes': ['', '', '', '', '', '', '11-1A DP', '11-1A DP', '11-1A DP', '10-1A DP', '10-1A DP', '10-1A DP'],
        'Martes': ['11-1A DP', '11-1A DP', '11-1A DP', '10-1A DP', '10-1A DP', '10-1A DP', '10-1A DP', '10-1A DP', '10-1A DP', '10-1A DP', '10-1A DP', '10-1A DP'],
        'Miércoles': ['10-1A DP', '10-1A DP', '10-1A DP', '10-1A DP', '10-1A DP', '10-1A DP', '', '', '', '11-1-A DP', '11-1-A DP', '11-1-A DP'],
        'Jueves': ['', '', '', '10-1A DP', '10-1A DP', '10-1A DP', '11-1A DP', '11-1A DP', '11-1A DP', '11-1A DP', '11-1A DP', '11-1A DP'],
        'Viernes': ['', '', '', '11-1A DP', '11-1A DP', '11-1A DP', '10-1A DP', '10-1A DP', '10-1A DP', '', '', ''],
    },
    'Michelle Vindas Villegas': {
        'Lunes': ['11-4 B', '11-4 B', '11-4 B', '11-4 B', '11-4 B', '11-4 B', '10-2 B', '10-2 B',
            '10-2 B', '10-2 B', '10-2 B', '10-2 B'],
        'Martes': ['10-2 B', '10-2 B', '10-2 B', '12-1 A', '12-1 A', '12-1 A', '11-4 B', '11-4 B', '11-4 B', '12-1 A', '12-1 A', '12-1 A'],
        'Miércoles': ['12-1 A', '12-1 A', '12-1 A', '10-2 B', '10-2 B', '10-2 B', '12-1 A', '12-1 A', '12-1 A', '12-1 A', '12-1 A', '12-1 A'],
        'Jueves': ['10-2 B', '10-2 B', '10-2 B', '11-4 B', '11-4 B', '11-4 B', '10-2 B', '10-2 B', '10-2 B', '12-1 A', '12-1 A', '12-1 A'],
        'Viernes': ['12-1 A', '12-1 A', '12-1 A', '12-1 A', '12-1 A', '12-1 A', '12-1 A', '12-1 A', '12-1 A', '12-1 A', '12-1 A', '12-1 A'],
    },
    'Natalia Castillo Ceballos': {
        'Lunes': ['', '', '', '', '11-3', '10-2', '10-2 A', '10-2 A', '10-2 A', '11-1', '11-1', '11-1'],
        'Martes': ['', '11-5', '11-5', '10-5 A', '10-5 A', '10-5 A', '10-2 A', '10-2 A', '10-2 A', '11-2', '11-2', '11-2'],
        'Miércoles': ['10-2', '10-2', '10-2', '10-5 A', '10-5 A', '10-5 A', '10-1 A', '10-1 A', '10-1 A', '11-5', '', ''],
        'Jueves': ['10-4 A', '10-4 A', '10-4 A', '', '', '', '10-1', '11-3', '11-3', '10-4 A', '10-4 A', '10-4 A'],
        'Viernes': ['11-1 A', '11-1 A', '11-1 A', '11-4', '11-4', '11-4', '12-3 A', '12-3 A', '12-3 A', '12-3 A', '12-3 A', '12-3 A'],
    },
    'Daniel Castillo Tenorio': {
        'Lunes': ['10-3 B', '10-3 B', '10-3 B', '11-2 B', '11-2 B', '11-2 B', '11-1 B', '11-1 B',
            '11-1 B', '12-1 A', '12-1 A', '12-1 A'],
        'Martes': ['11-1 B', '11-1 B', '11-1 B', '11-3 B', '11-3 B', '11-3 B', '12-1 A', '12-1 A', '12-1 A', '10-5 B', '10-5 B', '10-5 B'],
        'Miércoles': ['12-3 B', '12-3 B', '12-3 B', '11-3 B', '11-3 B', '11-3 B', '11-2 B', '11-2 B', '11-2 B', '11-2 B', '11-2 B', '11-2 B'],
        'Jueves': ['10-3 B', '10-3 B', '10-3 B', '10-5 B', '10-5 B', '10-5 B', '10-3 B', '10-3 B', '10-3 B', '10-3 B', '10-3 B', '10-3 B'],
        'Viernes': ['11-5 A', '11-5 A', '11-5 A', '12-3 B', '12-3 B', '12-3 B', '11-5 A', '11-5 A', '11-5 A', '12-3 B', '12-3 B', '12-3 B'],
    },

};
function claseActual() {
    // Obtén todos los elementos de bloque
    const bloques = [
        document.getElementById('bloque-1'),
        document.getElementById('bloque-2'),
        document.getElementById('bloque-3'),
        document.getElementById('bloque-4'),
        document.getElementById('bloque-5'),
        document.getElementById('bloque-6'),
        document.getElementById('bloque-7'),
        document.getElementById('bloque-8'),
        document.getElementById('bloque-9'),
        document.getElementById('bloque-10'),
        document.getElementById('bloque-11'),
        document.getElementById('bloque-12')
    ];

    let bloque = 0;
    const fecha = new Date();
    const hora =  fecha.getHours();
    const minuto = fecha.getMinutes();
    console.log(`${hora}:${minuto < 10 ? '0' + minuto : minuto}`);

    const intervalos = [
        { inicio: [7, 0], fin: [7, 39], bloque: 1 },
        { inicio: [7, 40], fin: [8, 19], bloque: 2 },
        { inicio: [8, 20], fin: [8, 59], bloque: 3 },
        { inicio: [9, 0], fin: [9, 49], bloque: 4 },
        { inicio: [9, 50], fin: [10, 29], bloque: 5 },
        { inicio: [10, 30], fin: [11, 59], bloque: 6 },
        { inicio: [11, 0], fin: [12,0], bloque: 13 },
        { inicio: [12, 0], fin: [12, 39], bloque: 7 },
        { inicio: [12, 40], fin: [13, 19], bloque: 8 },
        { inicio: [13, 20], fin: [13, 59], bloque: 9 },
        { inicio: [14, 0], fin: [14, 49], bloque: 10 },
        { inicio: [14, 50], fin: [15, 29], bloque: 11 },
        { inicio: [15, 30], fin: [15, 59], bloque: 12 }
    ];

    for (let i = 0; i < intervalos.length; i++) {
        const { inicio, fin, bloque: b } = intervalos[i];
        if ((hora > inicio[0] || (hora === inicio[0] && minuto >= inicio[1])) &&
            (hora < fin[0] || (hora === fin[0] && minuto <= fin[1]))) {
            bloque = b;
            break;
        }
    }

    console.log(bloque);

    // Añadir la clase "current" al elemento correspondiente
    if (bloque > 0) {
        const elementoActual = bloques[bloque - 1];
        if (elementoActual) {
            elementoActual.classList.add('current');
        }
    }

}


// Función para cargar el horario del grupo seleccionado
function cargarHorario() {
    claseActual()
    // Obtener el elemento select con id 'grupoSelect'
    const grupoSelect = document.getElementById('grupoSelect');
    // Obtener el valor seleccionado en el select (grupo seleccionado)
    const grupoSeleccionado = grupoSelect.value;
    // Obtener el horario correspondiente al grupo seleccionado desde el objeto horarios
    const horarioGrupo = horarios[grupoSeleccionado];

    // Obtener el cuerpo de la tabla donde se va a insertar el horario
    const tablaBody = document.querySelector('#horarioTable tbody');
    // Limpiar cualquier contenido anterior en la tabla
    tablaBody.innerHTML = '';

    // Iterar sobre cada día y sus horarios en el horario del grupo seleccionado
    Object.keys(horarioGrupo).forEach(dia => {
        const horariosDia = horarioGrupo[dia]; // Obtener los horarios para el día actual
        const nuevaFila = document.createElement('tr'); // Crear una nueva fila para la tabla

        // Crear celda para el día y añadirla a la fila
        const celdaDia = document.createElement('td');
        celdaDia.textContent = dia;
        nuevaFila.appendChild(celdaDia);

        // Variables para manejar celdas repetidas
        let celdaAnterior = null;
        let colspan = 1;

        // Iterar sobre los horarios del día actual
        horariosDia.forEach((horario, index) => {
            // Verificar si el horario es igual al anterior
            if (horario === celdaAnterior) {
                colspan++; // Incrementar el colspan si es igual al anterior
            } else {
                // Crear una nueva celda para el horario anterior
                if (celdaAnterior !== null) {
                    const celdaHorario = document.createElement('td');
                    celdaHorario.textContent = celdaAnterior;
                    // Añadir colspan si es mayor a 1
                    if (colspan > 1) {
                        celdaHorario.setAttribute('colspan', colspan);
                    }
                    nuevaFila.appendChild(celdaHorario); // Añadir la celda a la fila
                }
                // Actualizar celdaAnterior y resetear colspan
                celdaAnterior = horario;
                colspan = 1;
            }

            // Añadir la última celda si es necesario al final del horario
            if (index === horariosDia.length - 1) {
                const celdaHorario = document.createElement('td');
                celdaHorario.textContent = celdaAnterior;
                // Añadir colspan si es mayor a 1
                if (colspan > 1) {
                    celdaHorario.setAttribute('colspan', colspan);
                }
                nuevaFila.appendChild(celdaHorario); // Añadir la celda a la fila
            }
        });

        // Añadir la fila creada a la tabla
        tablaBody.appendChild(nuevaFila);
    });
}

