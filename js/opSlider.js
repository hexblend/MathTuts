// Buttons
const nextSlideBtn = document.querySelector('.opSlider__slide--nextSlide');
const prevSlideBtn = document.querySelector('.opSlider__slide--previousSlide');
// Slides
const addition = document.getElementById('opSlider__aditionLink');
const substraction = document.getElementById('opSlider__substractionLink');
const multiplication = document.getElementById('opSlider__multiplicationLink');
const division = document.getElementById('opSlider__divisionLink');

nextSlideBtn.addEventListener('click', () => {
    if (addition.classList.contains('selected')) {
        addition.classList.remove('selected');
        substraction.classList.add('selected');
    } else if (substraction.classList.contains('selected')) {
        substraction.classList.remove('selected');
        multiplication.classList.add('selected')
    } else if (multiplication.classList.contains('selected')) {
        multiplication.classList.remove('selected');
        division.classList.add('selected');
    } else if (division.classList.contains('selected')) {
        division.classList.remove('selected');
        addition.classList.add('selected');
    }
});

prevSlideBtn.addEventListener('click', () => {
    if (addition.classList.contains('selected')) {
        addition.classList.remove('selected');
        division.classList.add('selected');
    } else if (substraction.classList.contains('selected')) {
        substraction.classList.remove('selected');
        addition.classList.add('selected')
    } else if (multiplication.classList.contains('selected')) {
        multiplication.classList.remove('selected');
        substraction.classList.add('selected');
    } else if (division.classList.contains('selected')) {
        division.classList.remove('selected');
        multiplication.classList.add('selected');
    }
});
