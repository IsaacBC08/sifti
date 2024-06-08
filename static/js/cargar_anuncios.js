document.addEventListener("DOMContentLoaded", function() {
    // Obtener una marca de tiempo actual para asegurar la obtención de la versión más reciente del archivo JSON
    const timestamp = new Date().getTime();

    // Construir la URL del archivo JSON con la marca de tiempo como parámetro de consulta
    const url = `../db/anuncios.json?timestamp=${timestamp}`;
    
    // Realizar una solicitud fetch para obtener los datos del archivo JSON
    fetch(url)
        .then(response => response.json())  // Convertir la respuesta a JSON
        .then(data => {
            // Obtener los datos de cada anuncio del objeto JSON
            const anuncio1 = data["anuncio-1"];
            const anuncio2 = data["anuncio-2"];
            const anuncio3 = data["anuncio-3"];

            // Mostrar los datos del anuncio 1 en el HTML
            document.getElementById('fecha-1').textContent = anuncio1.fecha;
            document.getElementById('asunto-1').textContent = anuncio1.asunto;
            document.getElementById('contenido-1').textContent = anuncio1.contenido;
            document.getElementById('afectados-1').textContent = "Afectados: " + anuncio1.afectados;

            // Mostrar los datos del anuncio 2 en el HTML
            document.getElementById('fecha-2').textContent = anuncio2.fecha;
            document.getElementById('asunto-2').textContent = anuncio2.asunto;
            document.getElementById('contenido-2').textContent = anuncio2.contenido;
            document.getElementById('afectados-2').textContent = "Afectados: " + anuncio2.afectados;

            // Mostrar los datos del anuncio 3 en el HTML
            document.getElementById('fecha-3').textContent = anuncio3.fecha;
            document.getElementById('asunto-3').textContent = anuncio3.asunto;
            document.getElementById('contenido-3').textContent = anuncio3.contenido;
            document.getElementById('afectados-3').textContent = "Afectados: " + anuncio3.afectados;
        })
        .catch(error => console.error('Error al cargar los anuncios:', error));
});
