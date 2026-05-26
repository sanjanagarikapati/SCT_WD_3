/* ==========================================================================
   SkillCraft Quiz - Application State & Logic
   ========================================================================== */

// 1. Question Bank Database
const QUESTION_BANK = {
  // --- Web Development ---
  "web-dev": {
    easy: [
      {
        id: "wd-e-1",
        type: "single",
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "High Tech Modern Language",
          "Hyperlink and Text Management Language",
          "Home Tool Markup Language"
        ],
        correct: 0,
        explanation: "HTML stands for Hyper Text Markup Language. It is the standard markup language used to create web pages."
      },
      {
        id: "wd-e-2",
        type: "tf",
        question: "CSS is used to define the style and layout of a web page.",
        options: ["True", "False"],
        correct: true,
        explanation: "True! Cascading Style Sheets (CSS) describes how HTML elements are to be displayed on screen, paper, or in other media."
      },
      {
        id: "wd-e-3",
        type: "fib",
        question: "Which HTML element is used to insert a line break? (Type the tag name, e.g. <p> or br)",
        correct: "br",
        explanation: "The <br> tag is used to insert a line break in an HTML document. It is an empty element, meaning it does not need a closing tag."
      },
      {
        id: "wd-e-4",
        type: "single",
        question: "Which HTML tag is used to link an external JavaScript file?",
        options: ["<link>", "<script>", "<js>", "<style>"],
        correct: 1,
        explanation: "The <script> tag is used to embed or reference executable scripts, such as JavaScript files using the 'src' attribute."
      },
      {
        id: "wd-e-5",
        type: "multi",
        question: "Which of the following are valid CSS styling values? (Select ALL that apply)",
        options: ["16px", "2rem", "bold-font", "rgb(255, 0, 0)"],
        correct: [0, 1, 3],
        explanation: "px (pixels), rem (root em), and rgb() are standard units and functions in CSS. 'bold-font' is invalid CSS (use 'font-weight: bold' instead)."
      }
    ],
    medium: [
      {
        id: "wd-m-1",
        type: "single",
        question: "Which array method adds one or more elements to the end of an array and returns its new length?",
        options: ["pop()", "shift()", "push()", "unshift()"],
        correct: 2,
        explanation: "push() adds elements to the end of an array. pop() removes from the end, shift() removes from the start, and unshift() adds to the start."
      },
      {
        id: "wd-m-2",
        type: "multi",
        question: "Which of the following are JavaScript primitives? (Select ALL that apply)",
        options: ["String", "Object", "Boolean", "Symbol"],
        correct: [0, 2, 3],
        explanation: "JavaScript primitives include: String, Number, Boolean, BigInt, Symbol, Undefined, and Null. Objects are structural types, not primitives."
      },
      {
        id: "wd-m-3",
        type: "fib",
        question: "Which CSS property controls the spacing between grid items? (Type property name)",
        correct: "gap",
        explanation: "The 'gap' (previously grid-gap) property defines the size of the gap between grid rows and columns."
      },
      {
        id: "wd-m-4",
        type: "tf",
        question: "In JavaScript, 'const' variables cannot have their property contents mutated.",
        options: ["True", "False"],
        correct: false,
        explanation: "False! While a variables assigned with 'const' cannot be reassigned, if the value is an object or array, its properties or elements can still be mutated."
      },
      {
        id: "wd-m-5",
        type: "single",
        question: "What is the correct way to write a conditional in JavaScript?",
        options: ["if i = 5 then", "if i == 5 then", "if (i == 5)", "if i = 5"],
        correct: 2,
        explanation: "In JavaScript, conditional structures wrap their boolean expressions in parentheses, as in: if (i == 5)."
      }
    ],
    hard: [
      {
        id: "wd-h-1",
        type: "single",
        question: "What is the correct order of events during the JavaScript event propagation phases?",
        options: [
          "Targeting, Bubbling, Capturing",
          "Capturing, Targeting, Bubbling",
          "Bubbling, Capturing, Targeting",
          "Capturing, Bubbling, Targeting"
        ],
        correct: 1,
        explanation: "Event propagation occurs in three phases: 1) Capturing phase (travels down to target), 2) Target phase (reaches the element), and 3) Bubbling phase (travels back up)."
      },
      {
        id: "wd-h-2",
        type: "fib",
        question: "What keyword is used to create a function that runs asynchronously and returns a Promise implicitly?",
        correct: "async",
        explanation: "The 'async' keyword declares an asynchronous function, allowing you to use 'await' inside it to block execution synchronously until Promises resolve."
      },
      {
        id: "wd-h-3",
        type: "multi",
        question: "Which of the following operations trigger CSS layout recalculation (Reflow)? (Select ALL that apply)",
        options: [
          "Changing font-size",
          "Changing transform scale",
          "Retrieving offsetWidth",
          "Changing color"
        ],
        correct: [0, 2],
        explanation: "Modifying layout properties (like font-size) or querying geometry (like offsetWidth) forces the browser to calculate layout positions (Reflow). Transform and color changes only cause repaint or compositing."
      },
      {
        id: "wd-h-4",
        type: "tf",
        question: "Closures allow a nested function to access variables from its outer scope even after the outer function has returned.",
        options: ["True", "False"],
        correct: true,
        explanation: "True! A closure is the combination of a function bundled together with references to its surrounding state (lexical environment), letting it retain scope access."
      },
      {
        id: "wd-h-5",
        type: "single",
        question: "Which of the following is true about JavaScript's event loop queue execution order?",
        options: [
          "Microtasks execute before Macrotasks",
          "Macrotasks execute before Microtasks",
          "They are run concurrently in separate threads",
          "Microtasks are executed only when the stack is empty, after rendering"
        ],
        correct: 0,
        explanation: "At the end of each task loop iteration, the event loop empties the entire Microtask queue (e.g. Promises) before moving on to trigger the next Macrotask (e.g. setTimeout)."
      }
    ]
  },

  // --- Science & Space ---
  "science": {
    easy: [
      {
        id: "sci-e-1",
        type: "single",
        question: "Which planet in our solar system is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correct: 1,
        explanation: "Mars is called the Red Planet because iron minerals in its soil oxidize (rust), causing the atmosphere and surface to look red."
      },
      {
        id: "sci-e-2",
        type: "tf",
        question: "The Sun is a star, not a planet.",
        options: ["True", "False"],
        correct: true,
        explanation: "True! The Sun is a yellow dwarf star at the center of our solar system that produces energy through nuclear fusion."
      },
      {
        id: "sci-e-3",
        type: "fib",
        question: "What is the chemical formula for pure water? (e.g. CO2)",
        correct: "H2O",
        explanation: "Water consists of two hydrogen atoms bonded to one oxygen atom, giving it the molecular formula H2O."
      },
      {
        id: "sci-e-4",
        type: "multi",
        question: "Which of the following are primary states of matter commonly found on Earth? (Select ALL that apply)",
        options: ["Solid", "Liquid", "Gas", "Dark Matter"],
        correct: [0, 1, 2],
        explanation: "Solid, liquid, and gas are the three classic states of matter. Dark matter is a hypothetical form of matter that does not interact with light."
      },
      {
        id: "sci-e-5",
        type: "single",
        question: "How long does it take for light from the Sun to reach Earth?",
        options: ["8 seconds", "8 minutes", "8 hours", "8 days"],
        correct: 1,
        explanation: "Light travels at 299,792 km/s. Since the Sun is about 150 million km away, its light takes roughly 8 minutes and 20 seconds to reach Earth."
      }
    ],
    medium: [
      {
        id: "sci-m-1",
        type: "single",
        question: "What is the name of the force that holds planets in their orbits around the Sun?",
        options: ["Friction", "Electromagnetism", "Gravity", "Centrifugal force"],
        correct: 2,
        explanation: "Gravity is the attractive force between objects with mass. The Sun's gravitational pull keeps the planets in orbit."
      },
      {
        id: "sci-m-2",
        type: "multi",
        question: "Which of the following elements are noble gases? (Select ALL that apply)",
        options: ["Helium", "Oxygen", "Neon", "Argon"],
        correct: [0, 2, 3],
        explanation: "Helium, Neon, and Argon are inert elements belonging to Group 18 of the periodic table, known as Noble Gases. Oxygen is a highly reactive gas from Group 16."
      },
      {
        id: "sci-m-3",
        type: "fib",
        question: "What is the name of the process by which green plants make their food using sunlight?",
        correct: "photosynthesis",
        explanation: "Photosynthesis is the process where plants convert light energy, carbon dioxide, and water into chemical energy (glucose) and oxygen."
      },
      {
        id: "sci-m-4",
        type: "tf",
        question: "Sound travels faster in water than it does in air.",
        options: ["True", "False"],
        correct: true,
        explanation: "True! Sound travels about 4.3 times faster in water because water is denser than air, allowing vibration waves to propagate quicker."
      },
      {
        id: "sci-m-5",
        type: "single",
        question: "Which gas makes up the largest percentage of Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
        correct: 2,
        explanation: "Earth's atmosphere is composed of approximately 78% Nitrogen, 21% Oxygen, and small amounts of argon, carbon dioxide, and other gases."
      }
    ],
    hard: [
      {
        id: "sci-h-1",
        type: "single",
        question: "What is the boundary surrounding a black hole beyond which nothing, not even light, can escape?",
        options: ["Singularity", "Accretion Disk", "Event Horizon", "Schwarzschild Limit"],
        correct: 2,
        explanation: "The Event Horizon is the theoretical 'point of no return' surrounding a black hole where gravitational attraction is so strong that escape speed exceeds the speed of light."
      },
      {
        id: "sci-h-2",
        type: "fib",
        question: "What subatomic particle carries a negative charge and resides outside the atomic nucleus?",
        correct: "electron",
        explanation: "Electrons are stable, negatively charged elementary particles that orbit the atomic nucleus in shells."
      },
      {
        id: "sci-h-3",
        type: "multi",
        question: "Which of the following are consequences of Einstein's Theory of Special Relativity? (Select ALL that apply)",
        options: ["Time Dilation", "Length Contraction", "Gravitational Lensing", "Mass-Energy Equivalence"],
        correct: [0, 1, 3],
        explanation: "Special Relativity covers relative speeds in flat space, explaining Time Dilation, Length Contraction, and E=mc2. Gravitational Lensing is a consequence of General Relativity (spacetime curvature due to gravity)."
      },
      {
        id: "sci-h-4",
        type: "tf",
        question: "Absolute zero is defined as exactly 0 Kelvin, where all molecular motion ceases completely.",
        options: ["True", "False"],
        correct: true,
        explanation: "True! Absolute zero is the lowest limit of the thermodynamic temperature scale where entropy and molecular motion reach their theoretical minimum."
      },
      {
        id: "sci-h-5",
        type: "single",
        question: "What biological macromolecule acts as a template during transcription to produce messenger RNA (mRNA)?",
        options: ["Ribosome", "tRNA", "DNA", "Protein"],
        correct: 2,
        explanation: "During transcription, an RNA polymerase enzyme reads a DNA template strand to synthesize a complementary single-stranded mRNA molecule."
      }
    ]
  },

  // --- General Trivia ---
  "general": {
    easy: [
      {
        id: "gen-e-1",
        type: "single",
        question: "Who painted the famous artwork 'Mona Lisa'?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        correct: 2,
        explanation: "The Mona Lisa was painted by the Italian Renaissance polymath Leonardo da Vinci in the early 16th century."
      },
      {
        id: "gen-e-2",
        type: "tf",
        question: "The Great Wall of China is fully visible from the Moon with the naked human eye.",
        options: ["True", "False"],
        correct: false,
        explanation: "False! This is a popular myth. The Wall is narrow and matches surrounding terrain, making it impossible to see with the naked eye from orbit without optical aids."
      },
      {
        id: "gen-e-3",
        type: "fib",
        question: "In which country did the Olympic Games originate? (Type the country name)",
        correct: "greece",
        explanation: "The ancient Olympic Games originated in Olympia, Greece, in the 8th century BC as athletic competitions dedicated to the gods."
      },
      {
        id: "gen-e-4",
        type: "multi",
        question: "Which of the following countries are located in Europe? (Select ALL that apply)",
        options: ["France", "Japan", "Italy", "Brazil"],
        correct: [0, 2],
        explanation: "France and Italy are European nations. Japan is in Asia, and Brazil is in South America."
      },
      {
        id: "gen-e-5",
        type: "single",
        question: "Which is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
        correct: 3,
        explanation: "The Pacific Ocean is the largest and deepest ocean basin on Earth, covering more than 30% of the Earth's surface."
      }
    ],
    medium: [
      {
        id: "gen-m-1",
        type: "single",
        question: "Which event sparked the beginning of World War I in 1914?",
        options: [
          "Invasion of Poland",
          "Assassination of Archduke Franz Ferdinand",
          "Signing of the Treaty of Versailles",
          "Sinking of the Lusitania"
        ],
        correct: 1,
        explanation: "The assassination of Archduke Franz Ferdinand of Austria in Sarajevo on June 28, 1914, triggered diplomatic crises that led to World War I."
      },
      {
        id: "gen-m-2",
        type: "multi",
        question: "Which of the following are colors on the flag of Italy? (Select ALL that apply)",
        options: ["Red", "Blue", "Green", "White"],
        correct: [0, 2, 3],
        explanation: "The Italian flag features three equal vertical bands of green, white, and red (from left to right)."
      },
      {
        id: "gen-m-3",
        type: "fib",
        question: "What is the capital city of Australia?",
        correct: "canberra",
        explanation: "Canberra is the capital city of Australia, selected as a compromise between rivals Sydney and Melbourne."
      },
      {
        id: "gen-m-4",
        type: "tf",
        question: "The currency of Japan is called the Yuan.",
        options: ["True", "False"],
        correct: false,
        explanation: "False! The Japanese currency is the Yen. The Yuan is the primary unit of currency in China."
      },
      {
        id: "gen-m-5",
        type: "single",
        question: "How many bones are there in an adult human body?",
        options: ["106", "206", "306", "406"],
        correct: 1,
        explanation: "An adult human body has 206 bones, while infants are born with around 270 bones which eventually fuse together during growth."
      }
    ],
    hard: [
      {
        id: "gen-h-1",
        type: "single",
        question: "In economics, what index measures the degree of income inequality in a population?",
        options: ["Gini Coefficient", "Consumer Price Index", "GDP Deflator", "Lorenz Index"],
        correct: 0,
        explanation: "The Gini Coefficient (or Gini Index) measures inequality of distribution, typically representing wealth or income differences in a nation."
      },
      {
        id: "gen-h-2",
        type: "fib",
        question: "What is the longest river in the world, stretching over 6,650 kilometers?",
        correct: "nile",
        explanation: "The Nile River in northeastern Africa is traditionally considered the longest river in the world, though some recent studies suggest the Amazon is longer."
      },
      {
        id: "gen-h-3",
        type: "multi",
        question: "Which of the following elements were discovered by Marie Curie? (Select ALL that apply)",
        options: ["Uranium", "Polonium", "Radium", "Thorium"],
        correct: [1, 2],
        explanation: "Marie Curie, together with her husband Pierre, discovered Polonium (named after her homeland Poland) and Radium in 1898."
      },
      {
        id: "gen-h-4",
        type: "tf",
        question: "The Magna Carta was signed by King John of England in the year 1215.",
        options: ["True", "False"],
        correct: true,
        explanation: "True! King John agreed to the Magna Carta (Great Charter) at Runnymede in June 1215 under pressure from rebellious barons."
      },
      {
        id: "gen-h-5",
        type: "single",
        question: "Which literary character was created by writer Mary Shelley in 1818?",
        options: ["Dracula", "Frankenstein's Monster", "Sherlock Holmes", "Jekyll and Hyde"],
        correct: 1,
        explanation: "Mary Shelley wrote 'Frankenstein; or, The Modern Prometheus' in 1818, introducing the creator Victor Frankenstein and his monster."
      }
    ]
  }
};

// 2. State Variables
let playerName = "Player";
let activeCategory = "web-dev";
let activeDifficulty = "easy";
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = []; // Records user performance
let timerInterval = null;
let timerDuration = 20; // Default in seconds
let timeLeft = 20;
let quizStartTime = null;

// DOM Elements
const screenHome = document.getElementById("screen-home");
const screenQuiz = document.getElementById("screen-quiz");
const screenResults = document.getElementById("screen-results");

const setupForm = document.getElementById("quiz-setup-form");
const inputPlayerName = document.getElementById("player-name");
const categoryOptions = document.querySelectorAll(".category-option");
const difficultyBtns = document.querySelectorAll(".diff-btn");

const hudQuestionNum = document.getElementById("current-question-num");
const hudLiveScore = document.getElementById("live-score");
const timerStroke = document.getElementById("timer-stroke");
const timerSec = document.getElementById("timer-sec");

const questionProgressFill = document.getElementById("question-progress-fill");
const questionTypeTag = document.getElementById("question-type-tag");
const questionDifficultyTag = document.getElementById("question-difficulty-tag");
const questionTextEl = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const feedbackPanel = document.getElementById("feedback-panel");
const feedbackIcon = document.getElementById("feedback-icon");
const feedbackTitle = document.getElementById("feedback-title");
const feedbackText = document.getElementById("feedback-text");

const btnSubmitAnswer = document.getElementById("submit-answer-btn");
const btnNextQuestion = document.getElementById("next-question-btn");

const resultTitle = document.getElementById("result-title");
const resultUsername = document.getElementById("result-username");
const resultScorePercent = document.getElementById("result-score-percent");
const resultScoreFraction = document.getElementById("result-score-fraction");
const resultTimeTaken = document.getElementById("result-time-taken");
const performanceFeedbackMsg = document.getElementById("performance-feedback-msg");
const resultBadgeIcon = document.getElementById("result-badge-icon");
const btnRetryQuiz = document.getElementById("retry-quiz-btn");
const btnHomeQuiz = document.getElementById("home-quiz-btn");
const reviewListContainer = document.getElementById("review-list-container");

// 3. Setup Listeners & Initialization
function init() {
  // Category Selector
  categoryOptions.forEach(opt => {
    opt.addEventListener("click", () => {
      categoryOptions.forEach(o => o.classList.remove("active"));
      opt.classList.add("active");
      activeCategory = opt.getAttribute("data-category");
    });
  });

  // Difficulty Selector
  difficultyBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      difficultyBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeDifficulty = btn.getAttribute("data-difficulty");
    });
  });

  // Form submission / Start Quiz
  setupForm.addEventListener("submit", startQuiz);

  // Next and Submit Action buttons
  btnSubmitAnswer.addEventListener("click", submitActiveAnswer);
  btnNextQuestion.addEventListener("click", loadNextQuestion);

  // Result Actions
  btnRetryQuiz.addEventListener("click", restartQuiz);
  btnHomeQuiz.addEventListener("click", goHome);
}

// 4. Game Screen Transitions
function showScreen(screen) {
  [screenHome, screenQuiz, screenResults].forEach(s => s.classList.remove("active"));
  screen.classList.add("active");
}

// 5. Game Start Logic
function startQuiz() {
  playerName = inputPlayerName.value.trim() || "Genius Guest";
  
  // Set Timer settings based on difficulty
  if (activeDifficulty === "easy") {
    timerDuration = 30;
  } else if (activeDifficulty === "medium") {
    timerDuration = 20;
  } else if (activeDifficulty === "hard") {
    timerDuration = 15;
  }

  // Retrieve questions
  const pool = QUESTION_BANK[activeCategory][activeDifficulty];
  // Clone and Shuffle questions to make it dynamic
  currentQuestions = [...pool].sort(() => 0.5 - Math.random());
  
  // Reset statistics
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];
  quizStartTime = new Date();

  // Update Score Screen HUD
  hudLiveScore.textContent = score;

  // Show quiz screen and render
  showScreen(screenQuiz);
  renderQuestion();
}

// 6. Question Rendering
function renderQuestion() {
  // Reset card state
  optionsContainer.innerHTML = "";
  feedbackPanel.className = "feedback-panel hidden";
  btnSubmitAnswer.classList.add("hidden");
  btnNextQuestion.classList.add("hidden");
  
  const q = currentQuestions[currentQuestionIndex];
  
  // Update HUD/Meta info
  hudQuestionNum.textContent = `${currentQuestionIndex + 1}/${currentQuestions.length}`;
  questionProgressFill.style.width = `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%`;
  
  // Pretty names for difficulty & tags
  questionDifficultyTag.textContent = activeDifficulty;
  
  let typeLabel = "Multiple Choice";
  if (q.type === "multi") typeLabel = "Select All That Apply";
  if (q.type === "tf") typeLabel = "True / False";
  if (q.type === "fib") typeLabel = "Fill in the Blank";
  questionTypeTag.textContent = typeLabel;

  // Display question text
  questionTextEl.textContent = q.question;

  // Render inputs based on question type
  if (q.type === "single" || q.type === "tf") {
    q.options.forEach((optText, index) => {
      const btn = document.createElement("button");
      btn.className = "option-item option-item-radio";
      btn.innerHTML = `
        <div class="option-check"></div>
        <span>${optText}</span>
      `;
      btn.addEventListener("click", () => selectSingleOption(index));
      optionsContainer.appendChild(btn);
    });
  } 
  else if (q.type === "multi") {
    q.options.forEach((optText, index) => {
      const btn = document.createElement("button");
      btn.className = "option-item";
      btn.innerHTML = `
        <div class="option-check"><i data-lucide="check" style="width: 14px; height: 14px;"></i></div>
        <span>${optText}</span>
      `;
      btn.addEventListener("click", () => toggleMultiOption(btn, index));
      optionsContainer.appendChild(btn);
    });
    lucide.createIcons();
    // Multi-select needs explicit submission
    btnSubmitAnswer.classList.remove("hidden");
  } 
  else if (q.type === "fib") {
    const inputWrapper = document.createElement("div");
    inputWrapper.className = "fib-input-wrapper";
    inputWrapper.innerHTML = `
      <input type="text" class="fib-input" id="fib-answer-input" placeholder="Type your answer here..." autocomplete="off">
    `;
    optionsContainer.appendChild(inputWrapper);
    
    // Focus automatically
    const input = document.getElementById("fib-answer-input");
    setTimeout(() => input.focus(), 100);

    // Support submitting by pressing Enter
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter" && !btnSubmitAnswer.classList.contains("hidden")) {
        submitActiveAnswer();
      }
    });

    btnSubmitAnswer.classList.remove("hidden");
  }

  // Start timers
  resetTimer();
}

// 7. Timer Mechanics
function resetTimer() {
  clearInterval(timerInterval);
  timeLeft = timerDuration;
  updateTimerUI();

  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerUI();

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      handleTimeout();
    }
  }, 1000);
}

function updateTimerUI() {
  timerSec.textContent = timeLeft;
  const progressRatio = timeLeft / timerDuration;
  const dashValue = progressRatio * 100;
  timerStroke.setAttribute("stroke-dasharray", `${dashValue}, 100`);

  // Change color warning if low time
  if (timeLeft <= 5) {
    timerStroke.style.stroke = "var(--color-incorrect)";
  } else {
    timerStroke.style.stroke = "var(--color-accent)";
  }
}

// Timeout behavior (automatically submits incorrect)
function handleTimeout() {
  // Shake Card
  const card = document.getElementById("quiz-question-card");
  card.classList.add("animate-incorrect");
  setTimeout(() => card.classList.remove("animate-incorrect"), 400);

  const q = currentQuestions[currentQuestionIndex];
  let answerGiven = null;

  if (q.type === "fib") {
    const input = document.getElementById("fib-answer-input");
    if (input) input.disabled = true;
    answerGiven = "";
  } else {
    // Disable all options
    document.querySelectorAll(".option-item").forEach(item => item.classList.add("disabled"));
  }

  // Process as incorrect
  recordAnswer(false, answerGiven);
  showFeedback(false, `Time's up! ${q.explanation}`);
}

// 8. Selecting / Interacting Logic
function selectSingleOption(selectedIndex) {
  clearInterval(timerInterval);
  const q = currentQuestions[currentQuestionIndex];
  const options = document.querySelectorAll(".option-item");
  
  // Freeze further inputs
  options.forEach(opt => opt.classList.add("disabled"));

  const isCorrect = (selectedIndex === q.correct) || (q.type === "tf" && ((selectedIndex === 0 && q.correct === true) || (selectedIndex === 1 && q.correct === false)));
  
  // Apply visual feedback classes
  options[selectedIndex].classList.add(isCorrect ? "correct" : "incorrect");
  
  if (!isCorrect) {
    // Find and highlight correct answer
    let correctIdx = q.correct;
    if (q.type === "tf") correctIdx = q.correct === true ? 0 : 1;
    options[correctIdx].classList.add("correct");
    // Shake card
    const card = document.getElementById("quiz-question-card");
    card.classList.add("animate-incorrect");
    setTimeout(() => card.classList.remove("animate-incorrect"), 400);
  } else {
    // Pulse card
    const card = document.getElementById("quiz-question-card");
    card.classList.add("animate-correct");
    setTimeout(() => card.classList.remove("animate-correct"), 400);
    score += 10;
    hudLiveScore.textContent = score;
  }

  // Record Answer
  recordAnswer(isCorrect, q.type === "tf" ? (selectedIndex === 0 ? "True" : "False") : q.options[selectedIndex]);

  // Show explanation
  showFeedback(isCorrect, q.explanation);
}

function toggleMultiOption(element, index) {
  if (element.classList.contains("disabled")) return;
  element.classList.toggle("selected");
}

// Submit for Multi-Select or FIB
function submitActiveAnswer() {
  clearInterval(timerInterval);
  const q = currentQuestions[currentQuestionIndex];
  btnSubmitAnswer.classList.add("hidden");

  let isCorrect = false;
  let userSelectionString = "";

  if (q.type === "multi") {
    const options = document.querySelectorAll(".option-item");
    const selectedIndices = [];
    
    options.forEach((opt, idx) => {
      opt.classList.add("disabled");
      if (opt.classList.contains("selected")) {
        selectedIndices.push(idx);
      }
    });

    // Check if correct indices matches selected indices
    const correctSorted = [...q.correct].sort().join(",");
    const selectedSorted = [...selectedIndices].sort().join(",");
    isCorrect = (correctSorted === selectedSorted);

    // Apply color markers
    options.forEach((opt, idx) => {
      const isSelected = opt.classList.contains("selected");
      const shouldBeSelected = q.correct.includes(idx);

      if (isSelected && shouldBeSelected) {
        opt.classList.add("correct");
      } else if (isSelected && !shouldBeSelected) {
        opt.classList.add("incorrect");
      } else if (!isSelected && shouldBeSelected) {
        opt.classList.add("correct"); // Show correct answer
      }
    });

    userSelectionString = selectedIndices.length > 0 
      ? selectedIndices.map(idx => q.options[idx]).join(", ") 
      : "[No selections made]";

  } 
  else if (q.type === "fib") {
    const input = document.getElementById("fib-answer-input");
    input.disabled = true;
    const value = input.value.trim().toLowerCase();
    
    const correctAns = q.correct.toLowerCase();
    isCorrect = (value === correctAns);

    if (isCorrect) {
      input.classList.add("correct");
    } else {
      input.classList.add("incorrect");
    }

    userSelectionString = input.value.trim() || "[No response]";
  }

  // Animation triggers
  const card = document.getElementById("quiz-question-card");
  if (isCorrect) {
    card.classList.add("animate-correct");
    setTimeout(() => card.classList.remove("animate-correct"), 400);
    score += 10;
    hudLiveScore.textContent = score;
  } else {
    card.classList.add("animate-incorrect");
    setTimeout(() => card.classList.remove("animate-incorrect"), 400);
  }

  // Record stats
  recordAnswer(isCorrect, userSelectionString);

  // Feedback panel reveal
  showFeedback(isCorrect, q.explanation);
}

// Record detailed historical state for score summary review page
function recordAnswer(isCorrect, answerString) {
  const q = currentQuestions[currentQuestionIndex];
  userAnswers.push({
    question: q.question,
    type: q.type,
    options: q.options,
    correctAnswer: q.type === "fib" 
      ? q.correct 
      : (q.type === "multi" 
        ? q.correct.map(idx => q.options[idx]).join(", ") 
        : (q.type === "tf" ? (q.correct ? "True" : "False") : q.options[q.correct])),
    userAnswer: answerString,
    isCorrect: isCorrect,
    explanation: q.explanation
  });
}

function showFeedback(isCorrect, text) {
  feedbackPanel.classList.remove("hidden");
  
  if (isCorrect) {
    feedbackPanel.className = "feedback-panel correct-panel";
    feedbackIcon.setAttribute("data-lucide", "check-circle-2");
    feedbackTitle.textContent = "Correct Answer!";
  } else {
    feedbackPanel.className = "feedback-panel incorrect-panel";
    feedbackIcon.setAttribute("data-lucide", "x-circle");
    feedbackTitle.textContent = "Incorrect Answer";
  }
  feedbackText.textContent = text;
  
  lucide.createIcons();

  // Show Next Button
  btnNextQuestion.classList.remove("hidden");
}

// 9. Moving Forward
function loadNextQuestion() {
  currentQuestionIndex++;
  
  if (currentQuestionIndex < currentQuestions.length) {
    renderQuestion();
  } else {
    finishQuiz();
  }
}

// 10. Finish & Score Screen Generation
function finishQuiz() {
  clearInterval(timerInterval);
  showScreen(screenResults);

  // Time taken formatting
  const totalMs = new Date() - quizStartTime;
  const totalSecs = Math.floor(totalMs / 1000);
  const mins = Math.floor(totalSecs / 60);
  const secs = totalSecs % 60;
  const timeFormatted = `${mins}:${secs < 10 ? '0' : ''}${secs}`;

  const numCorrect = userAnswers.filter(ans => ans.isCorrect).length;
  const percent = Math.round((numCorrect / currentQuestions.length) * 100);

  // Populate HTML elements
  resultUsername.textContent = playerName;
  resultScorePercent.textContent = `${percent}%`;
  resultScoreFraction.textContent = `${numCorrect}/${currentQuestions.length}`;
  resultTimeTaken.textContent = timeFormatted;

  // Set Score Badge and Feedback Message
  let title = "Magnificent!";
  let iconName = "trophy";
  let summaryText = "";

  if (percent === 100) {
    title = "Perfect Genius!";
    iconName = "crown";
    summaryText = `Unbelievable work, ${playerName}! You scored 100% on a ${activeDifficulty} difficulty challenge. You have mastered this domain!`;
  } else if (percent >= 80) {
    title = "Excellent Work!";
    iconName = "award";
    summaryText = `Fantastic effort, ${playerName}! Your knowledge is highly advanced. Just a couple minor errors keep you from perfection.`;
  } else if (percent >= 50) {
    title = "Nice Attempt!";
    iconName = "medal";
    summaryText = `Good job, ${playerName}! You passed the challenge. Go back, review the incorrect questions, and try to score higher next time!`;
  } else {
    title = "Keep Practicing!";
    iconName = "book-open";
    summaryText = `Don't worry, ${playerName}! Quizzes are great ways to learn. Review your answers in the section below, retry the quiz, and watch your score soar!`;
  }

  resultTitle.textContent = title;
  resultBadgeIcon.setAttribute("data-lucide", iconName);
  performanceFeedbackMsg.textContent = summaryText;

  // Generate Review Cards
  reviewListContainer.innerHTML = "";
  userAnswers.forEach((ans, index) => {
    const card = document.createElement("div");
    card.className = "review-card";
    
    const correctClass = ans.isCorrect ? "correct" : "incorrect";
    const statusLabel = ans.isCorrect ? "Correct" : "Incorrect";
    const statusIcon = ans.isCorrect ? "check" : "x";

    card.innerHTML = `
      <div class="review-card-header">
        <span class="review-q-num">Question ${index + 1}</span>
        <span class="review-status-tag ${correctClass}">
          <i data-lucide="${statusIcon}"></i>
          <span>${statusLabel}</span>
        </span>
      </div>
      <div class="review-question">${ans.question}</div>
      <div class="review-answers-box">
        <div class="review-user-ans"><strong>Your Answer:</strong> ${ans.userAnswer || "[No Response]"}</div>
        <div class="review-correct-ans"><strong>Correct Answer:</strong> ${ans.correctAnswer}</div>
      </div>
      <div class="review-explanation">${ans.explanation}</div>
    `;
    reviewListContainer.appendChild(card);
  });

  lucide.createIcons();
}

// 11. Navigation / Flow reset handlers
function restartQuiz() {
  // Restart same settings
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];
  quizStartTime = new Date();
  hudLiveScore.textContent = score;
  showScreen(screenQuiz);
  renderQuestion();
}

function goHome() {
  showScreen(screenHome);
}

// 12. DOM Content Loaded Bootstrapper
document.addEventListener("DOMContentLoaded", init);
