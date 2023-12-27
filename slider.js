let currentIndex = 0;
let playing = true;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    const translateValue = -currentIndex * 100 + '%';
    document.querySelector('.slider').style.transform = 'translateX(' + translateValue + ')';
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function togglePlayPause() {
    playing = !playing;
    const playPauseBtn = document.querySelector('.play-pause-btn');
    playPauseBtn.textContent = playing ? 'Pause' : 'Play';

    if (playing) {
        startAutoPlay();
    } else {
        stopAutoPlay();
    }
}

function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 3000); // Cambiar la imagen cada 3 segundos
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

function goToSlide(index) {
    showSlide(index);
}

document.addEventListener('DOMContentLoaded', () => {
    startAutoPlay();
});
