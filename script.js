document.addEventListener('mousemove', (event) => {
    const width = window.innerWidth;
    const x = event.clientX;

    const leftImage = document.querySelector('.hover-image.left');
    const centerImage = document.querySelector('.hover-image.center');
    const rightImage = document.querySelector('.hover-image.right');

    // Reset opacity for all images
    leftImage.style.opacity = '0';
    centerImage.style.opacity = '0';
    rightImage.style.opacity = '0';

    // Determine which region the mouse is in
    if (x < width / 3) {
        leftImage.style.opacity = '1';
    } else if (x < (2 * width) / 3) {
        centerImage.style.opacity = '1';
    } else {
        rightImage.style.opacity = '1';
    }
});

function toggleBubbleEffect() {
    const bubbleGif = document.getElementById('bubble-gif');

    // Define um intervalo de tempo aleatório entre 1 e 5 segundos
    const randomTime = Math.random() * (10000 - 1000) + 5000; // entre 1 e 5 segundos

    // Força o reinício do GIF ao redefinir o atributo 'src'
    bubbleGif.style.visibility = 'visible';
    const currentSrc = bubbleGif.src; // Salva o caminho atual
    bubbleGif.src = ''; // Limpa o src para reiniciar o GIF
    bubbleGif.src = currentSrc; // Restaura o src original

    // Esconde o GIF após 3 segundos (duração do GIF)
    setTimeout(() => {
        bubbleGif.style.visibility = 'hidden';
    }, 2100);

    // Reaplica o efeito esporádico após o tempo aleatório
    setTimeout(toggleBubbleEffect, randomTime);
}

// Inicia o efeito esporádico de bolhas
toggleBubbleEffect();
