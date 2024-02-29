// Generar un número aleatorio entre 1 y 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;
let correctAttempts = 0;

function checkGuess() {
    const userGuess = parseInt(document.getElementById("userGuess").value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        setMessage("Por favor, introduce un número válido entre 1 y 100.");
        return;
    }

    attempts++;

    if (userGuess === secretNumber) {
        correctAttempts++;
        setMessage(`¡Felicidades! Has adivinado el número ${secretNumber} en ${attempts} intentos.`);
    } else if (userGuess < secretNumber) {
        setMessage("Demasiado bajo. Intenta de nuevo.");
    } else {
        setMessage("Demasiado alto. Intenta de nuevo.");
    }

    // Actualizar el contador de intentos acertados
    document.getElementById("attempts").textContent = correctAttempts;
}

function setMessage(message) {
    const messageElement = document.getElementById("message");
    messageElement.textContent = message;

    if (message.includes("Has adivinado")) {
        // Mostrar mensaje de reinicio y redirigir después de 3 segundos
        setTimeout(() => {
            window.location.href = "../reinicio/index.html";
        }, 3000);
    }
}

