document.addEventListener('DOMContentLoaded', () => {
    // Menú Hamburguesa
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navigation');
    
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        }
    });

    // Actualizar fecha
    const dateElement = document.getElementById('current-date');
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = new Date().toLocaleDateString('es-ES', options);

    function setDayNightTheme() {
        const hero = document.querySelector('.weather-hero');
        const date = new Date();
        const hours = date.getHours();
        
        if (hours >= 6 && hours < 18) {
            hero.classList.remove('night');
            hero.classList.add('day');
        } else {
            hero.classList.remove('day');
            hero.classList.add('night');
        }
        
        // Actualizar ícono dinámico
        const currentTemp = document.querySelector('.current-temp');
        currentTemp.style.animation = 'none';
        setTimeout(() => {
            currentTemp.style.animation = 'scaleUp 0.5s ease-out';
        }, 10);
    }
    
    // Inicializar
    document.addEventListener('DOMContentLoaded', () => {
        setDayNightTheme();
        setInterval(setDayNightTheme, 60000);
    });
});
