
const questions = [
  {
    type: "mc",
    question: "기모노와 한복의 가장 큰 차이점은 무엇인가요?",
    options: ["색상 대비", "곡선 vs 직선", "소재의 두께", "소매 길이"],
    answer: 1,
    explanation: "한복은 곡선미 중심, 기모노는 직선적이며 평면적인 구조가 특징입니다."
  },
  {
    type: "mc",
    question: "후리소데(ふりそで)는 주로 누가 입나요?",
    options: ["기혼 여성", "무녀", "미혼 여성", "남성"],
    answer: 2,
    explanation: "후리소데는 긴 소매가 특징이며, 미혼 여성의 예복입니다."
  },
  {
    type: "mc",
    question: "‘黒留袖（くろとめそで）’는 어떤 상황에서 입는 기모노인가요?",
    options: ["평상복", "무용 공연", "결혼식에 참석한 기혼 여성", "성년식"],
    answer: 2,
    explanation: "기혼 여성이 결혼식 등의 격식 있는 자리에서 입는 예복입니다."
  },
  {
    type: "mc",
    question: "다음 중 기모노와 함께 사용하는 소품이 아닌 것은?",
    options: ["おび", "たび", "ぞうり", "まくら"],
    answer: 3,
    explanation: "まくら(베개)는 착용 시 쓰지 않는 소품입니다."
  },
  {
    type: "mc",
    question: "유카타(ゆかた)는 보통 어떤 계절에 입나요?",
    options: ["봄", "여름", "가을", "겨울"],
    answer: 1,
    explanation: "유카타는 면으로 된 가벼운 옷으로, 여름 축제나 온천에서 입습니다."
  },
  {
    type: "mc",
    question: "다음 중 유카타를 입을 때 신는 신발은?",
    options: ["ぞうり", "げた", "わらじ", "くつした"],
    answer: 1,
    explanation: "げた(나막신)은 유카타와 함께 신는 전통 신발입니다."
  },
  {
    type: "mc",
    question: "성년식(成人式) 때 미혼 여성이 주로 입는 기모노는?",
    options: ["こもん", "はかま", "いろとめそで", "ふりそで"],
    answer: 3,
    explanation: "성년식에는 긴 소매의 화려한 후리소데를 입습니다."
  },
  {
    type: "mc",
    question: "다음 중 기모노를 입는 상황으로 가장 적절한 것은?",
    options: ["운동회", "장보기", "졸업식", "해변 놀러가기"],
    answer: 2,
    explanation: "졸업식에서 정장을 대신하여 기모노를 입는 경우가 많습니다."
  },
  {
    type: "mc",
    question: "‘おび’는 어떤 역할을 하나요?",
    options: ["모자", "장식용 허리띠", "바지끈", "소매 장식"],
    answer: 1,
    explanation: "기모노의 중심이 되는 허리띠로 장식성과 고정 역할을 합니다."
  },
  {
    type: "mc",
    question: "‘たび’는 어떤 물건인가요?",
    options: ["조끼", "샌들", "버선", "우산"],
    answer: 2,
    explanation: "흰색 발가락 갈라진 전통 버선으로, ぞうり와 함께 신습니다."
  },
  {
    type: "ox",
    question: "기모노는 보통 투피스 구조로 되어 있다.",
    answer: false,
    explanation: "기모노는 하나로 이어진 원피스형 구조입니다."
  },
  {
    type: "ox",
    question: "유카타는 면으로 만들어져 여름에 입는 간편한 옷이다.",
    answer: true,
    explanation: "유카타는 무명 면으로 된 여름용 전통 복장입니다."
  },
  {
    type: "ox",
    question: "‘ぞうり’는 전통 버선이다.",
    answer: false,
    explanation: "ぞうり는 샌들 형태의 신발이고, 버선은 ‘たび’입니다."
  },
  {
    type: "ox",
    question: "‘打掛（うちかけ）’는 신부가 결혼식에 입는 화려한 기모노이다.",
    answer: true,
    explanation: "うちかけ는 신부가 입는 화려한 겉기모노입니다."
  },
  {
    type: "ox",
    question: "‘はかま’는 여성은 절대 입을 수 없다.",
    answer: false,
    explanation: "졸업식 등에서 여성도 입으며, 현대에는 성별 구분 없이 착용합니다."
  },
  {
    type: "mc",
    question: "에도 시대, 기모노의 안감에 몰래 사용되던 문양은?",
    options: ["료모노", "후쿠로모노", "히다리미츠도모에", "츠케사게"],
    answer: 2,
    explanation: "히다리미츠도모에는 불교적 무사적 상징으로 금지되기도 해, 안감에 몰래 넣었습니다."
  },
  {
    type: "mc",
    question: "기모노의 '에리' 방향(깃을 여미는 방식)이 죽은 자와 반대인 이유는?",
    options: ["왼쪽이 신체 보호를 상징해서", "무사의 검집 방향에 맞춰서", "음양오행의 좌청룡 개념 때문", "왕실 복식의 전통 계승이라서"],
    answer: 2,
    explanation: "생자는 '좌청룡'인 왼쪽 여밈을 길한 방향으로 여겼고, 죽은 자는 '우백호'로 여밈을 바꾸었습니다."
  },
  {
    type: "mc",
    question: "기모노 무늬 중, 불사의 상징으로 사용된 식물은?",
    options: ["마츠(소나무)", "타케(대나무)", "우메(매화)", "후타바(떡잎)"],
    answer: 0,
    explanation: "마츠는 장수와 불사를 상징하며, 귀족과 무사의 상징 무늬로 자주 사용됨."
  },
  {
    type: "mc",
    question: "\"쿠로토메소데\"는 어떤 계층의 여성 전용 기모노인가?",
    options: ["무녀", "기생", "기혼 여성", "미혼 귀족녀"],
    answer: 2,
    explanation: "쿠로토메소데는 검은 바탕에 문장을 새긴 정식 기혼 여성용 예복입니다."
  },
  {
    type: "mc",
    question: "에도 시대 기모노에서, “스오우\"는 무엇을 뜻하는가?",
    options: ["허리끈", "외출용 상하의 한벌", "속옷용 하의", "족자 스타일 소매"],
    answer: 1,
    explanation: "스오우는 무사들이 입던 외출복 개념의 세트 복장입니다."
  },
  {
    type: "mc",
    question: "\"유젠염색\"이 처음 대중화된 지역은?",
    options: ["에도", "코토", "오사카", "나고야"],
    answer: 1,
    explanation: "유젠은 교토의 유젠사이가 창시했으며, 쿄유젠이 가장 오래됨."
  },
  {
    type: "mc",
    question: "다음 중 문장(家紋)이 5개 들어간 기모노의 이름은?",
    options: ["츠케사게", "호몬기", "이로토메소데", "고몬츠키"],
    answer: 3,
    explanation: "고몬츠키는 문장이 5개 붙은 가장 격식 있는 예복 스타일입니다."
  }
];

// 나머지 JS 로직은 이어서 압축파일에 포함

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 30;

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const timerDisplay = document.getElementById("timer");
const scoreDisplay = document.getElementById("score-display");

startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", startQuiz);

function startQuiz() {
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("quiz-container").classList.remove("hidden");
  currentQuestion = 0;
  score = 0;
  showQuestion();
}

function loadQuestion() {
  clearInterval(timer);
  timeLeft = 30;
  timerDisplay.textContent = timeLeft;
  timer = setInterval(updateTimer, 1000);

  const q = questions[currentQuestion];
  questionContainer.innerHTML = `<h2>${q.question}</h2>`;
  optionsContainer.innerHTML = "";

  if (q.type === "mc") {
    q.options.forEach((option, index) => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.addEventListener("click", () => selectAnswer(index));
      optionsContainer.appendChild(btn);
    });
  } else {
    ["O", "X"].forEach((text, i) => {
      const btn = document.createElement("button");
      btn.textContent = text;
      btn.addEventListener("click", () => selectAnswer(i === 0));
      optionsContainer.appendChild(btn);
    });
  }
}

function updateTimer() {
  timeLeft--;
  timerDisplay.textContent = timeLeft;
  if (timeLeft <= 0) {
    clearInterval(timer);
    selectAnswer(null);
  }
}

function selectAnswer(choice) {
  clearInterval(timer);
  const q = questions[currentQuestion];
  const buttons = optionsContainer.querySelectorAll("button");
  buttons.forEach((btn, index) => {
    btn.disabled = true;
    if (q.type === "mc") {
      if (index === q.answer) {
        btn.classList.add("correct");
      } else if (index === choice) {
        btn.classList.add("incorrect");
      }
    } else {
      const correct = q.answer === true ? "O" : "X";
      if (btn.textContent === correct) {
        btn.classList.add("correct");
      } else if (btn.textContent === (choice ? "O" : "X")) {
        btn.classList.add("incorrect");
      }
    }
  });

  if (choice === q.answer) score++;

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }, 1500);
}

function showResult() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  scoreDisplay.textContent = `당신의 점수는 ${score} / ${questions.length}점 입니다!`;
}
