//slider
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

function showSlide(index) {
    const slidesContainer = document.querySelector('.slides');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

showSlide(currentIndex);


//buttom
function openNewPageHulk() {
    window.open('person/hulks.html', '_blank');
}
function openNewPageAmerica() {
    window.open('person/americas.html', '_blank');
}
function openNewPageSpider() {
    window.open('person/spiders.html', '_blank');
}
function openNewPageIron() {
    window.open('person/irons.html', '_blank');
}
