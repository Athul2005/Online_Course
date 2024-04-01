const quizData = [
    {
        question: "1.Which language is called mother of all programming?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "b",
    },
    {
        question: "2.Which is not a variable?",
        a: "employee_name",
        b: "empName",
        c: "Employee Name",
        d: "all of the above",
        correct: "c",
    },
    {
        question: "3.#include is called as?",
        a: "Main Function",
        b: "Processor directive",
        c: "Preprocessor directive",
        d: "File name",
        correct: "c",
    },
    {
        question: "4.Which loop is execute atleast once?",
        a: "for loop",
        b: "while loop",
        c: "do while loop",
        d: "none of the above",
        correct: "c",
    },
    {
        question: "5.Array index starting position?",
        a: "-1",
        b: "0",
        c: "1",
        d: "null",
        correct: "b",
    },
    {
        question: "6.if inside another if is called?",
        a: "inner if",
        b: "internal if",
        c: "nested if",
        d: "if-if",
        correct: "c",
    },
    {
        question: "7.What is the variable that holds the address?",
        a: "address variable",
        b: "add",
        c: "struct",
        d: "pointer",
        correct: "d",
    },
    {
        question: "8.How do you insert COMMENTS in C code?",
        a: "// This is comment",
        b: "* This is comment",
        c: "-- This is comment",
        d: "# This is comment",
        correct: "a",
    },
    {
        question: "9.How do you call a function in C?",
        a: "myFunction;",
        b: "(myFunction);",
        c: "myFunction();",
        d: "myFunction[];",
        correct: "c",
    },
    {
        question: "10.Which of the following are correct file opening modes in C?",
        a: "r",
        b: "rb",
        c: "w",
        d: "all of the above",
        correct: "d",
    },


];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            // Check the score and redirect accordingly
            if (score >= 7) {
                window.location.href = "quiz_pass"; // Redirect to high score page
            } else {
                window.location.href = "quiz_fail"; // Redirect to low score page
            }
        }
    }
});