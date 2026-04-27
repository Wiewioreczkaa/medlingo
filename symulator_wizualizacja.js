let totalSimsCompleted = 0; // Łączna liczba ukończonych symulacji (0 do 36)

function openSimulationModules() {
    document.getElementById('dashboard-section').style.display = 'none';
    document.getElementById('simulation-map-section').style.display = 'none';
    document.getElementById('simulation-active-section').style.display = 'none';
    document.getElementById('simulation-modules-section').style.display = 'block';

    if (window.bgMusicMain) window.bgMusicMain.pause();
    if (typeof simMusic !== 'undefined') simMusic.play().catch(e => {});

    renderModulesGrid();
}

function renderModulesGrid() {
    const container = document.getElementById('sim-modules-container');
    container.innerHTML = '';

    modulesData.forEach((mod, index) => {
        const requiredSims = index * 6; // Np. Moduł 2 wymaga 6 ukończonych symulacji
        const isUnlocked = totalSimsCompleted >= requiredSims;
        
        // Ile symulacji zrobiono W TYM module
        let simsInThisModule = Math.max(0, Math.min(6, totalSimsCompleted - requiredSims));

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

        if (isUnlocked) {
            card.onclick = () => openSimulationMap(index);
        }

        container.appendChild(card);
    });
}

function openSimulationMap(moduleId) {
    currentModuleIndex = moduleId;
    document.getElementById('simulation-modules-section').style.display = 'none';
    document.getElementById('simulation-active-section').style.display = 'none';
    document.getElementById('simulation-map-section').style.display = 'block';
    
    document.getElementById('map-module-title').innerText = modulesData[moduleId].title;
    renderSimMap(moduleId);
}

function renderSimMap(moduleId) {
    const container = document.getElementById('sim-map-container');
    container.innerHTML = ''; 

    const sims = modulesData[moduleId].simulations;
    const moduleBaseProgress = moduleId * 6;

    for (let i = 0; i < sims.length; i++) {
        const wrapper = document.createElement('div');
        wrapper.className = 'sim-node-wrapper';
        
        if (i % 2 !== 0) wrapper.style.marginLeft = '120px';
        else wrapper.style.marginRight = '120px';

        const btn = document.createElement('button');
        btn.className = 'sim-level-btn';
        
        const title = document.createElement('div');
        title.className = 'sim-node-title';
        title.innerText = sims[i].title;

        // Czy ta konkretna symulacja jest odblokowana?
        const isSimUnlocked = totalSimsCompleted >= (moduleBaseProgress + i);

        if (isSimUnlocked) {
            btn.classList.add('active');
            btn.innerHTML = `<span class="sim-icon">${sims[i].icon}</span>`;
            btn.onclick = () => startSimulationDialog(moduleId, i);
        } else {
            btn.classList.add('locked');
            btn.innerHTML = `🔒`;
        }
        
        wrapper.appendChild(title);
        wrapper.appendChild(btn);
        container.appendChild(wrapper);
    }
}