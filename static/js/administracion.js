document.addEventListener("DOMContentLoaded", function() {
    const menuLink = document.getElementById('menu-link');
    const announcementLink = document.getElementById('announcement-link');
    const reportLink = document.getElementById('reports-link')
    
    const menuSection = document.getElementById('menu-section');
    const announcementSection = document.getElementById('announcement-section');
    const reportSection = document.getElementById('read_reports-section')
    menuLink.addEventListener('click', function() {
        menuSection.style.display = 'block';
        announcementSection.style.display = 'none';
        reportSection.style.display = 'none'
    });

    announcementLink.addEventListener('click', function() {
        menuSection.style.display = 'none';
        announcementSection.style.display = 'block';
        reportSection.style.display = 'none'
    });
    reportLink.addEventListener('click', function(){
        menuSection.style.display = 'none'
        announcementSection.style.display = 'none';
        reportSection.style.display = 'block'
    })
});


function guardar_menu(event) {
    event.preventDefault();

    var form = document.getElementById('menuForm');
    var inputs = form.querySelectorAll('input[type="text"], input[type="password"]');
    var formValido = true;

    // Obtener la contraseña del usuario
    var password = prompt("Introduce la contraseña:");

    // Validación básica para asegurarse de que se proporcionó una contraseña
    if (!password) {
        alert("Debes proporcionar una contraseña.");
        return;
    }

    inputs.forEach(function (input) {
        if (input.type !== 'password') { // Excluir el campo de contraseña del proceso de validación
            if (!input.value.trim()) {
                formValido = false;
                input.classList.add('invalid');
            } else {
                input.classList.remove('invalid');
            }
        }
    });

    if (formValido) {
        // Crear el objeto JSON incluyendo la contraseña
        const jsonData = {
            password: password  // Incluir la contraseña en el objeto JSON
        };

        inputs.forEach(function (input) {
            if (input.type !== 'password') {
                jsonData[input.name] = input.value.trim();
            }
        });

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
            } else if (data.status === 'error' && data.message === 'Contraseña incorrecta') {
                alert('Contraseña incorrecta.');
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
            firstInvalidInput.focus();
            firstInvalidInput.placeholder = "Este campo está incompleto";
        }
    }
}

function subir_anuncio() {
    // Obtener valores de los campos del formulario
    const asunto = document.getElementById('asunto').value;
    const contenido = document.getElementById('contenido').value;
    const afectados = document.getElementById('afectados').value;
	const nombre = document.getElementById('nombre').value;

    // Obtener la contraseña del usuario
    const password = prompt("Introduce la contraseña:");

    // Validación básica para asegurarse de que se proporcionó una contraseña
    if (!password) {
        alert("Debes proporcionar una contraseña.");
        return;
    }
    // Crear un objeto con los datos a enviar
    var data = {
		password: password,
		anuncio: {
        "nombre": nombre,
        "asunto": asunto,
        "contenido": contenido,
        "afectados": afectados
	}
    };

    // Enviar los datos utilizando fetch
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
    console.log("La función se llamó correctamente");
    const timestamp = new Date().getTime();
    const url = `../db/reportes.json?timestamp=${timestamp}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const report1 = data["report-1"];
            const report2 = data["report-2"];
            const report3 = data["report-3"];
            const report4 = data["report-4"];
            const report5 = data["report-5"];
            const report6 = data["report-6"];
            const report7 = data["report-7"];
            const report8 = data["report-8"];
            const report9 = data["report-9"];
            const report10 = data["report-10"];

            document.getElementById('nombre-1').textContent = report1.nombre;
            document.getElementById('categoria-1').textContent = "Categoría: " + report1.categoria;
            document.getElementById('descripcion-1').textContent = "Descripción del error: " + report1.descripcion;

            document.getElementById('nombre-2').textContent = report2.nombre;
            document.getElementById('categoria-2').textContent = "Categoría: " + report2.categoria;
            document.getElementById('descripcion-2').textContent = "Descripción del error: " + report2.descripcion;

            document.getElementById('nombre-3').textContent = report3.nombre;
            document.getElementById('categoria-3').textContent = "Categoría: " + report3.categoria;
            document.getElementById('descripcion-3').textContent = "Descripción del error: " + report3.descripcion;

            document.getElementById('nombre-4').textContent = report4.nombre;
            document.getElementById('categoria-4').textContent = "Categoría: " + report4.categoria;
            document.getElementById('descripcion-4').textContent = "Descripción del error: " + report4.descripcion;

            document.getElementById('nombre-5').textContent = report5.nombre;
            document.getElementById('categoria-5').textContent = "Categoría: " + report5.categoria;
            document.getElementById('descripcion-5').textContent = "Descripción del error: " + report5.descripcion;

            document.getElementById('nombre-6').textContent = report6.nombre;
            document.getElementById('categoria-6').textContent = "Categoría: " + report6.categoria;
            document.getElementById('descripcion-6').textContent = "Descripción del error: " + report6.descripcion;

            document.getElementById('nombre-7').textContent = report7.nombre;
            document.getElementById('categoria-7').textContent = "Categoría: " + report7.categoria;
            document.getElementById('descripcion-7').textContent = "Descripción del error: " + report7.descripcion;

            document.getElementById('nombre-8').textContent = report8.nombre;
            document.getElementById('categoria-8').textContent = "Categoría: " + report8.categoria;
            document.getElementById('descripcion-8').textContent = "Descripción del error: " + report8.descripcion;

            document.getElementById('nombre-9').textContent = report9.nombre;
            document.getElementById('categoria-9').textContent = "Categoría: " + report9.categoria;
            document.getElementById('descripcion-9').textContent = "Descripción del error: " + report9.descripcion;

            document.getElementById('nombre-10').textContent = report10.nombre;
            document.getElementById('categoria-10').textContent = "Categoría: " + report10.categoria;
            document.getElementById('descripcion-10').textContent = "Descripción del error: " +  report10.descripcion;
        })
        .catch(error => console.error('Error al cargar los reportes:', error));
}
