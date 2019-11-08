// Operation Slider 
// Buttons
const nextSlideBtn = document.querySelector('.opSlider__slide--nextSlide');
const prevSlideBtn = document.querySelector('.opSlider__slide--previousSlide');

// Slides
const addition = document.getElementById('opSlider__aditionLink');
const substraction = document.getElementById('opSlider__substractionLink');
const multiplication = document.getElementById('opSlider__multiplicationLink');
const division = document.getElementById('opSlider__divisionLink');

// Next Slide
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

// Prev Slide
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

// Fade out page content when redirect
addition.addEventListener('click', () => { document.querySelector('.homePage').classList.add('fadeOut') });
substraction.addEventListener('click', () => { document.querySelector('.homePage').classList.add('fadeOut') });
multiplication.addEventListener('click', () => { document.querySelector('.homePage').classList.add('fadeOut') });
division.addEventListener('click', () => { document.querySelector('.homePage').classList.add('fadeOut') });
