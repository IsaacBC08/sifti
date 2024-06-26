function actualizarElemento(elemento, valor) {
  if (elemento) {
      elemento.textContent = valor || '';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  cargar_anuncios();

  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const carousel = document.querySelector('.carousel');
  let currentIndex = 0;

  prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
          currentIndex--;
      } else {
          currentIndex = carousel.children.length - 1;
      }
      updateCarousel();
  });

  nextButton.addEventListener('click', () => {
      if (currentIndex < carousel.children.length - 1) {
          currentIndex++;
      } else {
          currentIndex = 0;
      }
      updateCarousel();
  });

  function updateCarousel() {
      const cardWidth = carousel.children[0].clientWidth;
      const cardMargin = 1;
      const offset = -currentIndex * (cardWidth + cardMargin * 2) + cardMargin; // Adjust offset to include margins
      carousel.style.transform = `translateX(${offset}px)`;
  }
});

function cargar_anuncios() {
  const timestamp = new Date().getTime();
  const url1 = `/database/common/anuncios.json?uniqueParam=${timestamp}`;
  const url2 = `/database/common/destacadas.json?uniqueParam=${timestamp}`;

  fetch(url2).then(response => response.json()).then(data => {
      if (data) {
          Object.keys(data).forEach(key => {
              const destacada = data[key];
              const numAviso = parseInt(key.split("-")[1]);

              const titular = document.getElementById(`titular-${numAviso}`);
              const contenido = document.getElementById(`contenido-${numAviso}`);
              const fecha = document.getElementById(`fecha-${numAviso}`)
              const tipo = document.getElementById(`tipo-${numAviso}`)
              const img = document.getElementById(`img-${numAviso}`);
              if (titular && contenido && img) {
                  actualizarElemento(titular, destacada.titular);
                  actualizarElemento(contenido, destacada.contenido);
                  actualizarElemento(fecha, destacada.fecha)
                  actualizarElemento(tipo, destacada.tipo)
                  if (destacada.tipo == "Evento"){
                    tipo.classList.add("evento")
                  }
                  img.src = destacada.ruta;
              }
          });
      }
  });
}
