let leftOperator = document.querySelector(".operator1");
let rightOperator = document.querySelector(".operator2");
let submitButton = document.querySelector(".submitanswer");
let playground = document.querySelector(".playground");

countdown();

class OperationGenerator {
  constructor() {
    this.leftOperator = this.generateLeftOperator();
    this.rightOperator = this.generateRightOperator();
  }

  generateLeftOperator() {
    let randomLeftOperator = Math.floor(Math.random() * 5) + 1;
    leftOperator.innerHTML = randomLeftOperator;
    return randomLeftOperator;
  }

  generateRightOperator() {
    let randomRightOperator = Math.floor(Math.random() * 5) + 1;
    rightOperator.innerHTML = randomRightOperator;
    return randomRightOperator;
  }
}

class AnswerChecker {
  constructor(operationGenerator) {
    this.operationGenerator = operationGenerator;
    submitButton.addEventListener("click", this.checkAnswer.bind(this));
  }

  checkAnswer() {
    let trueAnswer =
      this.operationGenerator.leftOperator +
      this.operationGenerator.rightOperator;

    let userAnswer = document.querySelector(".useranswer").value;
    // Convertir le résultat de l'opération en binaire
    trueAnswer = trueAnswer.toString(2);

    console.log(trueAnswer);

    if (trueAnswer === userAnswer) {
      alert("Bonne réponse !");
      playground.innerHTML = '<p class="winmessage">You win!</p>';
      window.location.reload();
    } else {
      alert("Mauvaise réponse !");
    }
  }
}

const operationGenerator = new OperationGenerator();
const answerChecker = new AnswerChecker(operationGenerator);

function countdown() {
  let playground = document.querySelector(".playground");
  let seconds = 15;
  const countdownElement = document.getElementById("countdown");

  function updateCountdown() {
    countdownElement.textContent = seconds;
    seconds--;

    if (seconds < 0) {
      clearInterval(interval);
      countdownElement.textContent = "Terminé !";
      alert("Time out");
      playground.innerHTML = '<button class="restartbutton">Restart</button>';
      let restartButton = document.querySelector(".restartbutton");

      restartButton.addEventListener("click", function () {
        window.location.reload();
      });
    }
  }

  updateCountdown();
  const interval = setInterval(updateCountdown, 1000);
}

// window.onbeforeunload = function () {
//   playground.innerHTML = "";
//   return "You lose";
// };
