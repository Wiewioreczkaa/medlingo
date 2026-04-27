// efekty.js

// --- INICJALIZACJA DŹWIĘKU KLIKNIĘCIA ---
const soundSelect = new Audio('wybor.mp3');
soundSelect.volume = 0.4; // Subtelna głośność, żeby nie irytowała przy częstym klikaniu

function playSelectSound() {
    soundSelect.currentTime = 0; // Przewijamy do początku, by można było klikać szybko
    let playPromise = soundSelect.play();
    if (playPromise !== undefined) {
        playPromise.catch(error => console.log("Oczekiwanie na interakcję."));
    }
}

// 1. Funkcja tworząca efekt fali (Ripple) i odtwarzająca dźwięk
function createRipple(event) {
    const button = event.currentTarget;

    // --- ODTWARZANIE DŹWIĘKU ---
    // Puszczamy dźwięk TYLKO, jeśli przycisk nie ma klasy "answer-btn"
    if (!button.classList.contains('answer-btn')) {
        playSelectSound();
    }

    // --- ANIMACJA FALI (RIPPLE) ---
    // Tworzymy element fali (okrąg)
    const circle = document.createElement('span');
    
    // Obliczamy wielkość okręgu na podstawie wielkości przycisku
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    // Pobieramy koordynaty kliknięcia myszką
    const rect = button.getBoundingClientRect();
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;
    
    // Dodajemy klasę CSS, która uruchomi animację
    circle.classList.add('ripple-effect');

    // Jeśli ktoś klika bardzo szybko, usuwamy starą falę
    const existingRipple = button.querySelector('.ripple-effect');
    if (existingRipple) {
        existingRipple.remove();
    }

    button.appendChild(circle);

    // Usuwamy element z pamięci, gdy animacja się skończy (600ms)
    setTimeout(() => {
        circle.remove();
    }, 600);
}

// 2. Funkcja podpinająca efekt pod przyciski
function initClickEffects() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        // Zabezpieczenie, żeby nie dodać nasłuchiwacza dwa razy do tego samego przycisku
        if (!btn.dataset.rippleAttached) {
            btn.addEventListener('click', createRipple);
            btn.style.position = 'relative'; // Wymagane, by fala nie wyszła poza przycisk
            btn.style.overflow = 'hidden';   // Przycina falę do krawędzi przycisku
            btn.dataset.rippleAttached = "true";
        }
    });
}

// 3. Uruchamiamy po załadowaniu strony i obserwujemy zmiany (dla nowych pytań)
window.addEventListener('load', () => {
    initClickEffects(); // Podpinamy pod stałe przyciski (np. Zaloguj)
    
    // MutationObserver to "strażnik", który patrzy czy na stronie pojawiło się coś nowego
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length > 0) {
                initClickEffects(); // Jeśli pojawiły się nowe przyciski odpowiedzi, dodaj do nich efekt!
            }
        });
    });

    // Powiedz strażnikowi, żeby obserwował całą aplikację
    observer.observe(document.body, { childList: true, subtree: true });
});