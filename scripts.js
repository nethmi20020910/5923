// Carousel Logic
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Auto-play carousel
let carouselInterval = setInterval(nextSlide, 5000);

// Pause carousel on hover
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', () => clearInterval(carouselInterval));
carousel.addEventListener('mouseleave', () => carouselInterval = setInterval(nextSlide, 5000));

// Add navigation buttons for carousel
const carouselNav = document.createElement('div');
carouselNav.className = 'carousel-nav';
carousel.appendChild(carouselNav);

const prevButton = document.createElement('button');
prevButton.className = 'carousel-prev';
prevButton.innerHTML = '&#10094;';
prevButton.addEventListener('click', prevSlide);
carouselNav.appendChild(prevButton);

const nextButton = document.createElement('button');
nextButton.className = 'carousel-next';
nextButton.innerHTML = '&#10095;';
nextButton.addEventListener('click', nextSlide);
carouselNav.appendChild(nextButton);

// Popup Logic
const popupTriggers = document.querySelectorAll('.popup-trigger');
const popupCloseButtons = document.querySelectorAll('.popup-close');

popupTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const popupId = trigger.getAttribute('data-popup');
        const popup = document.getElementById(popupId);
        popup.classList.add('active');
    });
});

popupCloseButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popup = button.closest('.popup');
        popup.classList.remove('active');
    });
});

// Close popup when clicking outside
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup')) {
        e.target.classList.remove('active');
    }
});

// Smooth Scroll for Back to Top Button
const backToTopButton = document.querySelector('.back-to-top');
backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show/Hide Back to Top Button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

