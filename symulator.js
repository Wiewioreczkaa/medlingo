// ==========================================
// 1. BEZPIECZNE ZMIENNE (BRAK BŁĘDÓW REDEKLARACJI)
// ==========================================
window.currentModuleIndex = window.currentModuleIndex || 0;
window.currentSimIndex = window.currentSimIndex || 0;
window.currentDialogStep = window.currentDialogStep || 0;
window.wrongAttempts = window.wrongAttempts || 0;
window.totalSimsCompleted = window.totalSimsCompleted || 0;

if (!window.simMusic) {
    window.simMusic = new Audio('symulacja.mp3');
    window.simMusic.loop = true;
    window.simMusic.volume = 0.3;
}

// ==========================================
// 2. FUNKCJE REAKCJI I RESETU (NAPRAWA BLURA)
// ==========================================

function resetSimUI() {
    const container = document.getElementById('simulation-container');
    if (container) {
        container.classList.remove('blur-bg');
        container.style.filter = "none";
    }
    const summary = document.getElementById('sim-summary-overlay');
    const hint = document.getElementById('sim-hint-overlay');
    if (summary) summary.style.display = 'none';
    if (hint) hint.style.display = 'none';
}

function exitSimulation() {
    resetSimUI();
    window.simMusic.pause();
    window.simMusic.currentTime = 0; 
    if (typeof goToDashboard === 'function') {
        goToDashboard();
    } else {
        document.getElementById('simulation-modules-section').style.display = 'none';
        document.getElementById('dashboard-section').style.display = 'block';
    }
    if (window.bgMusicMain) window.bgMusicMain.play().catch(e => {});
}

function closeSimSummary() {
    resetSimUI();
    const thisSimGlobalIndex = (window.currentModuleIndex * 6) + window.currentSimIndex;
    if (window.totalSimsCompleted === thisSimGlobalIndex) {
        window.totalSimsCompleted++; 
    }
    openSimulationMap(window.currentModuleIndex);
}

// ==========================================
// 3. LOGIKA WYŚWIETLANIA MODUŁÓW I MAPY
// ==========================================

function openSimulationModules() {
    resetSimUI();
    document.getElementById('dashboard-section').style.display = 'none';
    document.getElementById('simulation-map-section').style.display = 'none';
    document.getElementById('simulation-active-section').style.display = 'none';
    document.getElementById('simulation-modules-section').style.display = 'block';

    if (window.bgMusicMain) window.bgMusicMain.pause();
    window.simMusic.play().catch(e => {});

    renderModulesGrid();
}

function renderModulesGrid() {
    const container = document.getElementById('sim-modules-container');
    if (!container) return;
    container.innerHTML = '';

    modulesData.forEach((mod, index) => {
        const requiredSims = index * 6;
        const isUnlocked = window.totalSimsCompleted >= requiredSims;
        let simsInThisModule = Math.max(0, Math.min(6, window.totalSimsCompleted - requiredSims));

        const card = document.createElement('div');
        card.className = `sim-module-card ${isUnlocked ? '' : 'locked'}`;
        card.style.borderTop = `6px solid ${mod.color}`;
        card.innerHTML = `
            <div class="mod-header">
                <span class="mod-number">Moduł ${index + 1}</span>
                <span>${isUnlocked ? '🔓' : '🔒'}</span>
            </div>
            <div class="mod-title">${mod.title}</div>
            <div class="mod-desc">${mod.desc}</div>
            <div class="mod-progress">${simsInThisModule} / 6 ukończonych</div>
        `;
        if (isUnlocked) card.onclick = () => openSimulationMap(index);
        container.appendChild(card);
    });
}

function openSimulationMap(moduleId) {
    window.currentModuleIndex = moduleId;
    document.getElementById('simulation-modules-section').style.display = 'none';
    document.getElementById('simulation-active-section').style.display = 'none';
    document.getElementById('simulation-map-section').style.display = 'block';
    
    const titleEl = document.getElementById('map-module-title');
    if (titleEl) titleEl.innerText = modulesData[moduleId].title;
    
    renderSimMap(moduleId);
}

function renderSimMap(moduleId) {
    const container = document.getElementById('sim-map-container');
    if (!container) return;
    container.innerHTML = ''; 

    const sims = modulesData[moduleId].simulations;
    const moduleBaseProgress = moduleId * 6;

    for (let i = 0; i < sims.length; i++) {
        const wrapper = document.createElement('div');
        wrapper.className = 'sim-node-wrapper';
        if (i % 2 !== 0) wrapper.style.marginLeft = '120px';
        else wrapper.style.marginRight = '120px';

        const isSimUnlocked = window.totalSimsCompleted >= (moduleBaseProgress + i);
        const btn = document.createElement('button');
        btn.className = `sim-level-btn ${isSimUnlocked ? 'active' : 'locked'}`;
        btn.innerHTML = isSimUnlocked ? `<span class="sim-icon">${sims[i].icon}</span>` : '🔒';
        
        const title = document.createElement('div');
        title.className = 'sim-node-title';
        title.innerText = sims[i].title;

        if (isSimUnlocked) btn.onclick = () => startSimulationDialog(moduleId, i);
        
        wrapper.appendChild(title);
        wrapper.appendChild(btn);
        container.appendChild(wrapper);
    }
}

// ==========================================
// 4. BAZA DANYCH (36 SYMULACJI)
// ==========================================
const modulesData = [
    {
        title: "Podstawowy", color: "#2ecc71", desc: "Proste urazy i pierwsza pomoc.",
        simulations: [
            { title: "Rana cięta", icon: "🩸", summary: "Zaopatrzono krwotok, zszyto ranę.", dialogs: [
                { role: "patient", text: "Zaciąłem się w dłoń!" },
                { role: "input", text: "Założymy opatrunek ____.", answer: "uciskowy", hint: "Tamuje krew." },
                { role: "input", text: "Ranę musimy ____.", answer: "oczyścić", hint: "Wypłukać." },
                { role: "input", text: "Podamy ____ miejscową.", answer: "lignokainę", hint: "Znieczulenie." },
                { role: "input", text: "Założymy chirurgiczne ____.", answer: "szwy", hint: "Łączenie." },
                { role: "input", text: "Czy brał Pan zastrzyk na ____?", answer: "tężec", hint: "Choroba." }
            ]},
            { title: "Zwichnięcie", icon: "🦶", summary: "Kostka zabezpieczona.", dialogs: [
                { role: "patient", text: "Kostka mi spuchła!" },
                { role: "input", text: "Przyłożymy zimny ____.", answer: "okład", hint: "Lód." },
                { role: "input", text: "Musimy nogę ____.", answer: "unieść", hint: "Do góry." },
                { role: "input", text: "Zastosujemy ____ elastyczny.", answer: "bandaż", hint: "Owijka." },
                { role: "input", text: "Musimy staw ____.", answer: "unieruchomić", hint: "Brak ruchu." },
                { role: "input", text: "Zrobimy zdjęcie ____.", answer: "rtg", hint: "Rentgen." }
            ]},
            { title: "Oparzenie I st.", icon: "☀️", summary: "Skóra schłodzona.", dialogs: [
                { role: "patient", text: "Pieką mnie plecy!" },
                { role: "input", text: "To oparzenie ____ stopnia.", answer: "pierwszego", hint: "Lekkie." },
                { role: "input", text: "Trzeba skórę ____.", answer: "schłodzić", hint: "Zimna woda." },
                { role: "input", text: "Nałożymy ____.", answer: "pantenol", hint: "Pianka." },
                { role: "input", text: "Pij dużo wody, by się ____.", answer: "nawodnić", hint: "Płyny." },
                { role: "input", text: "Unikaj ekspozycji na ____.", answer: "słońce", hint: "Gwiazda." }
            ]},
            { title: "Krwotok z nosa", icon: "👃", summary: "Krwotok opanowany.", dialogs: [
                { role: "patient", text: "Leci krew z nosa!" },
                { role: "input", text: "Pochyl głowę do ____.", answer: "przodu", hint: "Nie tył." },
                { role: "input", text: "Wykonaj ____ skrzydełek.", answer: "ucisk", hint: "Docisk." },
                { role: "input", text: "Zimny okład na ____.", answer: "kark", hint: "Szyja." },
                { role: "input", text: "Zmierzymy ____.", answer: "ciśnienie", hint: "RR." },
                { role: "input", text: "Zaraz krew ____.", answer: "zakrzepnie", hint: "Zastygnie." }
            ]},
            { title: "Kleszcz", icon: "🦟", summary: "Kleszcz usunięty.", dialogs: [
                { role: "patient", text: "Mam kleszcza!" },
                { role: "input", text: "Wyjmiemy go ____.", answer: "pęsetą", hint: "Szczypce." },
                { role: "input", text: "Miejsce trzeba ____.", answer: "odkazić", hint: "Czyścić." },
                { role: "input", text: "Szukaj plamy - ____.", answer: "rumienia", hint: "Krąg." },
                { role: "input", text: "To objaw ____.", answer: "boreliozy", hint: "Choroba." },
                { role: "input", text: "Lekarz poda ____.", answer: "antybiotyk", hint: "Na bakterie." }
            ]},
            { title: "Omdlenie", icon: "😵", summary: "Przywrócono świadomość.", dialogs: [
                { role: "patient", text: "Zrobiło mi się ciemno." },
                { role: "input", text: "Uniesiemy Panu ____.", answer: "nogi", hint: "Do góry." },
                { role: "input", text: "Sprawdzę ____.", answer: "tętno", hint: "Puls." },
                { role: "input", text: "Zbadamy poziom ____.", answer: "cukru", hint: "Glukoza." },
                { role: "input", text: "Odzyskał Pan ____.", answer: "świadomość", hint: "Przytomność." },
                { role: "input", text: "Trzeba się ____.", answer: "nawodnić", hint: "Picie." }
            ]}
        ]
    },
    {
        title: "Ponad podstawowy", color: "#3498db", desc: "Sprzęt i diagnozy.",
        simulations: [
            { title: "Hipoglikemia", icon: "🍬", summary: "Podano glukozę.", dialogs: [
                { role: "patient", text: "Słabo mi." },
                { role: "input", text: "Użyjemy ____.", answer: "glukometru", hint: "Mierzy." },
                { role: "input", text: "To niska ____.", answer: "glikemia", hint: "Cukier." },
                { role: "input", text: "Podam Panu ____.", answer: "glukozę", hint: "Słodkie." },
                { role: "input", text: "Brał Pan ____?", answer: "insulinę", hint: "Lek." },
                { role: "input", text: "To stan ____.", answer: "hipoglikemii", hint: "Niedocukrzenie." }
            ]},
            { title: "Atak astmy", icon: "🫁", summary: "Opanowano duszność.", dialogs: [
                { role: "patient", text: "Duszę się!" },
                { role: "input", text: "Podamy wziewny ____.", answer: "salbutamol", hint: "Rozkurcza." },
                { role: "input", text: "Podłączymy ____.", answer: "tlen", hint: "Gaz." },
                { role: "input", text: "Słyszę ____.", answer: "świsty", hint: "Dźwięki." },
                { role: "input", text: "To napad ____.", answer: "astmy", hint: "Choroba." },
                { role: "input", text: "Damy ____ dożylnie.", answer: "sterydy", hint: "Leki 'S'." }
            ]},
            { title: "Nadciśnienie", icon: "❤️", summary: "RR obniżone.", dialogs: [
                { role: "patient", text: "Boli mnie głowa." },
                { role: "input", text: "Zmierzymy ____.", answer: "ciśnienie", hint: "RR." },
                { role: "input", text: "To stan ____.", answer: "nadciśnienia", hint: "Wysokie." },
                { role: "input", text: "Damy pod język ____.", answer: "kaptopryl", hint: "Lek." },
                { role: "input", text: "Zrobimy ____.", answer: "ekg", hint: "Zapis." },
                { role: "input", text: "Unikaj ____.", answer: "soli", hint: "Sód." }
            ]},
            { title: "Oko", icon: "👁️", summary: "Wypłukano oko.", dialogs: [
                { role: "patient", text: "Coś mam w oku." },
                { role: "input", text: "Płuczemy solą ____.", answer: "fizjologiczną", hint: "NaCl." },
                { role: "input", text: "Odwinę ____.", answer: "powiekę", hint: "Część oka." },
                { role: "input", text: "Uraz ____?", answer: "rogówki", hint: "Błona." },
                { role: "input", text: "Dam lek ____.", answer: "znieczulający", hint: "Bez bólu." },
                { role: "input", text: "Idź do ____.", answer: "okulisty", hint: "Lekarz." }
            ]},
            { title: "Złamanie", icon: "🦴", summary: "Zabezpieczono kość.", dialogs: [
                { role: "patient", text: "Ręka jest krzywa." },
                { role: "input", text: "To złamanie ____.", answer: "zamknięte", hint: "Bez rany." },
                { role: "input", text: "Damy ____.", answer: "szynę", hint: "Stabilizacja." },
                { role: "input", text: "Damy lek ____.", answer: "przeciwbólowy", hint: "Ból." },
                { role: "input", text: "Sprawdzę ____.", answer: "tętno", hint: "Puls." },
                { role: "input", text: "Zdjęcie ____.", answer: "rtg", hint: "Rentgen." }
            ]},
            { title: "Panika", icon: "😮‍💨", summary: "Lęk opanowany.", dialogs: [
                { role: "patient", text: "Szybko oddycham." },
                { role: "input", text: "To atak ____.", answer: "paniki", hint: "Lęk." },
                { role: "input", text: "Oddychaj do ____.", answer: "torebki", hint: "Papierowa." },
                { role: "input", text: "Masz za mało ____.", answer: "dwutlenku", hint: "CO2." },
                { role: "input", text: "To ____ oddechowa.", answer: "zasadowica", hint: "pH." },
                { role: "input", text: "Muszę Cię ____.", answer: "uspokoić", hint: "Relaks." }
            ]}
        ]
    },
    {
        title: "Średni", color: "#9b59b6", desc: "Leki i diagnostyka.",
        simulations: [
            { title: "Kolka", icon: "💧", summary: "Pyralgina podana.", dialogs: [
                { role: "patient", text: "Boli mnie w lędźwiach!" },
                { role: "input", text: "Objaw ____.", answer: "goldflama", hint: "Pukanie." },
                { role: "input", text: "Lek ____.", answer: "rozkurczowy", hint: "Nospa." },
                { role: "input", text: "Badanie ____.", answer: "usg", hint: "Z żelem." },
                { role: "input", text: "Są to ____.", answer: "złogi", hint: "Kamienie." },
                { role: "input", text: "W moczu ____.", answer: "krew", hint: "Czerwień." }
            ]},
            { title: "Płuca", icon: "🦠", summary: "Zapalenie płuc.", dialogs: [
                { role: "patient", text: "Gorączka i kaszel." },
                { role: "input", text: "Słyszę ____.", answer: "trzeszczenia", hint: "Dźwięki." },
                { role: "input", text: "Białko ____.", answer: "zapalne", hint: "CRP." },
                { role: "input", text: "Dam ____.", answer: "antybiotyk", hint: "Bakterie." },
                { role: "input", text: "Zrobić ____.", answer: "rtg", hint: "Rentgen." },
                { role: "input", text: "W płucach ____.", answer: "zapalenie", hint: "Stan." }
            ]},
            { title: "Serce", icon: "📈", summary: "Tachykardia nadkomorowa.", dialogs: [
                { role: "patient", text: "Serce wali!" },
                { role: "input", text: "To ____.", answer: "tachykardia", hint: "Szybki puls." },
                { role: "input", text: "Nerw ____.", answer: "błędny", hint: "Vagus." },
                { role: "input", text: "Damy ____.", answer: "adenozynę", hint: "Lek." },
                { role: "input", text: "Zapis ____.", answer: "ekg", hint: "Zapis." },
                { role: "input", text: "Resetujemy ____.", answer: "serce", hint: "Narząd." }
            ]},
            { title: "Brzuch", icon: "🔪", summary: "Wyrostek robaczkowy.", dialogs: [
                { role: "patient", text: "Boli po prawej." },
                { role: "input", text: "Objaw ____.", answer: "blumberga", hint: "Uciskanie." },
                { role: "input", text: "Zapalenie ____.", answer: "wyrostka", hint: "Narząd." },
                { role: "input", text: "Będzie ____.", answer: "operacja", hint: "Zabieg." },
                { role: "input", text: "Poziom ____.", answer: "leukocytów", hint: "Krwinki." },
                { role: "input", text: "Bądź na ____.", answer: "czczo", hint: "Jedzenie." }
            ]},
            { title: "Ciepło", icon: "☀️", summary: "Udar cieplny.", dialogs: [
                { role: "patient", text: "Słabo mi, upał." },
                { role: "input", text: "Udar ____.", answer: "cieplny", hint: "Od gorąca." },
                { role: "input", text: "Musimy ____.", answer: "schłodzić", hint: "Zimno." },
                { role: "input", text: "Damy ____.", answer: "płyny", hint: "Kroplówka." },
                { role: "input", text: "Zbadamy ____.", answer: "elektrolity", hint: "Sole." },
                { role: "input", text: "Masz ____.", answer: "gorączkę", hint: "Wysoka." }
            ]},
            { title: "Oparzenie II", icon: "🔥", summary: "Pęcherze surowicze.", dialogs: [
                { role: "patient", text: "Bąble po wrzątku." },
                { role: "input", text: "To ____.", answer: "pęcherze", hint: "Wypełnione." },
                { role: "input", text: "Stopień ____.", answer: "drugi", hint: "Średni." },
                { role: "input", text: "Maść ze ____.", answer: "srebrem", hint: "Metal." },
                { role: "input", text: "Trzeba ____.", answer: "odkażać", hint: "Czyścić." },
                { role: "input", text: "Damy lek ____.", answer: "przeciwbólowy", hint: "Ból." }
            ]}
        ]
    },
    {
        title: "Trudny", color: "#e67e22", desc: "Stany zagrażające życiu.",
        simulations: [
            { title: "Udar", icon: "🧠", summary: "Tromboliza wykonana.", dialogs: [
                { role: "patient", text: "Nie czuję nogi." },
                { role: "input", text: "To ____.", answer: "udar", hint: "Mózg." },
                { role: "input", text: "Zrobić ____.", answer: "tomografię", hint: "TK." },
                { role: "input", text: "Czas to ____.", answer: "mózg", hint: "Narząd." },
                { role: "input", text: "Damy ____.", answer: "trombolizę", hint: "Lek." },
                { role: "input", text: "Występuje ____.", answer: "afazja", hint: "Brak mowy." }
            ]},
            { title: "Zator", icon: "🩸", summary: "Zatorowość płucna.", dialogs: [
                { role: "patient", text: "Duszno mi." },
                { role: "input", text: "To ____.", answer: "zatorowość", hint: "Płucna." },
                { role: "input", text: "Zbadamy ____.", answer: "ddimery", hint: "Krew." },
                { role: "input", text: "Damy ____.", answer: "heparynę", hint: "Lek." },
                { role: "input", text: "Angio-____.", answer: "tk", hint: "Tomografia." },
                { role: "input", text: "Podamy ____.", answer: "tlen", hint: "Gaz." }
            ]},
            { title: "Krwotok", icon: "🩸", summary: "Gastroskopia wykonana.", dialogs: [
                { role: "patient", text: "Wymiotuję fusami." },
                { role: "input", text: "Wymioty ____.", answer: "fusowate", hint: "Kawa." },
                { role: "input", text: "Leki ____.", answer: "ipp", hint: "Pompa." },
                { role: "input", text: "Pilna ____.", answer: "gastroskopia", hint: "Kamera." },
                { role: "input", text: "Będzie ____.", answer: "transfuzja", hint: "Krew." },
                { role: "input", text: "Stolec ____.", answer: "smolisty", hint: "Czarny." }
            ]},
            { title: "Sepsa", icon: "🦠", summary: "Wstrząs septyczny.", dialogs: [
                { role: "patient", text: "Ciśnienie spada." },
                { role: "input", text: "To ____.", answer: "sepsa", hint: "Zakażenie." },
                { role: "input", text: "Dam ____.", answer: "antybiotyk", hint: "Lek." },
                { role: "input", text: "Poziom ____.", answer: "mleczanów", hint: "Kwas." },
                { role: "input", text: "Dam ____.", answer: "noradrenalinę", hint: "RR." },
                { role: "input", text: "Mamy ____.", answer: "wstrząs", hint: "Stan." }
            ]},
            { title: "Trzustka", icon: "🧪", summary: "Zapalenie trzustki.", dialogs: [
                { role: "patient", text: "Ból opasujący." },
                { role: "input", text: "Zapalenie ____.", answer: "trzustki", hint: "Narząd." },
                { role: "input", text: "Wysoka ____.", answer: "amylaza", hint: "Enzym." },
                { role: "input", text: "Winny ____?", answer: "alkohol", hint: "Używka." },
                { role: "input", text: "Bądź na ____.", answer: "czczo", hint: "Zero jedzenia." },
                { role: "input", text: "Mamy ____.", answer: "ozt", hint: "Skrót." }
            ]},
            { title: "Zawał", icon: "📉", summary: "Zawał NSTEMI.", dialogs: [
                { role: "patient", text: "Piecze w klatce." },
                { role: "input", text: "Zbadamy ____.", answer: "troponiny", hint: "Białka." },
                { role: "input", text: "Zawał ____.", answer: "nstemi", hint: "Bez ST." },
                { role: "input", text: "Podam ____.", answer: "aspirynę", hint: "ASA." },
                { role: "input", text: "Zrobić ____.", answer: "koronarografię", hint: "Badanie." },
                { role: "input", text: "Dam ____.", answer: "heparynę", hint: "Krew." }
            ]}
        ]
    },
    {
        title: "Ekspert", color: "#e74c3c", desc: "Krytyczne przypadki.",
        simulations: [
            { title: "Płuca", icon: "🌊", summary: "Obrzęk płuc.", dialogs: [
                { role: "patient", text: "Duszę się!" },
                { role: "input", text: "To ____ płuc.", answer: "obrzęk", hint: "Woda." },
                { role: "input", text: "Dam ____.", answer: "furosemid", hint: "Mocz." },
                { role: "input", text: "Dam ____.", answer: "nitroglicerynę", hint: "Nitrat." },
                { role: "input", text: "Dam ____.", answer: "morfinę", hint: "Oddech." },
                { role: "input", text: "Wysoki ____.", answer: "tlen", hint: "O2." }
            ]},
            { title: "Cukier", icon: "🧪", summary: "Kwasica ketonowa.", dialogs: [
                { role: "patient", text: "Zapach owoców." },
                { role: "input", text: "Oddech ____.", answer: "kussmaula", hint: "Głęboki." },
                { role: "input", text: "Kwasica ____.", answer: "ketonowa", hint: "Cukrzyca." },
                { role: "input", text: "Damy ____.", answer: "insulinę", hint: "Hormon." },
                { role: "input", text: "Jon ____?", answer: "potasu", hint: "K+." },
                { role: "input", text: "Są ____.", answer: "ketony", hint: "Ciała." }
            ]},
            { title: "Padaczka", icon: "⚡", summary: "Stan padaczkowy.", dialogs: [
                { role: "patient", text: "Drgawki 10 min." },
                { role: "input", text: "To ____.", answer: "stan", hint: "Ciągły." },
                { role: "input", text: "Dam ____.", answer: "diazepam", hint: "Relanium." },
                { role: "input", text: "Zabezpiecz ____.", answer: "głowę", hint: "Ciało." },
                { role: "input", text: "Drogi ____.", answer: "oddechowe", hint: "Rurka." },
                { role: "input", text: "Lek ____.", answer: "fenytoina", hint: "Na F." }
            ]},
            { title: "Krwotok", icon: "🩸", summary: "Żylaki przełyku.", dialogs: [
                { role: "patient", text: "Krew z przełyku!" },
                { role: "input", text: "To ____.", answer: "żylaki", hint: "Żyły." },
                { role: "input", text: "Dam ____.", answer: "terlipresynę", hint: "Lek." },
                { role: "input", text: "Wstrząs ____.", answer: "hipowolemiczny", hint: "Krew." },
                { role: "input", text: "Zrobić ____.", answer: "endoskopię", hint: "Rura." },
                { role: "input", text: "Podać ____.", answer: "osocze", hint: "Płyn." }
            ]},
            { title: "Astma", icon: "🫁", summary: "Zagrożenie życia.", dialogs: [
                { role: "patient", text: "Nie oddycham." },
                { role: "input", text: "____ klatka.", answer: "cicha", hint: "Bez szmeru." },
                { role: "input", text: "Szybka ____.", answer: "intubacja", hint: "Rurka." },
                { role: "input", text: "Siarczan ____.", answer: "magnezu", hint: "Mg." },
                { role: "input", text: "Dam ____.", answer: "adrenalinę", hint: "Epinefryna." },
                { role: "input", text: "Dam ____.", answer: "sterydy", hint: "GKS." }
            ]},
            { title: "Głowa", icon: "💥", summary: "Tętniak mózgu.", dialogs: [
                { role: "patient", text: "Ból głowy życia!" },
                { role: "input", text: "To ____.", answer: "tętniak", hint: "Naczynie." },
                { role: "input", text: "Krwawienie ____.", answer: "podpajęczynówkowe", hint: "SAH." },
                { role: "input", text: "Sztywność ____.", answer: "karku", hint: "Szyja." },
                { role: "input", text: "Neuro____.", answer: "chirurgia", hint: "Operacja." },
                { role: "input", text: "Zrobić ____.", answer: "tomografię", hint: "TK." }
            ]}
        ]
    },
    {
        title: "Egzamin (ALS)", color: "#c0392b", desc: "Zatrzymanie krążenia.",
        simulations: [
            { title: "Asystolia", icon: "☠️", summary: "Protokół ALS asystolia.", dialogs: [
                { role: "patient", text: "Brak tętna." },
                { role: "input", text: "To ____.", answer: "als", hint: "Advanced." },
                { role: "input", text: "Dajemy ____.", answer: "adrenalinę", hint: "Epinefryna." },
                { role: "input", text: "30 do ____.", answer: "2", hint: "Wdechy." },
                { role: "input", text: "Defibrylacja? ____.", answer: "nie", hint: "Tak/Nie." },
                { role: "input", text: "Przyczyny ____?", answer: "odwracalne", hint: "4H/4T." }
            ]},
            { title: "Migotanie", icon: "⚡", summary: "VF defibrylacja.", dialogs: [
                { role: "patient", text: "Chaos na monitorze." },
                { role: "input", text: "To ____.", answer: "komór", hint: "VF." },
                { role: "input", text: "Wykonaj ____.", answer: "defibrylację", hint: "Wstrząs." },
                { role: "input", text: "Energia ____ J.", answer: "150", hint: "Joule." },
                { role: "input", text: "Lek ____.", answer: "amiodaron", hint: "Na A." },
                { role: "input", text: "Dawka ____ mg.", answer: "300", hint: "Po 3 strzale." }
            ]},
            { title: "Wstrząs", icon: "📉", summary: "Wstrząs kardiogenny.", dialogs: [
                { role: "patient", text: "Serce nie pompuje." },
                { role: "input", text: "Wstrząs ____.", answer: "kardiogenny", hint: "Serce." },
                { role: "input", text: "Dam ____.", answer: "dobutaminę", hint: "Lek na D." },
                { role: "input", text: "Zrobić ____.", answer: "echokardiografię", hint: "ECHO." },
                { role: "input", text: "Wsparcie ____.", answer: "krążenia", hint: "Pompa." },
                { role: "input", text: "Pilna ____.", answer: "angioplastyka", hint: "Tętnice." }
            ]},
            { title: "Zimno", icon: "❄️", summary: "Hipotermia głęboka.", dialogs: [
                { role: "patient", text: "Zamarznięty." },
                { role: "input", text: "To ____.", answer: "hipotermia", hint: "Zimno." },
                { role: "input", text: "Leki od ____ st.", answer: "30", hint: "Temp." },
                { role: "input", text: "Ruchy ____.", answer: "łagodne", hint: "Przekładanie." },
                { role: "input", text: "Krążenie ____.", answer: "pozaustrojowe", hint: "ECMO." },
                { role: "input", text: "Dłuższa ocena ____.", answer: "tętna", hint: "Puls." }
            ]},
            { title: "Aorta", icon: "💔", summary: "Rozwarstwienie aorty.", dialogs: [
                { role: "patient", text: "Ból rozrywający." },
                { role: "input", text: "To ____.", answer: "rozwarstwienie", hint: "Aorta." },
                { role: "input", text: "Zbić RR ____.", answer: "labetalolem", hint: "Lek na L." },
                { role: "input", text: "Jest ____.", answer: "asymetria", hint: "Różnica RR." },
                { role: "input", text: "Badanie ____.", answer: "tk", hint: "Tomografia." },
                { role: "input", text: "Wzywaj ____.", answer: "kardiochirurga", hint: "Lekarz." }
            ]},
            { title: "Poród", icon: "👶", summary: "Zator płynem owodniowym.", dialogs: [
                { role: "patient", text: "Sina przy porodzie." },
                { role: "input", text: "Płynem ____.", answer: "owodniowym", hint: "Woda." },
                { role: "input", text: "Zespół ____.", answer: "dic", hint: "Krwotok." },
                { role: "input", text: "Lewy ____.", answer: "bok", hint: "Pozycja." },
                { role: "input", text: "Cięcie ____.", answer: "cesarskie", hint: "Dziecko." },
                { role: "input", text: "Podać ____.", answer: "krew", hint: "Czerwień." }
            ]}
        ]
    }
];

// ==========================================
// 5. GŁÓWNA LOGIKA SYMULATORA
// ==========================================

function startSimulationDialog(modIndex, simIndex) {
    resetSimUI();
    window.currentModuleIndex = modIndex;
    window.currentSimIndex = simIndex;
    window.currentDialogStep = 0;
    window.wrongAttempts = 0;
    
    document.getElementById('simulation-map-section').style.display = 'none';
    document.getElementById('simulation-active-section').style.display = 'block';
    
    const simData = modulesData[window.currentModuleIndex].simulations[window.currentSimIndex];
    document.getElementById('sim-title').innerText = simData.title;
    document.getElementById('dialog-box').innerHTML = ''; 
    showNextDialogBubble();
}

function showNextDialogBubble() {
    const simData = modulesData[window.currentModuleIndex].simulations[window.currentSimIndex];
    const dialogs = simData.dialogs;
    if (window.currentDialogStep >= dialogs.length) {
        if (typeof showSimSummary === 'function') showSimSummary(simData.summary);
        return;
    }
    const stepData = dialogs[window.currentDialogStep];
    const box = document.getElementById('dialog-box');
    const inputArea = document.getElementById('simulation-input-area');
    const nextBtn = document.getElementById('next-dialog-btn');
    if (stepData.role !== "input") {
        inputArea.style.display = "none";
        nextBtn.style.display = "block";
        const bubble = document.createElement('div');
        bubble.className = `dialog-bubble bubble-${stepData.role}`;
        bubble.innerText = stepData.text;
        box.appendChild(bubble);
    } else {
        nextBtn.style.display = "none";
        inputArea.style.display = "flex";
        const bubble = document.createElement('div');
        bubble.className = `dialog-bubble bubble-input`;
        bubble.id = "active-input-bubble"; 
        bubble.innerText = stepData.text;
        box.appendChild(bubble);
        document.getElementById('sim-answer').value = '';
        setTimeout(() => document.getElementById('sim-answer').focus(), 100);
    }
    setTimeout(() => { box.scrollTop = box.scrollHeight; }, 50);
}

function nextSimStep() { window.currentDialogStep++; showNextDialogBubble(); }

function getRevealedString(answer, revealedCount) {
    let result = "";
    for (let i = 0; i < answer.length; i++) {
        if (i < revealedCount) result += answer[i].toUpperCase() + " ";
        else result += "_ ";
    }
    return result.trim();
}

function failCurrentStep(deductLife) {
    const step = modulesData[window.currentModuleIndex].simulations[window.currentSimIndex].dialogs[window.currentDialogStep];
    const activeBubble = document.getElementById('active-input-bubble');
    if(activeBubble) {
        activeBubble.removeAttribute('id');
        activeBubble.classList.remove('bubble-input');
        activeBubble.classList.add('bubble-user');
        activeBubble.innerHTML = step.text.replace(/_+/, `<span class="sim-wrong-word">BRAK</span> <span class="sim-correction">(${step.answer})</span>`);
    }
    document.getElementById('simulation-input-area').style.display = "none";
    window.currentDialogStep++;
    window.wrongAttempts = 0;
    if (typeof simPlayWrong === 'function') simPlayWrong();
    if (deductLife && typeof userLives !== 'undefined') {
         window.userLives--;
         if(typeof updateHearts === 'function') updateHearts();
    }
    setTimeout(showNextDialogBubble, 1200); 
}

function skipSimAnswer() { failCurrentStep(true); }

function checkSimAnswer() {
    const inputField = document.getElementById('sim-answer');
    const userAnswer = inputField.value.trim().toLowerCase();
    const step = modulesData[window.currentModuleIndex].simulations[window.currentSimIndex].dialogs[window.currentDialogStep];
    const correctAnswer = step.answer.toLowerCase();
    if (userAnswer === correctAnswer) {
        if (typeof simPlayCorrect === 'function') simPlayCorrect(); 
        const activeBubble = document.getElementById('active-input-bubble');
        if(activeBubble) {
            activeBubble.removeAttribute('id'); 
            activeBubble.classList.remove('bubble-input');
            activeBubble.classList.add('bubble-user');
            activeBubble.innerHTML = step.text.replace(/_+/, `<span class="sim-correct-word">${step.answer}</span>`);
        }
        window.currentDialogStep++;
        window.wrongAttempts = 0; 
        document.getElementById('simulation-input-area').style.display = "none";
        setTimeout(showNextDialogBubble, 600); 
    } else {
        if (typeof simPlayWrong === 'function') simPlayWrong();
        inputField.value = ''; 
        window.wrongAttempts++;
        if (typeof userLives !== 'undefined') {
             window.userLives--; 
             if(typeof updateHearts === 'function') updateHearts();
        }
        if (window.wrongAttempts === 3) {
            if (typeof showSimHint === 'function') showSimHint(step.hint);
        } else if (window.wrongAttempts > 3) {
            let revealCount = window.wrongAttempts - 3;
            if (revealCount >= correctAnswer.length) {
                failCurrentStep(false); 
            } else {
                const activeBubble = document.getElementById('active-input-bubble');
                if (activeBubble) {
                    let revealedStr = getRevealedString(step.answer, revealCount);
                    activeBubble.innerHTML = step.text.replace(/_+|([A-ZĘÓĄŚŁŻŹĆŃ_]\s)+[A-ZĘÓĄŚŁŻŹĆŃ_]?/, revealedStr);
                }
            }
        }
    }
}