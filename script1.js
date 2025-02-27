document.addEventListener('DOMContentLoaded', function() {
    console.log('script1.js loaded'); // Проверка загрузки скрипта

    // Добавление класса animate-on-scroll к элементам, которые нужно анимировать при прокрутке
    const elementsToAnimate = document.querySelectorAll('.section-header, .service-card, .step, .price-card, .testimonial-card, .about-content, .contact-form, .contact-info');
    
    elementsToAnimate.forEach(element => {
        element.classList.add('animate-on-scroll');
    });
    
    // Функция проверки, находится ли элемент в области видимости
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Функция для анимации элементов при прокрутке
    function animateOnScroll() {
        const animateElements = document.querySelectorAll('.animate-on-scroll');
        
        animateElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('visible');
            }
        });
    }
    
    // Вызов функции при загрузке страницы
    animateOnScroll();
    
    // Вызов функции при прокрутке страницы
    window.addEventListener('scroll', animateOnScroll);
    
    // Скрипт для мобильного меню
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navbar = document.querySelector('.navbar');
    
    if (mobileToggle && navbar) {
        mobileToggle.addEventListener('click', function() {
            navbar.classList.toggle('active');
        });
    } else {
        console.error('Mobile toggle or navbar not found');
    }
});