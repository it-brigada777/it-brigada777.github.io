document.addEventListener('DOMContentLoaded', function() {
    // Плавная прокрутка при нажатии на ссылки меню
    const menuLinks = document.querySelectorAll('.navbar a[href^="#"]');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Отменяем стандартное поведение ссылки

            const targetId = this.getAttribute('href'); // Получаем ID целевого элемента
            const targetElement = document.querySelector(targetId); // Находим целевой элемент

            if (targetElement) {
                // Плавная прокрутка к целевому элементу
                targetElement.scrollIntoView({
                    behavior: 'smooth', // Плавная прокрутка
                    block: 'start'      // Выравнивание элемента по верху окна
                });
            }
        });
    });
});