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
