// Auto-update year
document.getElementById("year").textContent = new Date().getFullYear();

// ===========================
// v2.1 SCRIPT – Quiz Game
// ===========================
// Array of quiz questions. Each object represents a question with:
// 'question': The text of the question
// 'options': An array of possible answer choices
// 'answer': The index of the correct option in the 'options' array

// Array of quiz questions

// v2 COMMENT: Full set of quiz questions
// v2.1 CHANGE: Still same as v2, but allows more questions to be added if needed (pool system)
// Full pool of quiz questions
const fullQuestions = [
  // 1
  {
    question: "What is the capital of Canada?",
    options: ["Toronto", "Ottawa", "Ontario", "Montreal"],
    answer: 1,
  },
  // 2
  {
    question: "What does DNA stand for?",
    options: [
      "Deoxyribonucleic Acid",
      "Dynamic Network Access",
      "Dual Nucleotide Array",
      "Digital Number Adapter",
    ],
    answer: 0,
  },
  // 3
  {
    question: "How many bones are in the adult human body?",
    options: ["206", "205", "201", "208"],
    answer: 0,
  },
  // 4
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Oxygen", "Osmium", "Silver"],
    answer: 1,
  },
  // 5
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Diamond", "Quartz", "Marble", "Obsidian"],
    answer: 0,
  },
  // 6
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Claude Monet",
    ],
    answer: 1,
  },
  // 7
  {
    question: "What is the longest river in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    answer: 1,
  },
  // 8
  {
    question: "Which organ purifies blood in the human body?",
    options: ["Heart", "Liver", "Kidneys", "Lungs"],
    answer: 2,
  },
  // 9
  {
    question: "What does HTTP stand for?",
    options: [
      "HyperText Transfer Protocol",
      "HighText Transfer Protocol",
      "Hyperlink Transfer Program",
      "Hyperlink Text Transfer Program",
    ],
    answer: 0,
  },
  // 10
  {
    question: "Which planet has the most moons?",
    options: ["Earth", "Mars", "Saturn", "Venus"],
    answer: 2,
  },
  // 11
  {
    question: "What is the chemical formula for table salt?",
    options: ["NaCl", "KCl", "H2O", "CO2"],
    answer: 0,
  },
  // 12
  {
    question: "Who is known as the 'Father of Computers'?",
    options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
    answer: 1,
  },
  // 13
  {
    question: "In which year did World War II end?",
    options: ["1942", "1945", "1948", "1950"],
    answer: 1,
  },
  // 14
  {
    question: "Which gas makes up most of Earth's atmosphere?",
    options: ["Oxygen", "Nitrogen", "Argon", "Carbon Dioxide"],
    answer: 1,
  },
  // 15
  {
    question: "What is the largest mammal in the world?",
    options: ["African Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
    answer: 1,
  },
  // 16
  {
    question: "What is the term for animals that only eat plants?",
    options: ["Carnivores", "Herbivores", "Omnivores", "Detritivores"],
    answer: 1,
  },
  // 17
  {
    question: "Which device measures atmospheric pressure?",
    options: ["Thermometer", "Barometer", "Hygrometer", "Altimeter"],
    answer: 1,
  },
  // 18
  {
    question: "What is a group of lions called?",
    options: ["Pack", "Pride", "Herd", "Flock"],
    answer: 1,
  },
  // 19
  {
    question: "Which planet is known for its rings?",
    options: ["Mars", "Jupiter", "Saturn", "Uranus"],
    answer: 2,
  },
  // 20
  {
    question: "Who wrote '1984'?",
    options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "J.G. Ballard"],
    answer: 1,
  },
  // 21
  {
    question: "What is the chemical symbol for iron?",
    options: ["Ir", "I", "Fe", "Fr"],
    answer: 2,
  },
  // 22
  {
    question: "What is the primary ingredient in sushi?",
    options: ["Bread", "Rice", "Pasta", "Corn"],
    answer: 1,
  },
  // 23
  {
    question: "Which continent is the Sahara Desert located on?",
    options: ["Asia", "Africa", "Australia", "South America"],
    answer: 1,
  },
  // 24
  {
    question: "What is the main language spoken in Brazil?",
    options: ["Spanish", "Portuguese", "English", "French"],
    answer: 1,
  },
  // 25
  {
    question: "Which planet is closest to the Sun?",
    options: ["Venus", "Earth", "Mercury", "Mars"],
    answer: 2,
  },
  // 26
  {
    question: "In which country are the Pyramids of Giza found?",
    options: ["Mexico", "Iraq", "Egypt", "Peru"],
    answer: 2,
  },
  // 27
  {
    question: "What is the capital of Japan?",
    options: ["Kyoto", "Osaka", "Tokyo", "Nagoya"],
    answer: 2,
  },
  // 28
  {
    question: "What gas do plants use for photosynthesis?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Chlorine"],
    answer: 1,
  },
  // 29
  {
    question: "Which metal is liquid at room temperature?",
    options: ["Iron", "Mercury", "Gold", "Silver"],
    answer: 1,
  },
  // 30
  {
    question: "Who painted the Starry Night?",
    options: [
      "Pablo Picasso",
      "Vincent van Gogh",
      "Claude Monet",
      "Salvador Dali",
    ],
    answer: 1,
  },
  // 31
  {
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    answer: 2,
  },
  // 32
  {
    question: "What is the boiling point of water at sea level?",
    options: ["90°C", "100°C", "110°C", "120°C"],
    answer: 1,
  },
  // 33
  {
    question: "Which is the largest internal organ in the human body?",
    options: ["Heart", "Kidney", "Liver", "Lung"],
    answer: 2,
  },
  // 34
  {
    question: "Who invented the telephone?",
    options: [
      "Thomas Edison",
      "Alexander Graham Bell",
      "Nikola Tesla",
      "Guglielmo Marconi",
    ],
    answer: 1,
  },
  // 35
  {
    question: "Which ocean is the deepest in the world?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    answer: 3,
  },
  // 36
  {
    question: "What is the smallest country in the world by area?",
    options: ["Monaco", "Vatican City", "Nauru", "San Marino"],
    answer: 1,
  },
  // 37
  {
    question: "Which planet is known as the Morning Star?",
    options: ["Mars", "Venus", "Jupiter", "Mercury"],
    answer: 1,
  },
  // 38
  {
    question: "What is the main component of the sun?",
    options: ["Helium", "Oxygen", "Hydrogen", "Carbon"],
    answer: 2,
  },
  // 39
  {
    question: "Which is the largest land animal?",
    options: ["Hippopotamus", "Giraffe", "African Elephant", "Rhino"],
    answer: 2,
  },
  // 40
  {
    question: "What is the common name for sodium chloride?",
    options: ["Sugar", "Salt", "Baking Soda", "Vinegar"],
    answer: 1,
  },
  // 41
  {
    question: "Which gas is primarily responsible for the greenhouse effect?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: 1,
  },
  // 42
  {
    question: "Which is the largest planet in our solar system?",
    options: ["Jupiter", "Earth", "Saturn", "Neptune"],
    answer: 0,
  },
  // 43
  {
    question: "Who developed the theory of relativity?",
    options: [
      "Isaac Newton",
      "Galileo Galilei",
      "Nikola Tesla",
      "Albert Einstein",
    ],
    answer: 3,
  },
  // 44
  {
    question: "What is the chemical symbol for gold?",
    options: ["Gd", "Au", "Ag", "Go"],
    answer: 1,
  },
  // 45
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Thailand", "Japan", "Vietnam"],
    answer: 2,
  },
  // 46
  {
    question: "Which organ pumps blood throughout the human body?",
    options: ["Liver", "Brain", "Heart", "Lungs"],
    answer: 2,
  },
  // 47
  {
    question: "What is the capital of France?",
    options: ["Rome", "Madrid", "Berlin", "Paris"],
    answer: 3,
  },
  // 48
  {
    question: "Which is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    answer: 2,
  },
  // 49
  {
    question: "What is the freezing point of water in Celsius?",
    options: ["0°C", "32°C", "100°C", "-1°C"],
    answer: 0,
  },
  // 50
  {
    question: "Which ocean is the largest?",
    options: ["Atlantic", "Pacific", "Indian", "Arctic"],
    answer: 1,
  },
  // 51
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Mercury"],
    answer: 0,
  },
  // 52
  {
    question: "What is H2O commonly known as?",
    options: ["Salt", "Oxygen", "Hydrogen", "Water"],
    answer: 3,
  },
  // 53
  {
    question: "Which continent has the most countries?",
    options: ["Asia", "Africa", "Europe", "South America"],
    answer: 1,
  },
  // 54
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
  // 55
  {
    question: "What is the capital city of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answer: 2,
  },
  // 56
  {
    question: "Which is the fastest land animal?",
    options: ["Cheetah", "Leopard", "Lion", "Horse"],
    answer: 0,
  },
  // 57
  {
    question: "What is 5 x 6?",
    options: ["20", "30", "35", "25"],
    answer: 1,
  },
  // 58
  {
    question: "Which gas do humans inhale to survive?",
    options: ["Carbon Dioxide", "Nitrogen", "Oxygen", "Helium"],
    answer: 2,
  },
  // 59
  {
    question: "Which country invented pizza?",
    options: ["France", "USA", "Greece", "Italy"],
    answer: 3,
  },
  // 60
  {
    question: "Which instrument has keys, pedals, and strings?",
    options: ["Guitar", "Piano", "Violin", "Flute"],
    answer: 1,
  },
];

// ===========================
// VARIABLES
// ===========================
// v2 COMMENT: Basic quiz state variables
// v2.1 CHANGE: Added highestScore + userAnswers array to track progress
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let highestScore = 0; // v2.1: store best score
let userAnswers = []; // v2.1: track user selections

// ===========================
// DOM ELEMENTS
// ===========================
// v2 COMMENT: Grab all elements for dynamic updates
// v2.1 CHANGE: Added finishBtn, endBtn, tryAgainBtn for more control
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const progressEl = document.getElementById("progress");
const currentScoreEl = document.getElementById("current-score");
const highestScoreEl = document.getElementById("highest-score");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const finishBtn = document.getElementById("finish-btn"); // v2.1
const endBtn = document.getElementById("end-btn"); // v2.1
const tryAgainBtn = document.getElementById("try-again-btn"); // v2.1

// Screens
const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("start-btn");
const quizScreen = document.getElementById("quiz-screen");
const endScreen = document.getElementById("end-screen");
const finalScoreEl = document.getElementById("final-score");
const endMessageEl = document.getElementById("end-message");
const retryBtn = document.getElementById("retry-btn");

// ===========================
// HELPERS
// ===========================
// v2 COMMENT: Utility to shuffle questions
// v2.1 CHANGE: Used to create random 20-question pool
function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ===========================
// LOAD QUESTION
// ===========================
// v2 COMMENT: Render current question & options
// v2.1 CHANGE: Checks userAnswers[] so navigation works (prev/next with saved answers)
function loadQuestion() {
  const current = questions[currentQuestionIndex];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";
  feedbackEl.textContent = "";

  // v2 COMMENT: Next button clickable always
  // v2.1 CHANGE: Maintains that, but now works with saved answers
  nextBtn.disabled = false;

  current.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.className =
      "w-full px-4 py-2 text-left border border-gray-700 rounded-lg hover:bg-gray-800 transition";

    // v2.1 CHANGE: If already answered, highlight & disable
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

  // v2 COMMENT: Show Finish only on last question
  // v2.1 CHANGE: Added finishBtn for last question + endBtn to quit anytime
  if (currentQuestionIndex === questions.length - 1) {
    nextBtn.classList.add("hidden");
    finishBtn.classList.remove("hidden");
  } else {
    nextBtn.classList.remove("hidden");
    finishBtn.classList.add("hidden");
  }
}

// ===========================
// CHECK ANSWER
// ===========================
// v2 COMMENT: Marks answer, updates score
// v2.1 CHANGE: Also stores in userAnswers[] for navigation
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
}

// ===========================
// NAVIGATION
// ===========================
// v2 COMMENT: Next/Prev question movement
// v2.1 CHANGE: Works with saved userAnswers[]
nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
  }
});

// ===========================
// END QUIZ
// ===========================
// v2 COMMENT: Shows end screen
// v2.1 CHANGE: Added grade message & highest score tracker
function endQuiz() {
  quizScreen.classList.add("hidden");
  endScreen.classList.remove("hidden");

  finalScoreEl.textContent = score;
  endMessageEl.textContent =
    score >= 15 ? "🎉 Excellent job!" : "❌ Try again!";

  if (score > highestScore) {
    highestScore = score;
    highestScoreEl.textContent = highestScore;
  }
}

// ===========================
// START / RETRY
// ===========================
// v2 COMMENT: Starts quiz
// v2.1 CHANGE: Random 20-question pool using shuffle
function startGame() {
  questions = shuffleArray(fullQuestions).slice(0, 20); // v2.1: shuffle pool
  userAnswers = new Array(questions.length).fill(null);
  currentQuestionIndex = 0;
  score = 0;
  currentScoreEl.textContent = score;

  startScreen.classList.add("hidden");
  endScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  loadQuestion();
}

startBtn.addEventListener("click", startGame);
retryBtn.addEventListener("click", startGame);
tryAgainBtn.addEventListener("click", startGame);

// ===========================
// FINISH & END GAME BUTTONS
// ===========================
// v2.1 CHANGE: Added Finish + End buttons with confirm dialogs
finishBtn.addEventListener("click", () => {
  if (confirm("Are you sure you want to submit?")) {
    endQuiz();
  }
});

endBtn.addEventListener("click", () => {
  if (confirm("Do you want to end?")) {
    endQuiz();
  }
});
