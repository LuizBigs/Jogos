function playGame(gameId) {
    // Adicione sua lógica de jogo aqui
    alert('Você começou a jogar ' + gameId);
}

document.getElementById('play-mario').addEventListener('click', function() {
    window.location.href = './Mario-game/mario.html';
});

document.getElementById('play-memoria').addEventListener('click', function() {
    window.location.href = './Memoria-game/memoria.html';
});
// Obtém a referência para o elemento de relógio
const clockElement = document.getElementById('clock');

// Função para atualizar o relógio
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Formata a hora no formato HH:MM:SS
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    // Atualiza o conteúdo do elemento de relógio
    clockElement.textContent = formattedTime;
}

// Chama a função inicialmente para exibir a hora atual
updateClock();

// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);
