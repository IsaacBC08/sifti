document.getElementById('commandForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const command = document.getElementById('commandInput').value;
    const responseOutput = document.getElementById('responseOutput');

    const userMessageDiv = document.createElement('div');
    userMessageDiv.classList.add('chat-message', 'user');
    userMessageDiv.textContent = command;
    responseOutput.appendChild(userMessageDiv);
    responseOutput.scrollTop = responseOutput.scrollHeight;

    try {
        const response = await fetch('/execute_command', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ command })
        });

        const data = await response.json();

        const botMessageDiv = document.createElement('div');
        botMessageDiv.classList.add('chat-message', 'law');

        const botMessageText = document.createElement('span');
        botMessageText.classList.add('typewriter-text');

        respuesta = data.response;
        botMessageDiv.appendChild(botMessageText);
        responseOutput.appendChild(botMessageDiv);
        responseOutput.scrollTop = responseOutput.scrollHeight;
        document.getElementById('commandInput').value = '';
        // Función para simular el efecto de escritura
        async function typeWriterEffect(text) {
            for (let i = 0; i < text.length; i++) {
                botMessageText.textContent += text.charAt(i);
                await sleep(25); // Esperar 0.1 segundos antes de añadir el siguiente carácter
            }
        }

        // Llamar a la función para mostrar el mensaje letra por letra
        await typeWriterEffect(respuesta);

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }



    } catch (error) {
        const errorMessageDiv = document.createElement('div');
        errorMessageDiv.classList.add('chat-message');
        errorMessageDiv.textContent = `Error: ${error}`;
        responseOutput.appendChild(errorMessageDiv);
        responseOutput.scrollTop = responseOutput.scrollHeight;
    }


});
