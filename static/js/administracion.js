// script.js
document.addEventListener("DOMContentLoaded", function() {
    const menuLink = document.getElementById('menu-link');
    const announcementLink = document.getElementById('announcement-link');
    const menuSection = document.getElementById('menu-section');
    const announcementSection = document.getElementById('announcement-section');

    menuLink.addEventListener('click', function() {
        menuSection.style.display = 'block';
        announcementSection.style.display = 'none';
    });

    announcementLink.addEventListener('click', function() {
        menuSection.style.display = 'none';
        announcementSection.style.display = 'block';
    });
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
