// animacje_pytania.js

function animateNewQuestion() {
    const questionText = document.getElementById('question');
    const answers = document.querySelectorAll('.answer-btn');

    // Reset i odpalenie animacji pytania
    questionText.style.animation = 'none';
    void questionText.offsetWidth; 
    questionText.style.animation = 'slideInDown 0.5s ease-out forwards';

    // Bezpieczne wjazdy przycisków
    answers.forEach((btn, idx) => {
        btn.style.animation = 'none';
        void btn.offsetWidth;
        // Dodajemy opóźnienie na podstawie indeksu (0s, 0.1s, 0.2s...)
        btn.style.animation = `slideInUp 0.4s ease-out ${idx * 0.1}s forwards`;
    });
}

function animateCorrect(btn) {
    btn.style.animation = 'none';
    void btn.offsetWidth;
    btn.style.animation = 'neonPulseCorrect 0.6s ease-out forwards';
}

function animateWrong(btn) {
    btn.style.animation = 'none';
    void btn.offsetWidth;
    btn.style.animation = 'shakeWrong 0.5s ease-in-out forwards';
}