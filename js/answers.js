// Set answers on congratsPage
let rightAnswers = localStorage.getItem('rightAnswers');
let wrongAnswers = localStorage.getItem('wrongAnswers');

// Check if the user got to the page without completing the test
if (rightAnswers || wrongAnswers) {
    document.querySelector('.congratsPage__results--rights').innerHTML = rightAnswers;
    document.querySelector('.congratsPage__results--wrongs').innerHTML = wrongAnswers;
} else {
    document.querySelector('.congratsPage__results--rights').innerHTML = "Error";
    const pageTitles = document.querySelectorAll('.congratsPage__title');
    [].slice.call(pageTitles).forEach(title => {
        title.innerHTML = "Error!";
    })
    document.querySelector('.congratsPage__ghostBtn').innerHTML = "Go back"
}

// Fade out page contents on leave
document.querySelector('.congratsPage__ghostBtn').addEventListener('click', () => {
    document.querySelector('.congratsPage').classList.add('fadeOut');
});