const questions = [
    { 
        question: "xxxxxxxxxxxx", 
        answers: ["xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxx"], 
        correct:0, 
        message:[
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx"
        ]
    },
    { 
        question: "xxxxxxxxxxxx", 
        answers: ["xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxx"], 
        correct:0, 
        message:[
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx"
        ]
    },
    { 
        question: "xxxxxxxxxxxx", 
        answers: ["xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxx"], 
        correct:0,
        message:[
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx"
        ]
    },
    { 
        question: "xxxxxxxxxxxx", 
        answers: ["xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxx"], 
        correct:0,
        message:[
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx"
        ]
    },
    { 
        question: "xxxxxxxxxxxx", 
        answers: ["xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxx"], 
        correct:0,
        message:[
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx"
        ]
    },
    { 
        question: "xxxxxxxxxxxx", 
        answers: ["xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxx"], 
        correct:0, 
        message:[
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx"
        ]
    },
    { 
        question: "xxxxxxxxxxxx", 
        answers: ["xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxx"], 
        correct:0, 
        message:[
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx"
        ]
    },
    { 
        question: "xxxxxxxxxxxx", 
        answers: ["xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxx"], 
        correct:0,
        message:[
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx"
        ]
    },
    { 
        question: "xxxxxxxxxxxx", 
        answers: ["xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxx"], 
        correct:0,
        message:[
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx"
        ]
    },
    { 
        question: "xxxxxxxxxxxx", 
        answers: ["xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxx"], 
        correct:0,
        message:[
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx"
        ]
    },
    { 
        question: "xxxxxxxxxxxx", 
        answers: ["xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxx"], 
        correct:0, 
        message:[
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx"
        ]
    },
    { 
        question: "xxxxxxxxxxxx", 
        answers: ["xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxx"], 
        correct:0, 
        message:[
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx"
        ]
    },
    { 
        question: "xxxxxxxxxxxx", 
        answers: ["xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxx"], 
        correct:0,
        message:[
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx"
        ]
    },
    { 
        question: "xxxxxxxxxxxx", 
        answers: ["xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxx"], 
        correct:0,
        message:[
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx"
        ]
    },
    { 
        question: "xxxxxxxxxxxx", 
        answers: ["xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxx"], 
        correct:0,
        message:[
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx"
        ]
    },
    { 
        question: "xxxxxxxxxxxx", 
        answers: ["xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxx"], 
        correct:0, 
        message:[
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx"
        ]
    },
    { 
        question: "xxxxxxxxxxxx", 
        answers: ["xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxx"], 
        correct:0, 
        message:[
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx"
        ]
    },
    { 
        question: "xxxxxxxxxxxx", 
        answers: ["xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxx"], 
        correct:0,
        message:[
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx"
        ]
    },
    { 
        question: "xxxxxxxxxxxx", 
        answers: ["xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxx"], 
        correct:0,
        message:[
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx"
        ]
    },
    { 
        question: "xxxxxxxxxxxx", 
        answers: ["xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxx","xxxxxxxxxxxx"], 
        correct:0,
        message:[
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx",
            "xxxxxxxxxxxx"
        ]
    }
];

let currentQuestion = 0;
let score = 0;
let time = 0;
let timerInterval;

const questionEl = document.querySelector(".question");
const answersEl = document.querySelector(".answers");
const feedbackEl = document.querySelector(".feedback");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");
const questionNumberEl = document.getElementById("question-number");

function startTimer() {
    timerInterval = setInterval(() => {
        time++;
        timerEl.textContent = `Time: ${time}s`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function showQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    answersEl.innerHTML = "";
    feedbackEl.innerHTML = "";
    nextBtn.style.display = "none";

    questionNumberEl.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    scoreEl.textContent = `Score: ${score}/${questions.length}`;

    startTimer();

    q.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.textContent = answer;
        btn.className = "answers-button";
        btn.addEventListener("click", () => checkAnswer(index));
        answersEl.appendChild(btn);
    });
}

function checkAnswer(selectedIndex) {
    stopTimer();
    const allButtons = document.querySelectorAll(".answers .answers-button");
    allButtons.forEach(btn => btn.disabled = true);

    const q = questions[currentQuestion];
    if (selectedIndex === q.correct) score++;

    scoreEl.textContent = `Score: ${score}/${questions.length}`;

    // Display 4 bullet points
    feedbackEl.innerHTML = "<ul></ul>";
    const ul = feedbackEl.querySelector("ul");
    q.message.forEach(msg => {
        const li = document.createElement("li");
        li.textContent = msg;
        ul.appendChild(li);
    });

    nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) showQuestion();
    else {
        questionEl.textContent = `Quiz Finished! Final Score: ${score}/${questions.length}`;
        answersEl.innerHTML = "";
        feedbackEl.innerHTML = "";
        questionNumberEl.textContent = "";
        nextBtn.style.display = "none";
        stopTimer();
    }
});

// Start game
showQuestion();
