const questionList = [

    {
        question: "What is the capital of India?",
        answer: [
            { text: "New Delhi", correct: true },
            { text: "Tamilnadu", correct: false },
            { text: "Gujrat", correct: false },
            { text: "Madhya Pradesh", correct: false },

        ]
    },
    {
        question: "Which Everest is highest in the world?",
        answer: [
            { text: "Kangchenjunga", correct: false },
            { text: "Mount Everest", correct: true },
            { text: "Lhotse", correct: false },
            { text: "Makalu", correct: false },

        ]
    },
    {
        question: "Which river is the longest in the world?",
        answer: [
            { text: "Amazon", correct: false },
            { text: "Mississippi", correct: false },
            { text: "Nile", correct: true },
            { text: "Yangtze", correct: false },

        ]
    },
    {
        question: "For which of these disciplines Nobel Prize is awarded?",
        answer: [
            { text: "Physics, Chemistry", correct: false },
            { text: "Physiology", correct: false },
            { text: "Medicine", correct: false },
            { text: "All of the above", correct: true },

        ]
    },
    {
        question: "Which one is the hottest continent?",
        answer: [
            { text: "Australia", correct: false },
            { text: "North America", correct: false },
            { text: "Africa", correct: true },
            { text: "South Asia", correct: false },

        ]
    }



]

const questions = document.getElementById('questions')
const ansButton = document.getElementById('ans-button');
const nextBtn = document.getElementById('next-btn')

let currentQuesIndex = 0;
let score = 0;

function startQuiz() {
    currentQuesIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetQuestions();
    let currentQuestion = questionList[currentQuesIndex];
    let questionNo = currentQuesIndex + 1;
    questions.innerHTML = questionNo + ". " + currentQuestion.question

    currentQuestion.answer.forEach((ans) => {
        let Button = document.createElement('button');
        Button.innerHTML = ans.text;
        Button.classList.add('btn')
        ansButton.appendChild(Button)

        if (ans.correct) {
            Button.dataset.correct = ans.correct;
        }
        Button.addEventListener("click", selectAnswer);
    })
}

function resetQuestions() {
    nextBtn.style.display = "none";
    while (ansButton.firstChild) {
        ansButton.removeChild(ansButton.firstChild)
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(ansButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextBtn.style.display = "block"
}

function showScore() {
    resetQuestions();
    questions.innerHTML = `You scored ${score} out of ${questionList.length}!`;

    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block"
}

function handleNextButton() {
    currentQuesIndex++;
    if (currentQuesIndex < questionList.length) {
        showQuestion();
    } else {
        showScore();
    }
}
nextBtn.addEventListener("click", () => {
    if (currentQuesIndex < questionList.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz()

console.log(79, questionList)