// Definición de los horarios por grupo
const horarios = {
	'Elizabeth Zuñiga Barrientos': {
		'Lunes': ['11-1-A DP / 11-1-B CONTA', '11-1-A DP / 11-1-B CONTA', '11-3-A CS / 11-3-B CONTA', '11-3-A CS / 11-3-B CONTA', '','', '10-1-A DP /10-1-B DW', '10-1-A DP /10-1-B DW', '10-5-A EI / 10-5-B SE', '10-5-A EI / 10-5-B SE', '11-5-A CONTA', '11-5-B ALD'],
		'Martes': ['', '', '', '', '', '', '', '', '', '', '', ''],
		'Miércoles': ['', '', '', '', '', '', '', '', '', '', '', ''],
		'Jueves': ['', '', '', '', '', '', '', '', '', '', '', ''],
		'Viernes': ['10-3-A CS / 10-3-B ECS', '10-3-A CS / 10-3-B ECS', '10-4-A CONTA / 10-4-B ECS', '10-4-A CONTA / 10-4-B ECS', '', '', '11-4-A CS / 11-4-B ALD', '11-4-A CS / 11-4-B ALD', '10-2-A CONTA / 10-2-B ALD', '10-2-A CONTA / 10-2-B ALD', '11-2-A EI / 11-2-B SE','11-2-A EI / 11-2-B SE'],
	},// que es una red neuronal, como son las penalizaciones, hay tipos?, Que es LN? hay tipos? 
	'Silvia Bermúdez Calderón': {
		'Lunes': ['', '', '', '', '', '', '', '', '', '', '', ''],
		'Martes': ['', '', '', '', '', '', '', '', '', '', '', ''],
		'Miércoles': ['', '', '', '', '', '', '', '', '', '', '', ''],
		'Jueves': ['11-1-A DP / 11-1-B CONTA', '11-1-A DP / 11-1-B CONTA', '11-1-A DP / 11-1-B CONTA', '11-3-A CS / 11-3-B CONTA', '11-3-A CS / 11-3-B CONTA', '11-3-A CS / 11-3-B CONTA', '', '', '', '', '', ''],
		'Viernes': ['', '', '', '', '', '', '', '', '', '', '', ''],
	},
    'Carlos Masis Navarro' : {
        'Lunes': ['10-3-A CS', '10-3-A CS', '10-3-A CS', '10-3-A CS', '10-3-A CS', '10-3-A CS', '10-3-A CS', '10-3-A CS', '10-3-A CS', '10-1-B DW', '10-1-B DW', '10-1-B DW'],
		'Martes': ['10-3-A CS', '10-3-A CS', '10-3-A CS', '10-1-B DW', '10-1-B DW', '10-1-B DW', '10-1-B DW', '10-1-B DW', '10-1-B DW', '10-1-B DW', '10-1-B DW', '10-1-B DW'],
		'Miércoles': ['10-1-B DW', '10-1-B DW', '10-1-B DW', '10-1-B DW', '10-1-B DW', '10-1-B DW', '10-3-A CS', '10-3-A CS', '10-3-A CS', '10-1-B DW', '10-1-B DW', '10-1-B DW'],
		'Jueves': ['10-1-B CS', '10-1-B CS', '10-1-B CS', '10-1-B DW', '10-1-B DW', '10-1-B DW', '10-3-A CS', '10-3-A CS', '10-3-A CS', '10-3-A CS', '10-3-A CS', '10-3-A CS'],
		'Viernes': ['10-1-B DW', '10-1-B DW', '10-1-B DW', '10-1-B DW', '10-1-B DW', '10-1-B DW', '10-3-A CS', '10-3-A CS', '10-3-A CS', '10-3-A CS', '10-3-A CS', '10-3-A CS'],
    },
    'Maricel Rodríguez Ramírez': {
        'Lunes': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Martes': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Miércoles': ['', '', '', '', '', '', '', '', '', '', '', ''],
        'Jueves': ['', '', '12-4 CONTA', '11-1-A DP / 11-1-B CONTA', '', '', '', '12-1-A ALD / 12-1-B ECS', '', '12-3-A CF / 12-3-B CS', '11-5-A CONTA / 11-5-B ALD', ''],
        'Viernes': ['', '', '12-5 CS', '', '', '', '12-2-A CS / 12-2-B SE', '11-2-A EI / 11-2-B SE', '11-4-A CS / 11-4-B ALD', '11-3-A CS / 11-3-B CONTA', '', ''],
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
