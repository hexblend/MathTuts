let rightAnswers = 0;
let wrongAnswers = 0;

document.querySelector('.questionsPage__results--rights').innerHTML = rightAnswers;
document.querySelector('.questionsPage__results--wrongs').innerHTML = wrongAnswers;

let scrollUp = 0;

//  Questions Array
let questions = [
    {
        number: 1,
        name: "Question 1:",
        question: "35 + 30 = ?",
        answers: [60, 55, 75, 65, 55],
        correctAnswer: 65,
        selected: true
    },
    {
        number: 2,
        name: "Question 2:",
        question: "10 + 68 = ?",
        answers: [88, 78, 98, 58, 79],
        correctAnswer: 78,
        selected: false
    },
    {
        number: 3,
        name: "Question 3:",
        question: "44 + 55 = ?",
        answers: [89, 109, 99, 119, 100],
        correctAnswer: 99,
        selected: false
    },
    {
        number: 4,
        name: "Question 4:",
        question: "24 + 35 = ?",
        answers: [59, 49, 50, 60, 69],
        correctAnswer: 59,
        selected: false
    },
    {
        number: 5,
        name: "Question 5:",
        question: "55 + 57 = ?",
        answers: [112, 122, 132, 142, 152],
        correctAnswer: 122,
        selected: false
    }
];

const questionsWrapper = document.querySelector('.questions');

// Ghost "Finish the test" Button
let ghost_btn = document.createElement('a');
ghost_btn.classList.add('questionsPage__ghostBtn');
ghost_btn.classList.add('inactiveLink');
ghost_btn.href = "./congratulations.html";
ghost_btn.innerText = "Finish the test";

function addQuestions() {
    // Create all questions dynamically
    questions.forEach((question, index) => {
        let question_div = document.createElement('div');
        question_div.classList.add('questions__question');
        if (question.selected) {
            question_div.classList.add('selectedQ');
        }

        let question_number_p = document.createElement('p');
        question_number_p.classList.add('questions__question--number');
        question_number_p.innerText = question.name;

        let question_question_p = document.createElement('p');
        question_question_p.classList.add('questions__question--question');
        question_question_p.innerText = question.question;

        let question_answers_div = document.createElement('div');
        question_answers_div.classList.add('questions__question--answers');

        let answer1_btn = document.createElement('button');
        answer1_btn.innerText = question.answers[0];
        if (!question.selected) {
            answer1_btn.disabled = true;
            answer1_btn.style.cursor = "inherit";
        }

        let answer2_btn = document.createElement('button');
        answer2_btn.innerText = questions[0].answers[1];
        if (!question.selected) {
            answer2_btn.disabled = true;
            answer2_btn.style.cursor = "inherit";
        }

        let answer3_btn = document.createElement('button');
        answer3_btn.innerText = question.answers[2];
        if (!question.selected) {
            answer3_btn.disabled = true;
            answer3_btn.style.cursor = "inherit";
        }

        let answer4_btn = document.createElement('button');
        answer4_btn.innerText = question.answers[3];
        if (!question.selected) {
            answer4_btn.disabled = true;
            answer4_btn.style.cursor = "inherit";
        }

        let answer5_btn = document.createElement('button');
        answer5_btn.innerText = question.answers[4];
        if (!question.selected) {
            answer5_btn.disabled = true;
            answer5_btn.style.cursor = "inherit";
        }

        questionsWrapper.appendChild(question_div);
        question_div.appendChild(question_number_p);
        question_div.appendChild(question_question_p);
        question_div.appendChild(question_answers_div);
        question_answers_div.appendChild(answer1_btn);
        question_answers_div.appendChild(answer2_btn);
        question_answers_div.appendChild(answer3_btn);
        question_answers_div.appendChild(answer4_btn);
        question_answers_div.appendChild(answer5_btn);
        questionsWrapper.appendChild(ghost_btn);

        // Make ending button clickable when test is finished
        if (rightAnswers + wrongAnswers == questions.length) {
            ghost_btn.classList.remove('inactiveLink');
        }

        // Helper functions
        function updateQuestions() {
            scrollUp -= 230;
            questionsWrapper.style.transform = "translateY(" + scrollUp + "px)";
            questionsWrapper.innerHTML = "";
            addQuestions();
        }
        function nextQuestion() {
            question.selected = false;
            if (index < questions.length - 1) {
                questions[index + 1].selected = true;
            }
        }
        function updateCounter(typeOfAnswer) {
            if (typeOfAnswer == 'rightAnswers') {
                rightAnswers++;
                document.querySelector('.questionsPage__results--rights').innerHTML = rightAnswers;
            }
            if (typeOfAnswer == 'wrongAnswers') {
                wrongAnswers++;
                document.querySelector('.questionsPage__results--wrongs').innerHTML = wrongAnswers;
                document.querySelector('.questionsPage__wrongAnswerText').classList.add('answerAnimation');
            }
        }

        function showAnimation(typeOfAnswer) {
            if (typeOfAnswer == 'rightAnswer') {
                let rightAnswerAnimation = document.querySelector('.questionsPage__rightAnswerText');
                if (rightAnswerAnimation.classList.contains('answerAnimation')) {
                    rightAnswerAnimation.classList.remove('answerAnimation');
                    setInterval(() => {
                        rightAnswerAnimation.classList.add('answerAnimation');
                    }, 10);
                } else {
                    rightAnswerAnimation.classList.add('answerAnimation');
                }
            }
            if (typeOfAnswer == 'wrongAnswer') {
                let wrongAnswerAnimation = document.querySelector('.questionsPage__wrongAnswerText');
                if (wrongAnswerAnimation.classList.contains('answerAnimation')) {
                    wrongAnswerAnimation.classList.remove('answerAnimation');
                    setInterval(() => {
                        wrongAnswerAnimation.classList.add('answerAnimation');
                    }, 10);
                } else {
                    wrongAnswerAnimation.classList.add('answerAnimation');
                }
            }
        }

        // The logic behind answers
        function checkAnswer(button) {
            if (button.innerText == question.correctAnswer) {
                updateCounter('rightAnswers');
                showAnimation('rightAnswer');
                nextQuestion();
                updateQuestions();
            } else {
                updateCounter('wrongAnswers');
                showAnimation('wrongAnswer');
                nextQuestion();
                updateQuestions();
            }
        }

        if (question.selected) {
            answer1_btn.addEventListener('click', () => { checkAnswer(answer1_btn) });
            answer2_btn.addEventListener('click', () => { checkAnswer(answer2_btn) });
            answer3_btn.addEventListener('click', () => { checkAnswer(answer3_btn) });
            answer4_btn.addEventListener('click', () => { checkAnswer(answer4_btn) });
            answer5_btn.addEventListener('click', () => { checkAnswer(answer5_btn) });
        }

        // Save Right/Wrong Answers to localStorage
        localStorage.setItem('rightAnswers', rightAnswers);
        localStorage.setItem('wrongAnswers', wrongAnswers);
    });
}
addQuestions();

// Fade out page content when redirect
ghost_btn.addEventListener('click', () => { document.querySelector('.questionsPage').classList.add('fadeOut') });







