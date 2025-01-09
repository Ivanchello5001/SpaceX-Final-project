const menuLinks = document.querySelectorAll('.menu-container a');
const dropdownLinks = document.querySelectorAll('.dropdown-content a');
const sections = document.querySelectorAll('.section');
const fadeImgs = document.querySelectorAll('.fade-in');

// Плавная прокрутка для ссылок из основного меню
menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        
        // Проверка, является ли ссылка внешней (на другой файл)
        if (href.startsWith('index.html')) {
          window.location.href = href;
          return
        }
          
        const targetId = href;
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Переход по ссылкам выпадающего списка
dropdownLinks.forEach(link => {
    link.addEventListener('click', function(e) {
       
        const href = this.getAttribute('href');
        window.location.href = href
    });
});

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // 10% видимости для запуска анимации
};


const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            sectionObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});


const imgObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        imgObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  fadeImgs.forEach(img => {
    imgObserver.observe(img);
});


// Кнопка прокрутки наверх
let backToTopButton = document.getElementById("backToTopBtn");

window.addEventListener('scroll', function() {
  if (window.scrollY > 200) { // Показываем кнопку если прокрутка > 200px
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Плавная прокрутка
  });
});
