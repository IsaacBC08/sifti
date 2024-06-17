document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencia a la tabla con id 'tablaMenu'
    const tablaMenu = document.getElementById('tablaMenu');

    // Limpiar contenido previo de la tabla (excepto los títulos estáticos)
    tablaMenu.querySelector('tbody').innerHTML = '';

    // Generar un timestamp actual para evitar la caché
    const timestamp = new Date().getTime();

    // Construir la URL del archivo JSON con el timestamp como parámetro de consulta
    const url = `../db/menu.json?timestamp=${timestamp}`;

    // Hacer la solicitud GET para obtener el JSON
    fetch(url)
        .then(response => {
            // Verificar si la respuesta es exitosa
            if (!response.ok) {
                throw new Error('Error al obtener el menú.');
            }
            // Convertir la respuesta a formato JSON
            return response.json();
        })
        .then(data => {
            // Log del menú recibido para propósitos de depuración
            console.log('Menú recibido:', data);

            // Verificar que data sea un objeto
            if (typeof data !== 'object' || Array.isArray(data)) {
                throw new Error('El formato del menú no es válido.');
            }

            // Recorrer las claves del objeto y construir las filas de la tabla
            Object.keys(data).forEach(dia => {
                const comida = data[dia]; // Obtener el valor (comida) para el día actual
                const row = tablaMenu.insertRow(); // Insertar una nueva fila en la tabla
                const cellDia = row.insertCell(0); // Insertar una celda para el día
                const cellComida = row.insertCell(1); // Insertar una celda para la comida

                // Asignar el texto del día y la comida a las celdas correspondientes
                cellDia.textContent = dia;
                cellComida.textContent = comida;
            });
        })
        .catch(error => {
            // Capturar y manejar errores
            console.error('Error al obtener el menú:', error);
            // Podrías añadir una gestión de errores específica, como mostrar un mensaje en la tabla
        });
});
