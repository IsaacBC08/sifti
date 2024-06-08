function enviar_reporte() {
    // Mostrar advertencia al usuario
    alert("Ten cuidado con lo que publicas, Sifti mantiene el registro de las IP's de estos envíos, por lo que podrías tener repercusiones a nivel institucional.");

    // Obtener valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const categoria = document.getElementById('categoria').value;
    const descripcion = document.getElementById('descripcion').value;

    // Crear un objeto con los datos a enviar
    var data = {
        report: {
            "nombre": nombre,
            "categoria": categoria,
            "descripcion": descripcion
        }
    };

    // Enviar los datos utilizando fetch
    fetch('/send_report', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        // Verificar si la respuesta del servidor es exitosa
        if (!response.ok) {
            throw new Error('Error al enviar el reporte.');
        }
        return response.json();
    })
    .then(data => {
        // Manejar la respuesta del servidor
        if (data.status === 'success') {
            console.log('Respuesta del servidor:', data);
            alert('Reporte enviado correctamente.');
            // Aquí puedes realizar más acciones si es necesario
        } else {
            throw new Error('Error desconocido en la respuesta del servidor.');
        }
    })
    .catch(error => {
        // Capturar y manejar errores durante el envío del reporte
        console.error('Error al enviar el reporte:', error);
        alert('Hubo un error al enviar el reporte.');
    });
}
