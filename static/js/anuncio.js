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
