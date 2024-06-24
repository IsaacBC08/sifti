document.getElementById('commandForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const command = document.getElementById('commandInput').value;
    const responseOutput = document.getElementById('responseOutput');

    // Añadir el mensaje del usuario
    const userMessageDiv = document.createElement('div');
    userMessageDiv.classList.add('chat-message', 'user');

    const userImage = document.createElement('img');
    userImage.src = '../img/user.png'; // Reemplaza con la ruta de la imagen del usuario

    const userMessageContent = document.createElement('div');
    userMessageContent.classList.add('message-content');
    userMessageContent.textContent = command;

    userMessageDiv.appendChild(userImage);
    userMessageDiv.appendChild(userMessageContent);
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

        // Añadir el mensaje del bot
        const botMessageDiv = document.createElement('div');
        botMessageDiv.classList.add('chat-message', 'law');

        const botImage = document.createElement('img');
        botImage.src = '../img/lawliett.png'; // Reemplaza con la ruta de la imagen del bot

        const botMessageContent = document.createElement('div');
        botMessageContent.classList.add('message-content');

        botMessageDiv.appendChild(botImage);
        botMessageDiv.appendChild(botMessageContent);
        responseOutput.appendChild(botMessageDiv);
        responseOutput.scrollTop = responseOutput.scrollHeight;
        document.getElementById('commandInput').value = '';

        await typeWriterEffect(data.response, botMessageContent);

    } catch (error) {
        const errorMessageDiv = document.createElement('div');
        errorMessageDiv.classList.add('chat-message');

        const errorMessageContent = document.createElement('div');
        errorMessageContent.classList.add('message-content');
        errorMessageContent.textContent = `Error: ${error}`;

        errorMessageDiv.appendChild(errorMessageContent);
        responseOutput.appendChild(errorMessageDiv);
        responseOutput.scrollTop = responseOutput.scrollHeight;
    }
});

async function typeWriterEffect(text, element) {
    for (let i = 0; i < text.length; i++) {
        element.textContent += text.charAt(i);
        await sleep(25);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
