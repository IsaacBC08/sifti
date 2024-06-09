document.addEventListener("DOMContentLoaded", function () {
    // Obtener una marca de tiempo actual para asegurar la obtención de la versión más reciente del archivo JSON
    const timestamp = new Date().getTime();

    // Construir la URL del archivo JSON con la marca de tiempo como parámetro de consulta
    const url = `../db/anuncios.json?timestamp=${timestamp}`;

    // Realizar una solicitud fetch para obtener los datos del archivo JSON
    fetch(url)
        .then(response => response.json())  // Convertir la respuesta a JSON
        .then(data => {
            // Obtener los datos de cada anuncio del objeto JSON
            const anuncios = [data["anuncio-1"], data["anuncio-2"], data["anuncio-3"]];

            // Iterar sobre los anuncios y aplicar los datos a los elementos del DOM
            anuncios.forEach((anuncio, index) => {
                document.getElementById(`fecha-${index + 1}`).textContent = anuncio.fecha;
                document.getElementById(`asunto-${index + 1}`).textContent = anuncio.asunto;
                document.getElementById(`contenido-${index + 1}`).textContent = anuncio.contenido;
                document.getElementById(`afectados-${index + 1}`).append(anuncio.afectados);
            });
        })
        .catch(error => {
            console.error('Error al cargar los anuncios:', error);
        });
});

function toggleContent(id, button) {
    const content = document.getElementById(id);
    if (content.classList.contains('visible')) {
        content.classList.remove('visible');
        button.textContent = "Mostrar más";
    } else {
        content.classList.add('visible');
        button.textContent = "Mostrar menos";
    }
}
