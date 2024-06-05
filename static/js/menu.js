document.addEventListener('DOMContentLoaded', function() {
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
            if (!response.ok) {
                throw new Error('Error al obtener el menú.');
            }
            return response.json();
        })
        .then(data => {
            console.log('Menú recibido:', data);

            // Verificar que data sea un objeto
            if (typeof data !== 'object' || Array.isArray(data)) {
                throw new Error('El formato del menú no es válido.');
            }

            // Recorrer las claves del objeto y construir las filas de la tabla
            Object.keys(data).forEach(dia => {
                const comida = data[dia];
                const row = tablaMenu.insertRow();
                const cellDia = row.insertCell(0);
                const cellComida = row.insertCell(1);

                cellDia.textContent = dia;
                cellComida.textContent = comida;
            });
        })
        .catch(error => {
            console.error('Error al obtener el menú:', error);
            // Manejo de errores: podrías mostrar un mensaje en la tabla o en la consola
        });
});