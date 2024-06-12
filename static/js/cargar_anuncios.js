document.addEventListener("DOMContentLoaded", function () {
    const timestamp = new Date().getTime();
    const url = `../db/anuncios.json?uniqueParam=${timestamp}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Verificar que los anuncios existan en el JSON
            if (data) {
                Object.keys(data).forEach(key => {
                    const anuncio = data[key];
                    // Parsear el número del anuncio desde la clave
                    const numAviso = parseInt(key.split("-")[1]);
                    
                    // Obtener elementos del DOM
                    const fechaElement = document.getElementById(`fecha-${numAviso}`);
                    const asuntoElement = document.getElementById(`asunto-${numAviso}`);
                    const contenidoElement = document.getElementById(`contenido-${numAviso}`);
                    const afectadosElement = document.getElementById(`afectados-${numAviso}`);

                    // Verificar si los elementos existen antes de actualizar
                    if (fechaElement && asuntoElement && contenidoElement && afectadosElement) {
                        fechaElement.textContent = anuncio.fecha || '';
                        asuntoElement.textContent = anuncio.asunto || '';
                        contenidoElement.textContent = anuncio.contenido || '';
                        afectadosElement.textContent = anuncio.afectados || '';

                        // Agregar clases según el contenido visible o no
                        if (anuncio.contenido) {
                            contenidoElement.classList.add('visible');
                        }
                    } else {
                        console.error(`Elementos de aviso-${numAviso} no encontrados en el DOM.`);
                    }
                });
            } else {
                console.error('No se encontraron anuncios válidos en el archivo JSON.');
            }
        })
        .catch(error => {
            console.error('Error al cargar los anuncios:', error);
        });
});
function toggleContent(contenido, button) {
    const content = document.getElementById(contenido);
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        button.textContent = 'Leer menos';
    } else {
        content.classList.add('hidden');
        button.textContent = 'Leer más';
    }
}
