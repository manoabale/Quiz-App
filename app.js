const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    answer: 1
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: 1
  },
  {
    question: "Who invented the telephone?",
    options: ["Albert Einstein", "Alexander Graham Bell", "Newton", "Tesla"],
    answer: 1
  }
];

let current = 0;
let score = 0;

const questionText = document.getElementById("question");
const optionsBox = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultBox = document.getElementById("resultBox");
const quizBox = document.getElementById("quizBox");
const scoreText = document.getElementById("scoreText");
const restartBtn = document.getElementById("restartBtn");

function loadQuestion() {
  const q = questions[current];
  questionText.textContent = q.question;

  optionsBox.innerHTML = "";
  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => selectOption(index);
    optionsBox.appendChild(btn);
  });
}

function selectOption(index) {
  if (index === questions[current].answer) {
    score++;
  }
  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  current++;
  nextBtn.style.display = "none";

  if (current < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  quizBox.style.display = "none";
  resultBox.style.display = "block";
  scoreText.textContent = `${score} / ${questions.length}`;
}

restartBtn.addEventListener("click", () => {
  current = 0;
  score = 0;
  quizBox.style.display = "block";
  resultBox.style.display = "none";
  loadQuestion();
});

loadQuestion();
