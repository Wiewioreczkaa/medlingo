// wizualizacje.js

// Baza naszych latających ikon
const medicalIcons = ['🩺', '💊', '🧬', '💉', '🦠', '✨', '➕', '🩸'];

function createBackgroundVisuals() {
    // Tworzymy kontener na nasze efekty
    const container = document.createElement('div');
    container.id = 'background-visuals';
    document.body.appendChild(container);

    // Generujemy 20 latających ikon
    for (let i = 0; i < 20; i++) {
        createFloatingIcon(container);
    }
}

function createFloatingIcon(container) {
    const icon = document.createElement('div');
    icon.className = 'floating-icon';
    
    // Losujemy ikonę z naszej bazy
    icon.innerText = medicalIcons[Math.floor(Math.random() * medicalIcons.length)];

    // Losujemy pozycję startową na osi X (od 0 do 100% szerokości ekranu)
    icon.style.left = Math.random() * 100 + 'vw';
    
    // Losujemy czas trwania animacji (żeby jedne leciały szybciej, inne wolniej - od 15 do 35 sekund)
    icon.style.animationDuration = (Math.random() * 20 + 15) + 's'; 
    
    // Losujemy opóźnienie startu (żeby nie wyleciały wszystkie naraz)
    icon.style.animationDelay = (Math.random() * 10) + 's';
    
    // Losujemy wielkość ikony
    icon.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';

    container.appendChild(icon);
}

// Uruchamiamy generowanie tła od razu po załadowaniu całej strony
window.addEventListener('load', createBackgroundVisuals);