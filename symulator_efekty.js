function simPlayCorrect() {
    const audio = new Audio('tak.mp3');
    audio.play();
}

function simPlayWrong() {
    const audio = new Audio('nie.mp3');
    audio.play();
    
    // Potrząśnij polem tekstowym
    const inputArea = document.getElementById('simulation-input-area');
    inputArea.classList.add('shake');
    setTimeout(() => {
        inputArea.classList.remove('shake');
    }, 400);
}