// q1 = question 1
// q1a1 = question 1 answer 1
// q1ca = question 1 correct answer
// q1wa = question 1 wrong answer

const q1 = document.querySelector('.q1');
const q1a1 = document.querySelector('.q1a1');
const q1a2 = document.querySelector('.q1a2');
const q1a3 = document.querySelector('.q1a3');
const q1a4 = document.querySelector('.q1a4');
const q1a5 = document.querySelector('.q1a5');
const q1ca = document.querySelector('.q1ca');
const q1wa = document.querySelector('.q1wa');

const q2 = document.querySelector('.q2');
const q2a1 = document.querySelector('.q2a1');
const q2a2 = document.querySelector('.q2a2');
const q2a3 = document.querySelector('.q2a3');
const q2a4 = document.querySelector('.q2a4');
const q2a5 = document.querySelector('.q2a5');
const q2ca = document.querySelector('.q2ca');
const q2wa = document.querySelector('.q2wa');

const q3 = document.querySelector('.q3');
const q3a1 = document.querySelector('.q3a1');
const q3a2 = document.querySelector('.q3a2');
const q3a3 = document.querySelector('.q3a3');
const q3a4 = document.querySelector('.q3a4');
const q3a5 = document.querySelector('.q3a5');
const q3ca = document.querySelector('.q3ca');
const q3wa = document.querySelector('.q3wa');

const checkMark = document.querySelector('.questions__question--rightA');
const timesMark = document.querySelector('.questions__question--wrongA');

let currentQ = q1;


if (currentQ == q1) {
    q1a1.addEventListener('click', () => { wrongAnswer(q1ca, q1wa, q2) });
    q1a2.addEventListener('click', () => { wrongAnswer(q1ca, q1wa, q2) });
    q1a3.addEventListener('click', () => { wrongAnswer(q1ca, q1wa, q2) });
    q1a4.addEventListener('click', () => { wrongAnswer(q1ca, q1wa, q2) });
    q1a5.addEventListener('click', () => { rightAnswer(q1ca, q1wa, q2) });
} else if (currentQ == q2) {
    q2a1.addEventListener('click', () => { console.log('correct') });
}



function rightAnswer(qca, qwa, nextQ) {
    qca.classList.add('fadeAndSlide');
    qwa.style.display = 'none';
    currentQ.classList.remove('selectedQ');
    currentQ = nextQ;
    currentQ.classList.add('selectedQ');
    checkAnswers();
}

function wrongAnswer(qca, qwa, nextQ) {
    qwa.classList.add('fadeAndSlide');
    qca.style.display = 'none';
    currentQ.classList.remove('selectedQ');
    currentQ = nextQ;
    currentQ.classList.add('selectedQ');
    checkAnswers();
}