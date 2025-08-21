// Array of quiz questions. Each object represents a question with:
// 'question': The text of the question
// 'options': An array of possible answer choices
// 'answer': The index of the correct option in the 'options' array

const questions = [
  {
    question: "Which gas is primarily responsible for the greenhouse effect?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: 1,
  },
  {
    question: "Which is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Saturn", "Neptune"],
    answer: 1,
  },
  {
    question: "Who developed the theory of relativity?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Galileo Galilei",
      "Nikola Tesla",
    ],
    answer: 1,
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Gd", "Au", "Ag", "Go"],
    answer: 1,
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "Thailand", "Vietnam"],
    answer: 1,
  },
  {
    question: "Which organ pumps blood throughout the human body?",
    options: ["Liver", "Heart", "Brain", "Lungs"],
    answer: 1,
  },
  {
    question: "What is the capital of France?",
    options: ["Rome", "Madrid", "Paris", "Berlin"],
    answer: 2,
  },
  {
    question: "Which is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    answer: 2,
  },
  {
    question: "What is the freezing point of water in Celsius?",
    options: ["0°C", "32°C", "100°C", "-1°C"],
    answer: 0,
  },
  {
    question: "Which ocean is the largest?",
    options: ["Atlantic", "Pacific", "Indian", "Arctic"],
    answer: 1,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Mercury"],
    answer: 1,
  },
  {
    question: "What is H2O commonly known as?",
    options: ["Salt", "Water", "Oxygen", "Hydrogen"],
    answer: 1,
  },
  {
    question: "Which continent has the most countries?",
    options: ["Asia", "Africa", "Europe", "South America"],
    answer: 1,
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Mark Twain",
      "Jane Austen",
    ],
    answer: 0,
  },
  {
    question: "What is the capital city of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answer: 2,
  },
  {
    question: "Which is the fastest land animal?",
    options: ["Cheetah", "Leopard", "Lion", "Horse"],
    answer: 0,
  },
  {
    question: "What is 5 x 6?",
    options: ["30", "20", "25", "35"],
    answer: 0,
  },
  {
    question: "Which gas do humans inhale to survive?",
    options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Helium"],
    answer: 1,
  },
  {
    question: "Which country invented pizza?",
    options: ["France", "Italy", "USA", "Greece"],
    answer: 1,
  },
  {
    question: "Which instrument has keys, pedals, and strings?",
    options: ["Guitar", "Piano", "Violin", "Flute"],
    answer: 1,
  },
];

// Track the current question index, Track the user's current score, Track the highest score in the quiz

let currentQuestionIndex = 0;
let score = 0;
let highestScore = 0;

// Track selected answers
let userAnswers = new Array(questions.length).fill(null);

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const progressEl = document.getElementById("progress");
const currentScoreEl = document.getElementById("current-score");
const highestScoreEl = document.getElementById("highest-score");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const tryAgainBtn = document.getElementById("try-again-btn");

// Load a question
function loadQuestion() {
  const current = questions[currentQuestionIndex];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";
  feedbackEl.textContent = "";

  // Disable Next button until answer is selected
  nextBtn.disabled = userAnswers[currentQuestionIndex] === null;

  current.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.className =
      "w-full px-4 py-2 text-left border border-gray-700 rounded-lg hover:bg-gray-800 transition";

    // If already answered, show correct/wrong and disable
    if (userAnswers[currentQuestionIndex] !== null) {
      btn.disabled = true;
      if (idx === current.answer) btn.classList.add("bg-green-700");
      if (idx === userAnswers[currentQuestionIndex] && idx !== current.answer)
        btn.classList.add("bg-red-700");
    } else {
      btn.onclick = () => checkAnswer(idx);
    }

    optionsEl.appendChild(btn);
  });

  // Show feedback if already answered
  if (userAnswers[currentQuestionIndex] !== null) {
    const selected = userAnswers[currentQuestionIndex];
    feedbackEl.textContent =
      selected === current.answer
        ? "✅ Correct!"
        : `❌ Wrong! Correct answer: ${current.options[current.answer]}`;
  }

  progressEl.textContent = `Question ${currentQuestionIndex + 1} of ${
    questions.length
  }`;
  prevBtn.disabled = currentQuestionIndex === 0;
}

// Check answer
function checkAnswer(selectedIndex) {
  const current = questions[currentQuestionIndex];
  userAnswers[currentQuestionIndex] = selectedIndex;

  if (selectedIndex === current.answer) {
    feedbackEl.textContent = "✅ Correct!";
    score++;
    currentScoreEl.textContent = score;
  } else {
    feedbackEl.textContent = `❌ Wrong! Correct answer: ${
      current.options[current.answer]
    }`;
  }

  // Disable all buttons and mark correct/incorrect
  Array.from(optionsEl.children).forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === current.answer) btn.classList.add("bg-green-700");
    else if (idx === selectedIndex) btn.classList.add("bg-red-700");
  });

  // Enable Next button now
  nextBtn.disabled = false;
}

// Navigation
nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  } else {
    endQuiz();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
  }
});

// End quiz
function endQuiz() {
  questionEl.textContent = `🎯 Quiz Finished! You scored ${score} out of ${questions.length}.`;
  optionsEl.innerHTML = "";
  feedbackEl.textContent = score >= 15 ? "🎉 Excellent job!" : "❌ Try again!";

  if (score > highestScore) {
    highestScore = score;
    highestScoreEl.textContent = highestScore;
  }

  prevBtn.classList.add("hidden");
  nextBtn.classList.add("hidden");
  tryAgainBtn.classList.remove("hidden");
}

// Try Again
tryAgainBtn.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  currentScoreEl.textContent = score;
  userAnswers = new Array(questions.length).fill(null);

  tryAgainBtn.classList.add("hidden");
  prevBtn.classList.remove("hidden");
  nextBtn.classList.remove("hidden");
  loadQuestion();
});

// Initial load
loadQuestion();
