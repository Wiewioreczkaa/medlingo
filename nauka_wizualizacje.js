// nauka_wizualizacje.js

const knowledgeIcons = ['📖', '💡', '🧠', '🔬', '🎓'];

window.addEventListener('load', () => {
    const container = document.createElement('div');
    container.id = 'learn-visuals';
    
    // Style kontenera bezpośrednio w JS, aby nie zaśmiecać CSS
    container.style.position = 'fixed';
    container.style.top = '0'; container.style.left = '0';
    container.style.width = '100vw'; container.style.height = '100vh';
    container.style.zIndex = '-2'; container.style.pointerEvents = 'none';
    container.style.overflow = 'hidden';
    
    document.body.appendChild(container);

    for (let i = 0; i < 15; i++) {
        const icon = document.createElement('div');
        icon.innerText = knowledgeIcons[Math.floor(Math.random() * knowledgeIcons.length)];
        icon.style.position = 'absolute';
        icon.style.bottom = '-50px';
        icon.style.left = Math.random() * 100 + 'vw';
        icon.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
        icon.style.opacity = '0';
        icon.style.filter = 'grayscale(50%) opacity(10%)';
        
        // Płynny lot w górę
        icon.style.animation = `floatUp ${Math.random() * 20 + 20}s linear infinite`;
        icon.style.animationDelay = `${Math.random() * 15}s`;
        
        container.appendChild(icon);
    }
});