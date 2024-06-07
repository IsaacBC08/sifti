function enviar_reporte() {
    alert("Ten cuidado con lo que publicas, Sifti mantiene el registro de las IP's de estos envíos, por lo que podrías tener repercusiones a nivel institucional.")
    // Obtener valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const categoria = document.getElementById('categoria').value;
    const descripcion = document.getElementById('descripcion').value;


    // Crear un objeto con los datos a enviar
    var data = {
		report: {
        "nombre": nombre,
        "categoria": categoria,
        "decripcion": descripcion,

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
        console.error('Error al enviar el reporte :', error);
        alert('Hubo un error enviar el reporte.');
    });
}