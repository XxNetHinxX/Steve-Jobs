// Анимация при прокрутке
document.addEventListener('DOMContentLoaded', function() {
    
    // Плавная прокрутка для навигационных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Закрываем меню на мобильных устройствах
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (!navbarCollapse.classList.contains('show')) return;
                
                navbarToggler.click();
            }
        });
    });
    
    // Анимация элементов при прокрутке
    function animateOnScroll() {
        const elements = document.querySelectorAll('.fade-in');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('visible');
            }
        });
    }
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Вызываем сразу для элементов в видимой области
    
    // Кнопка "Узнать больше"
    document.getElementById('learnMoreBtn').addEventListener('click', function() {
        document.getElementById('about').scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    // Кнопка "Смотреть видео"
    document.getElementById('watchVideoBtn').addEventListener('click', function() {
        // Открываем видео в новом окне
        window.open('https://www.youtube.com/watch?v=UF8uR6Z6KLc', '_blank');
    });
    
    // Кнопка "Википедия"
    document.getElementById('wikiBtn').addEventListener('click', function() {
        window.open('https://ru.wikipedia.org/wiki/%D0%94%D0%B6%D0%BE%D0%B1%D1%81,_%D0%A1%D1%82%D0%B8%D0%B2', '_blank');
    });
    
    // Кнопка "Показать хронологию"
    document.getElementById('timelineBtn').addEventListener('click', function() {
        const timeline = `
            1955 - Рождение Стива Джобса в Сан-Франциско
            1972 - Поступление в Рид-колледж
            1974 - Работа в Atari
            1976 - Основание Apple Computer
            1984 - Презентация Macintosh
            1985 - Уход из Apple, основание NeXT
            1986 - Покупка Pixar
            1997 - Возвращение в Apple
            2001 - Представление iPod
            2007 - Представление iPhone
            2010 - Представление iPad
            2011 - Уход Стива Джобса
        `;
        
        showModal('Хронология жизни Стива Джобса', timeline);
    });
    
    // Кнопка "Наследие"
    document.getElementById('legacyBtn').addEventListener('click', function() {
        const legacyText = `
            Стив Джобс оставил неизгладимый след в мире технологий и дизайна. Его философия минимализма, внимание к деталям и стремление к совершенству изменили несколько отраслей:
            
            • Персональные компьютеры (Mac)
            • Анимационные фильмы (Pixar)
            • Музыка (iPod и iTunes)
            • Телефоны (iPhone)
            • Планшеты (iPad)
            • Розничная торговля (Apple Store)
            
            Джобс доказал, что технологии могут быть не только функциональными, но и красивыми, интуитивно понятными и желанными. Его знаменитые презентации стали эталоном для всей индустрии.
            
            В 2022 году Джобс посмертно получил Президентскую медаль Свободы - высшую гражданскую награду США.
        `;
        
        showModal('Наследие Стива Джобса', legacyText);
    });
    
    // Кнопка "Все продукты Apple"
    document.getElementById('allProductsBtn').addEventListener('click', function() {
        window.open('https://www.apple.com/ru/', '_blank');
    });
    
    // Кнопки "Подробнее" на карточках продуктов
    document.querySelectorAll('.open-modal-btn').forEach(button => {
        button.addEventListener('click', function() {
            const title = this.getAttribute('data-title');
            const content = this.getAttribute('data-content');
            showModal(title, content);
        });
    });
    
    // Функция показа модального окна
    function showModal(title, content) {
        document.getElementById('modalTitle').textContent = title;
        document.getElementById('modalContent').textContent = content;
        
        const modal = new bootstrap.Modal(document.getElementById('infoModal'));
        modal.show();
    }
    
    // Кнопка "Новая цитата"
    const quotes = [
        "Инновации отличают лидера от догоняющего.",
        "Ваше время ограничено, не тратьте его, живя чужой жизнью.",
        "Единственный способ делать великие дела — любить то, что вы делаете.",
        "Будьте эталоном качества. Некоторые люди не привыкли к среде, где ожидается совершенство.",
        "Иногда жизнь бьет вас кирпичом по голове. Не теряйте веры.",
        "Просто продолжайте делать то, что вы делаете, и делайте это хорошо.",
        "Я уверен, что единственная вещь, которая помогла мне продолжать дело, — это то, что я любил его.",
        "Вы должны верить, что точки как-то соединятся в вашем будущем.",
        "Дизайн — это не только то, как что-то выглядит и ощущается. Дизайн — это то, как это работает.",
        "Лучше быть пиратом, чем служить во флоте.",
        "Я хотел бы оставить после себя наследие постоянных инноваций.",
        "Смерть, наверное, самое лучше изобретение жизни. Она — причина перемен."
    ];
    
    document.getElementById('newQuoteBtn').addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        
        // Создаем новую карточку с цитатой
        const quoteCard = document.createElement('div');
        quoteCard.className = 'card mb-4 fade-in';
        quoteCard.innerHTML = `
            <div class="card-body">
                <blockquote class="blockquote">
                    <p class="mb-0"><i class="fas fa-quote-left me-2 text-primary"></i>${randomQuote}<i class="fas fa-quote-right ms-2 text-primary"></i></p>
                </blockquote>
            </div>
        `;
        
        // Вставляем новую цитату в начало списка
        const quotesContainer = document.querySelector('#quotes .col-12');
        quotesContainer.insertBefore(quoteCard, quotesContainer.firstChild);
        
        // Запускаем анимацию для новой карточки
        setTimeout(() => {
            quoteCard.classList.add('visible');
        }, 100);
    });
    
    // Кнопка "Поделиться цитатой"
    document.getElementById('shareQuoteBtn').addEventListener('click', function() {
        const quoteCards = document.querySelectorAll('#quotes .card');
        if (quoteCards.length > 0) {
            const latestQuote = quoteCards[0].querySelector('p').textContent;
            
            // В реальном проекте здесь будет вызов API для шеринга
            // Для демонстрации просто показываем сообщение
            alert(`Цитата скопирована в буфер обмена:\n\n${latestQuote}\n\nТеперь вы можете поделиться ей в социальных сетях!`);
            
            // В реальном проекте можно использовать Clipboard API
            // navigator.clipboard.writeText(latestQuote);
        }
    });
    
    // Рейтинг звездами в форме отзыва
    const stars = document.querySelectorAll('.rating-stars i');
    const ratingInput = document.getElementById('rating');
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const ratingValue = parseInt(this.getAttribute('data-rating'));
            ratingInput.value = ratingValue;
            
            // Обновляем внешний вид звезд
            stars.forEach(s => {
                const sRating = parseInt(s.getAttribute('data-rating'));
                if (sRating <= ratingValue) {
                    s.classList.add('active');
                    s.classList.remove('far');
                    s.classList.add('fas');
                } else {
                    s.classList.remove('active');
                    s.classList.remove('fas');
                    s.classList.add('far');
                }
            });
        });
    });
    
    // Кнопка "Перейти на сайт" (Apple)
    document.getElementById('visitAppleBtn').addEventListener('click', function() {
        window.open('https://www.apple.com', '_blank');
    });
    
    // Кнопка "Купить книгу"
    document.getElementById('bookBtn').addEventListener('click', function() {
        window.open('https://www.ozon.ru/product/stiv-dzhobs-ayzekson-u-184999683/', '_blank');
    });
    
    // Кнопка "Смотреть трейлер"
    document.getElementById('filmsBtn').addEventListener('click', function() {
        window.open('https://www.youtube.com/watch?v=aEr6K1bwIVs', '_blank');
    });
    
    // Обработка формы отзыва
    document.getElementById('feedbackForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Проверяем, что рейтинг выбран
        const rating = document.getElementById('rating').value;
        if (rating === "0") {
            alert("Пожалуйста, поставьте оценку сайта, кликнув на звезды");
            return;
        }
        
        // В реальном проекте здесь будет отправка данных на сервер
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Показываем сообщение об успехе
        const successMessage = document.getElementById('successMessage');
        successMessage.classList.remove('d-none');
        
        // Прокручиваем к сообщению об успехе
        successMessage.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
        
        // Очищаем форму
        this.reset();
        
        // Сбрасываем звезды
        stars.forEach(star => {
            star.classList.remove('active', 'fas', 'text-warning');
            star.classList.add('far');
        });
        ratingInput.value = "0";
        
        // Скрываем сообщение об успехе через 5 секунд
        setTimeout(() => {
            successMessage.classList.add('d-none');
        }, 5000);
        
        // В реальном проекте здесь будет отправка данных
        console.log('Отзыв отправлен:', { name, email, rating, message });
    });
    
    // Изменение навигации при прокрутке
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(33, 37, 41, 0.98)';
            navbar.style.padding = '10px 0';
        } else {
            navbar.style.backgroundColor = 'rgba(33, 37, 41, 0.95)';
            navbar.style.padding = '15px 0';
        }
    });
    
    // Инициализация анимации для элементов на экране
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
    
    // Автоматическая прокрутка для демонстрации анимации
    setTimeout(() => {
        window.scrollTo({
            top: 50,
            behavior: 'smooth'
        });
    }, 1000);
});