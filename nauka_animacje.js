// nauka_animacje.js

function animateLearnEntry() {
    const sidebar = document.querySelector('.learn-sidebar');
    const content = document.querySelector('.learn-content-area');
    
    sidebar.style.opacity = '0';
    sidebar.style.transform = 'translateX(-30px)';
    content.style.opacity = '0';
    
    setTimeout(() => {
        sidebar.style.transition = 'all 0.5s ease';
        sidebar.style.opacity = '1';
        sidebar.style.transform = 'translateX(0)';
    }, 100);

    setTimeout(() => {
        content.style.transition = 'opacity 0.6s ease';
        content.style.opacity = '1';
    }, 300);
}

function animateArticleLoad() {
    const article = document.getElementById('learn-article');
    article.style.animation = 'none';
    void article.offsetWidth;
    // Płynne, czytelnicze wynurzenie tekstu
    article.style.animation = 'slideInUp 0.5s ease-out forwards';
}