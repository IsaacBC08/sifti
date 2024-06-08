document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencias a los elementos del menú
    const menuLink = document.getElementById('menu-link');
    const announcementLink = document.getElementById('announcement-link');
    const reportLink = document.getElementById('reports-link');
    
    // Obtener referencias a las secciones correspondientes
    const menuSection = document.getElementById('menu-section');
    const announcementSection = document.getElementById('announcement-section');
    const reportSection = document.getElementById('read_reports-section');
    
    // Listener para mostrar la sección del menú al hacer clic en 'Menú'
    menuLink.addEventListener('click', function() {
        menuSection.style.display = 'block';
        announcementSection.style.display = 'none';
        reportSection.style.display = 'none';
    });

    // Listener para mostrar la sección de anuncios al hacer clic en 'Anuncios'
    announcementLink.addEventListener('click', function() {
        menuSection.style.display = 'none';
        announcementSection.style.display = 'block';
        reportSection.style.display = 'none';
    });

    // Listener para mostrar la sección de reportes al hacer clic en 'Reportes'
    reportLink.addEventListener('click', function() {
        menuSection.style.display = 'none';
        announcementSection.style.display = 'none';
        reportSection.style.display = 'block';
    });
});

function guardar_menu(event) {
    event.preventDefault();  // Evitar que el formulario se envíe y recargue la página

    var form = document.getElementById('menuForm');
    var inputs = form.querySelectorAll('input[type="text"], input[type="password"]');
    var formValido = true;

    // Validar cada campo del formulario
    inputs.forEach(function (input) {
        if (input.type !== 'password') {
            if (!input.value.trim()) {
                formValido = false;
                input.classList.add('invalid');  // Marcar el campo como inválido visualmente
            } else {
                input.classList.remove('invalid');  // Eliminar la marca de campo inválido
            }
        }
    });

    // Si el formulario es válido, preparar los datos a enviar al servidor
    if (formValido) {
        const jsonData = {};

        // Agregar los valores de los campos del formulario al objeto JSON
        inputs.forEach(function (input) {
            jsonData[input.name] = input.value.trim();
        });

        // Enviar los datos del formulario al servidor usando fetch
        fetch('/update_menu', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al actualizar el menú.');
            }
            return response.json();
        })
        .then(data => {
            if (data.status === 'success') {
                alert('Menú actualizado correctamente.');
                console.log('Respuesta del servidor:', data);
                // Aquí puedes manejar la respuesta del servidor si lo necesitas
            } else {
                throw new Error('Error desconocido en la respuesta del servidor.');
            }
        })
        .catch(error => {
            console.error('Error al actualizar el menú:', error);
            alert('Hubo un error al actualizar el menú.');
        });
    
    } else {
        // Hacer scroll hacia el primer campo de entrada incompleto
        var firstInvalidInput = form.querySelector('input.invalid');
        if (firstInvalidInput) {
            firstInvalidInput.focus();  // Enfocar el primer campo inválido
            firstInvalidInput.placeholder = "Este campo está incompleto";  // Cambiar el placeholder del campo inválido
        }
    }
}

function subir_anuncio() {
    // Obtener valores de los campos del formulario de anuncio
    const asunto = document.getElementById('asunto').value;
    const contenido = document.getElementById('contenido').value;
    const afectados = document.getElementById('afectados').value;
    const fecha = document.getElementById('fecha').value;


    // Crear un objeto con los datos del anuncio a enviar
    var data = {
        anuncio: {
            "fecha": fecha,
            "asunto": asunto,
            "contenido": contenido,
            "afectados": afectados
        }
    };

    // Enviar los datos del anuncio al servidor usando fetch
    fetch('/update_anuncio', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al actualizar el anuncio.');
        }
        return response.json();
    })
    .then(data => {
        // Manejar la respuesta del servidor
        if (data.status === 'success') {
            console.log('Respuesta del servidor:', data);
            alert('Anuncio actualizado correctamente.');
            // Aquí puedes realizar más acciones si es necesario
        } else {
            throw new Error('Error desconocido en la respuesta del servidor.');
        }
    })
    .catch(error => {
        console.error('Error al actualizar el anuncio:', error);
        alert('Hubo un error al actualizar el anuncio.');
    });
}

function cargar_reportes() { 
    const timestamp = new Date().getTime();  // Obtener una marca de tiempo única
    const url = `../db/reportes.json?timestamp=${timestamp}`;  // URL del archivo JSON

    // Hacer una solicitud fetch para obtener los datos del archivo JSON
    fetch(url)
        .then(response => response.json())  // Convertir la respuesta a JSON
        .then(data => {
            // Asignar los datos de los reportes a elementos HTML específicos
            for (let i = 1; i <= 10; i++) {
                const report = data[`report-${i}`];
                document.getElementById(`nombre-${i}`).textContent = report.nombre;
                document.getElementById(`categoria-${i}`).textContent = "Categoría: " + report.categoria;
                document.getElementById(`descripcion-${i}`).textContent = "Descripción: " + report.descripcion;
            }
        })
        .catch(error => console.error('Error al cargar los reportes:', error));  // Capturar y manejar errores
}
