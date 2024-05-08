const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const restartButton = document.getElementById('restart');

const jump =() => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');        
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePosition <= 120 &&pipePosition >0 && marioPosition < 80){

        pipe.style.animation = 'nome';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'nome';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'images/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop)

        // Show the restart button
        restartButton.style.display = 'block';
    }

}, 10)

document.addEventListener('keydown', jump);

// Add event listener to the restart button
restartButton.addEventListener('click', () => {
    location.reload(); // This will reload the page
});
