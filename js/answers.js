let rightAnswers = localStorage.getItem('rightAnswers');
let wrongAnswers = localStorage.getItem('wrongAnswers');

if (rightAnswers) {
    document.querySelector('.congratsPage__results--rights').innerHTML = rightAnswers;
} else {
    document.querySelector('.congratsPage__results--rights').innerHTML = "Error";
}

if (wrongAnswers) {
    document.querySelector('.congratsPage__results--wrongs').innerHTML = wrongAnswers;
} else {
    document.querySelector('.congratsPage__results--wrongs').innerHTML = "Error";
}

// Fade out page contents on leave
document.querySelector('.congratsPage__ghostBtn').addEventListener('click', () => {
    document.querySelector('.congratsPage').classList.add('fadeOut');
});