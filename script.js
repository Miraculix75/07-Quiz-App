let questions = [
  {
    "question": "Wer hat HTML erfunden?",
    "answer-1": "Robbie Williams",
    "answer-2": "Lady Gaga",
    "answer-3": "Tim Berners-Lee",
    "answer-4": "Justin Bieber",
    "correct-answer": 3,
  },

  {
    "question": "Wer hat JavaScript erfunden?",
    "answer-1": "Steve Jobs",
    "answer-2": "Robbie Williams",
    "answer-3": "Lady Gaga",
    "answer-4": "Justin Bieber",
    "correct-answer": 1,
  },

  {
    "question": "Wer hat CSS erfunden?",
    "answer-1": "Steve Jobs",
    "answer-2": "Robbie Williams",
    "answer-3": "Håkon Wium Lie",
    "answer-4": "Justin Bieber",
    "correct-answer": 3,
  },

  {
    "question": "Wer hat Bootstrap erfunden?",
    "answer-1": "Steve Jobs",
    "answer-2": "Robbie Williams",
    "answer-3": "Lady Gaga",
    "answer-4": "Mark Otto",
    "correct-answer": 4,
  },

  {
    "question": "Wer hat PHP erfunden?",
    "answer-1": "Steve Jobs",
    "answer-2": "Rasmus Lerdorf",
    "answer-3": "Lady Gaga",
    "answer-4": "Justin Bieber",
    "correct-answer": 2,
  },

  {
    "question": "Wer hat SQL erfunden?",
    "answer-1": "Steve Jobs",
    "answer-2": "Robbie Williams",
    "answer-3": "Edgar F. Codd ",
    "answer-4": "Justin Bieber",
    "correct-answer": 3,
  },

  {
    "question": "Wer hat XML erfunden?",
    "answer-1": "World Wide Web Consortium",
    "answer-2": "Robbie Williams",
    "answer-3": "Lady Gaga",
    "answer-4": "Justin Bieber",
    "correct-answer": 1,
  }
];


let rightQuestions = 0;
let currentQuestion = 0;

let audio_success = new Audio('/audio/success.wav');
let audio_wrong = new Audio('/audio/wrong.wav');


function init() {
  document.getElementById("total-questions").innerHTML = questions.length;

  showQuestions();
}


function showQuestions() {

  if(currentQuestion >= questions.length) {
    // Show End Screen

    document.getElementById("endScreen").style = ''; //style="display: none; wird in der div nicht angezeigt
    document.getElementById("questionBody").style = 'display: none';

    document.getElementById('amountOfQuestions').innerHTML = questions.length;
    document.getElementById('amountOfRightQuestions').innerHTML = rightQuestions;
    document.getElementById("headerImage").classList.remove("card-img-top");
    document.getElementById("headerImage").src = "img/tropy.png";
    document.getElementById("headerImage").classList.add(".width-15");

  } else {    // Show question

    let percent = (currentQuestion + 1) / questions.length; 
    percent = Math.round(percent * 100); 


    document.getElementById("progressBar").innerHTML = `${percent} %`;
    document.getElementById("progressBar").style = `width: ${percent}%`;

    
    let question = questions[currentQuestion];

    document.getElementById("question-Number").innerHTML = currentQuestion + 1;

    document.getElementById("questionText").innerHTML = question["question"];
    document.getElementById("answer-1").innerHTML = question["answer-1"];
    document.getElementById("answer-2").innerHTML = question["answer-2"];
    document.getElementById("answer-3").innerHTML = question["answer-3"];
    document.getElementById("answer-4").innerHTML = question["answer-4"];
  }
}

function answer(answer) {

  let question = questions[currentQuestion];
  let selectedQuestionNumber = answer.slice(-1);
  let idOfRightAnswer = `answer-${question['correct-answer']}`;
                        // + question[`correct-answer']`; anstelle vom ${} kann man auch das + verwenden.

  if(selectedQuestionNumber == question['correct-answer']) { // Richtige Frage beantwortet
    
      document.getElementById('answer-' + selectedQuestionNumber).parentNode.classList.add('bg-success');
      audio_success.play();
      rightQuestions++;
  } else { // Falsche Antwort
      document.getElementById('answer-' + selectedQuestionNumber).parentNode.classList.add('bg-danger');
      document.getElementById(idOfRightAnswer).parentNode.classList.add("bg-success");
      audio_wrong.play();
  }

  document.getElementById('next-Question').disabled = false;
}


function nextQuestion() {
  currentQuestion++;
  
  document.getElementById('next-Question').disabled = true;

  resetAnswerButtons(); //reset answer buttons

  showQuestions();
}

function resetAnswerButtons() {
  document.getElementById("answer-1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer-1").parentNode.classList.remove("bg-success");

  document.getElementById("answer-2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer-2").parentNode.classList.remove("bg-success");

  document.getElementById("answer-3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer-3").parentNode.classList.remove("bg-success");

  document.getElementById("answer-4").parentNode.classList.remove("bg-danger");
  document.getElementById("answer-4").parentNode.classList.remove("bg-success");
}


function restartGame() {
  document.getElementById("headerImage").src = "img/pencil.jpg";
  document.getElementById("questionBody").style = ""; // questionBody wieder anzeigen
  document.getElementById("endScreen").style = "display: none"; // endScreen ausblenden

  rightQuestions = 0;
  currentQuestion = 0;

  init();
}