const questions = [
  {
    que: "What is the capital of France?",
    a: " Berlin",
    b: " Madrid",
    c: " Paris",
    d: "Rome ",
    ans: "c",
  },
  {
    que: "How many continents are there in the world? ",
    a: " 5",
    b: "6 ",
    c: " 7",
    d: " 8",
    ans: "7",
  },
  {
    que: " What is the square root of 144?",
    a: " 10",
    b: " 11",
    c: " 12",
    d: " 13",
    ans: "12",
  },
  {
    que: " How many sides does a hexagon have?",
    a: " 4",
    b: " 5",
    c: " 6",
    d: " 8",
    ans: "6",
  },
  {
    que: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    que: "Where did a fatal bus accident occur?",
    a: "Maharashtra",
    b: "Tamil Nadu",
    c: "Bihar",
    d: "Uttar Pradesh",
    correct: "a",
  },
  {
    que: "Which exercise did India conduct with Sri Lanka?",
    a: "MALABAR",
    b: "SIMBEX",
    c: "SLINEX",
    d: "INDRA",
    correct: "c",
  },
  {
    que: "Which of the following is a strategy of regular investment in mutual funds?",
    a: "IPO",
    b: "SIP",
    c: "ETF",
    d: "ADR",
    correct: "b",
  },
  {
    que: "Which index represents the top 50 companies in India?",
    a: "BSE Sensex",
    b: "Nifty 50",
    c: "Dow Jones",
    d: "FTSE 100",
    correct: "b",
  },
  {
    que: "What is the national animal of India?",
    a: "Peacock",
    b: "Tiger",
    c: "Elephant",
    d: "Lion",
    correct: "b",
  },
  {
    que: "Which river is considered the holiest in India?",
    a: "Yamuna",
    b: "Godavari",
    c: "Ganga",
    d: "Narmada",
    correct: "c",
  },
  {
    que: "In which year did India gain independence?",
    a: "1945",
    b: "1946",
    c: "1947",
    d: "1948",
    correct: "c",
  },
];

let index = 0;
let totle = questions.length;
let right = 0;
wrong = 0;

const quebox = document.getElementById("quebox");
const optionInput = document.querySelectorAll(".options");
const loadQuestion = (e) => {
  if (index === totle) {
    return endQuiz();
  }
  reset();
  startTimer();
  let data = questions[index];
  // console.log(data)
  quebox.innerHTML = `${index + 1}) ${data.que}`;
  optionInput[0].nextElementSibling.innerText = data.a;
  optionInput[1].nextElementSibling.innerText = data.b;
  optionInput[2].nextElementSibling.innerText = data.c;
  optionInput[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer();
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;

  clearInterval(timerInterval);
  loadQuestion();
  return;
};

const getAnswer = () => {
  let answer;
  optionInput.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

const reset = () => {
  optionInput.forEach((input) => {
    input.checked = false;
  });
};

const endQuiz = () => {
  document.getElementById("box").innerHTML = `
    <h3>Congretulation</h3>
    <h2>${right}/${totle} Are Correct</h2>
  `;
};
let timerInterval;
const timeDisplay = document.getElementById("time");

const startTimer = () => {
  let timeLeft = 30;
  timeDisplay.textContent = timeLeft;
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      submitQuiz();
    }
  }, 1000);
};


loadQuestion();
