document.addEventListener("DOMContentLoaded", function() {
    const timestamp = new Date().getTime();
    const url = `../db/anuncios.json?timestamp=${timestamp}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Obtener los datos de cada anuncio del objeto JSON
            const anuncio1 = data["anuncio-1"];
            const anuncio2 = data["anuncio-2"];
            const anuncio3 = data["anuncio-3"];

            // Mostrar los datos del anuncio 1
            document.getElementById('fecha-1').textContent = anuncio1.fecha;
            document.getElementById('asunto-1').textContent = anuncio1.asunto;
            document.getElementById('contenido-1').textContent = anuncio1.contenido;
            document.getElementById('afectados-1').textContent = "Afectados: " + anuncio1.afectados;

            // Mostrar los datos del anuncio 2
            document.getElementById('fecha-2').textContent = anuncio2.fecha;
            document.getElementById('asunto-2').textContent = anuncio2.asunto;
            document.getElementById('contenido-2').textContent = anuncio2.contenido;
            document.getElementById('afectados-2').textContent = "Afectados: " + anuncio2.afectados;

            // Mostrar los datos del anuncio 3
            document.getElementById('fecha-3').textContent = anuncio3.fecha;
            document.getElementById('asunto-3').textContent = anuncio3.asunto;
            document.getElementById('contenido-3').textContent = anuncio3.contenido;
            document.getElementById('afectados-3').textContent = "Afectados: " + anuncio3.afectados;
        })
        .catch(error => console.error('Error al cargar los anuncios:', error));
});
