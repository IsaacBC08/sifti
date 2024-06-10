document.addEventListener("DOMContentLoaded", function () {
	cargar_noticias()
	// Crear un nuevo objeto Date
	const today = new Date();

	// Obtener el año, mes y día
	const year = today.getFullYear();
	const month = today.getMonth() + 1; // Los meses van de 0 a 11, por eso sumamos 1
	const day = today.getDate();
	const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;

	let fecha1 = document.getElementById('fecha-1');
	let fecha2 = document.getElementById('fecha-2');
	let fecha3 = document.getElementById('fecha-3');


	const slider = document.querySelector('.slider');
	const cards = document.querySelectorAll('.card');

	let currentIndex = 0;
	fecha1.textContent = formattedDate
	fecha2.textContent = formattedDate
	fecha3.textContent = formattedDate
	function updateSlider() {
		slider.style.transform = `translateX(-${currentIndex * 100}%)`;
	}

	function nextCard() {
		currentIndex = (currentIndex + 1) % cards.length;
		updateSlider();
	}


	// Llama a la función nextCard cada 5 segundos
	setInterval(nextCard, 5000);
	updateSlider();

});

function cargar_noticias() {
    const timestamp = new Date().getTime();
    const url = `../db/noticias.json?timestamp=${timestamp}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            for (let i = 1; i <= 3; i++) {
                const destacada = data[`destacada-${i}`];
                if (destacada) {
                    document.getElementById(`titulo-${i}`).textContent = destacada.titular || '';
                    document.getElementById(`contenido-${i}`).textContent = destacada.contenido || '';
                    document.getElementById(`fecha-${i}`).textContent = destacada.fecha || '';
                    document.getElementById(`img-${i}`).src = destacada.ruta || '';
					document.getElementById(`tipo-${i}`).classList.add(destacada.tipo)
					document.getElementById(`tipo-${i}`).textContent = destacada.tipo.charAt(0).toUpperCase() + destacada.tipo.slice(1)
                } else {
                    console.error(`No se encontró la noticia destacada-${i} en los datos JSON.`);
                }
            }
        })
        .catch(error => {
            console.error('Error al cargar las noticias:', error);
        });
}


// Función para abrir la ventana modal
function openModal() {
	document.getElementById('politica-modal').style.display = 'block';
}

// Función para cerrar la ventana modal
function closeModal() {
	document.getElementById('politica-modal').style.display = 'none';
}

// Event listener para abrir la ventana modal al hacer clic en el enlace
document.getElementById('politica-link').addEventListener('click', function (event) {
	event.preventDefault();
	openModal();
});
