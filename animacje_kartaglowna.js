// animacje_kartaglowna.js

function animateDashboard() {
    // Pobieramy wszystkie główne elementy dashboardu
    const elements = document.querySelectorAll('.ui-card, .lesson-card, .center-header');
    
    // Na starcie ukrywamy je i przesuwamy lekko w dół
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });

    // Uruchamiamy kaskadowe pojawianie się (z opóźnieniem)
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100); // Każda kolejna karta pojawia się o 100ms później
    });
}