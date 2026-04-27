// ustawienia.js

// Otwieranie i zamykanie
function openSettings() {
    safePlay(soundSelect);
    document.getElementById('settings-modal').style.display = 'flex';
}

function closeSettings() {
    safePlay(soundSelect);
    document.getElementById('settings-modal').style.display = 'none';
}

// Obsługa muzyki
function updateMusicVolume() {
    const volSlider = document.getElementById('music-vol').value;
    const volumeMultiplier = volSlider / 100;

    // Aktualizacja wszystkich trzech utworów w oparciu o ich domyślną, cichą głośność
    if (typeof bgMusicMain !== 'undefined') bgMusicMain.volume = 0.2 * volumeMultiplier;
    if (typeof bgMusicLesson !== 'undefined') bgMusicLesson.volume = 0.15 * volumeMultiplier;
    if (typeof bgMusicLearn !== 'undefined') bgMusicLearn.volume = 0.15 * volumeMultiplier;
    
    localStorage.setItem('medlingo_musicVol', volSlider);
}

// Obsługa SFX
function updateSFX() {
    const isSfxOn = document.getElementById('sfx-toggle').checked;
    
    // Wyciszanie poszczególnych efektów
    if (typeof soundCorrect !== 'undefined') soundCorrect.muted = !isSfxOn;
    if (typeof soundWrong !== 'undefined') soundWrong.muted = !isSfxOn;
    if (typeof soundSelect !== 'undefined') soundSelect.muted = !isSfxOn;

    localStorage.setItem('medlingo_sfxOn', isSfxOn);
}

// Obsługa Dark Mode
function toggleDarkMode() {
    const isDark = document.getElementById('dark-mode-toggle').checked;
    
    if (isDark) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }

    localStorage.setItem('medlingo_darkMode', isDark);
}

// Wczytanie ustawień przy starcie strony
window.addEventListener('load', () => {
    // Muzyka
    const savedVol = localStorage.getItem('medlingo_musicVol');
    if (savedVol !== null) {
        document.getElementById('music-vol').value = savedVol;
        updateMusicVolume();
    }

    // SFX
    const savedSfx = localStorage.getItem('medlingo_sfxOn');
    if (savedSfx !== null) {
        const isOn = savedSfx === 'true';
        document.getElementById('sfx-toggle').checked = isOn;
        updateSFX();
    }

    // Dark Mode
    const savedDark = localStorage.getItem('medlingo_darkMode');
    if (savedDark === 'true') {
        document.getElementById('dark-mode-toggle').checked = true;
        document.body.classList.add('dark-theme');
    }
});