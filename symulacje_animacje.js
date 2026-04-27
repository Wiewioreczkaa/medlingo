const simAlertSound = new Audio('komunikat_symulacja.mp3');

function showSimHint(hintText) {
    // Odtwórz dźwięk komunikatu
    simAlertSound.play().catch(e => console.log("Błąd dźwięku komunikatu"));
    
    const container = document.getElementById('simulation-container');
    container.classList.add('blur-bg'); // Dodaj blur

    const hintOverlay = document.getElementById('sim-hint-overlay');
    document.getElementById('sim-hint-text').innerText = hintText;
    hintOverlay.style.display = 'flex';

    // Zniknij automatycznie po 3 sekundach
    setTimeout(() => {
        hintOverlay.style.display = 'none';
        container.classList.remove('blur-bg');
    }, 3000);
}

function showSimSummary(summaryText) {
    // Odtwórz dźwięk komunikatu
    simAlertSound.play().catch(e => console.log("Błąd dźwięku komunikatu"));
    
    const container = document.getElementById('simulation-container');
    container.classList.add('blur-bg');

    const summaryOverlay = document.getElementById('sim-summary-overlay');
    document.getElementById('sim-summary-text').innerText = summaryText;
    summaryOverlay.style.display = 'flex';
}

function closeSimSummary() {
    const container = document.getElementById('simulation-container');
    container.classList.remove('blur-bg');
    document.getElementById('sim-summary-overlay').style.display = 'none';
    
    // Zakończ symulację i wróć do mapy
    if (unlockedSimLevels <= currentSimIndex + 1) unlockedSimLevels++; 
    openSimulationMap();
}