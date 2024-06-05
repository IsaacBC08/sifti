document.addEventListener("DOMContentLoaded", function() {
	const timestamp = new Date().getTime();
	url = `../db/anuncios.json?timestamp=${timestamp}`;
    fetch(url)  // Ruta a tu archivo anuncios.json, ajusta según tu estructura de carpetas
        .then(response => response.json())
        .then(data => {
            const anuncio = data.anuncio;
            document.getElementById('nombre').textContent = anuncio.nombre;
            document.getElementById('asunto').textContent = anuncio.asunto;
            document.getElementById('contenido').textContent = anuncio.contenido;
            document.getElementById('afectados').textContent = "Afectados: " + anuncio.afectados;
        })
        .catch(error => console.error('Error al cargar el anuncio:', error));
});
