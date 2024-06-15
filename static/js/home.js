document.addEventListener("DOMContentLoaded", function () {
    splash()


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


function splash() {
    // Fade out the splash screen after 2 seconds
    setTimeout(function () {
        document.getElementById("splash-screen").classList.add("fade-out");
    }, 2000); // 2000 milliseconds = 2 seconds

    // Show main content after splash screen animation
    setTimeout(function () {
        document.getElementById("main-content").classList.add("show");
    }, 2500); // Show main content 0.5s after splash screen fades out

    console.log("Todo cargado");

    // Hide spans after animation
    setTimeout(() => {
        const spans = document.querySelectorAll('.wavy span');
        spans.forEach(span => {
            span.style.opacity = '0';
        });
    }, 4000); // 2 seconds for initial delay + 2 seconds for animation duration
}

let progress = document.getElementById("progress-bar")
let totalHeight = document.body.scrollHeight - window.innerHeight
window.onscroll = function () {
    let progressHeight = (window.scrollY / totalHeight) * 100
    progress.style.height = progressHeight + "%"
}

let buttons = document.querySelectorAll(".boton")
buttons.forEach(button => {
    let text = button.textContent
    button.innerHTML = ''
    for (let char of text) {
        let span = document.createElement('span')
        span.textContent = char === '  ' ? '\u00A0' : char
        button.appendChild(span)
    }
    let spans = button.querySelectorAll('span')
    button.addEventListener('mouseenter', () => {
        spans.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add('hover')
            }, index * 50)
        })
    })
    button.addEventListener('mouseleave', () => {
        spans.forEach((span, index) => {
            setTimeout(() => {
                span.classList.remove('hover')
            }, index * 50)
        })
    })
});

let buttonAdmin = document.querySelectorAll(".boton-admin")
buttonAdmin.forEach(button => {
    let text = button.textContent
    button.innerHTML = ''
    for (let char of text) {
        let span = document.createElement('span')
        span.textContent = char === '  ' ? '\u00A0' : char
        button.appendChild(span)
    }
    let spans = button.querySelectorAll('span')
    button.addEventListener('mouseenter', () => {
        spans.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add('hover')
            }, index * 50)
        })
    })
    button.addEventListener('mouseleave', () => {
        spans.forEach((span, index) => {
            setTimeout(() => {
                span.classList.remove('hover')
            }, index * 50)
        })
    })
});