document.addEventListener('DOMContentLoaded', function() {
    let slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
    let prevButton = document.querySelector('.prev');
    let nextButton = document.querySelector('.next');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Automatic sliding
    setInterval(nextSlide, 50000);
});


document.addEventListener('scroll', function() {
    var menu = document.querySelector('.menu');
    if (window.scrollY > 50) { // Ajusta el valor según necesites
        menu.style.backgroundColor = '#333'; // Cambia el color de fondo
        menu.style.color = '#fff'; // Cambia el color del texto si es necesario
    } else {
        menu.style.backgroundColor = '#f8f8f8'; // Color original del fondo
        menu.style.color = '#4d3d34'; // Color original del texto
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    let currentSectionIndex = 0;

    function scrollToSection(index) {
        sections[index].scrollIntoView({
            behavior: 'smooth'
        });
    }

    window.addEventListener('wheel', function(event) {
        if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
            // Scrolling down
            currentSectionIndex++;
            scrollToSection(currentSectionIndex);
        } else if (event.deltaY < 0 && currentSectionIndex > 0) {
            // Scrolling up
            currentSectionIndex--;
            scrollToSection(currentSectionIndex);
        }
    });

    // Optional: Update currentSectionIndex based on current scroll position on page load/reload
    function updateCurrentSectionIndex() {
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                currentSectionIndex = index;
            }
        });
    }

    window.addEventListener('scroll', updateCurrentSectionIndex);
    updateCurrentSectionIndex();
});


