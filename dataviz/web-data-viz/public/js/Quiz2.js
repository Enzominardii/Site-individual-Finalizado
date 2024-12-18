
import questions from "./questions2.js";

const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

let currentIndex = 0;
let questionsCorrect = 0;

btnRestart.onclick = () => {
  content.style.display = "flex";
  contentFinish.style.display = "none";

  currentIndex = 0;
  questionsCorrect = 0;
  loadQuestion();
};

function nextQuestion(e) {
  if (e.target.getAttribute("data-correct") === "true") {
    questionsCorrect++;
  }

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion();
  } else {
    finish();
  }
}
function finish() {
  textFinish.innerHTML = `Você acertou ${questionsCorrect} de ${questions.length}`;
  content.style.display = "none";
  contentFinish.style.display = "flex";
  
  // Verifica se o ID_USUARIO existe no sessionStorage
  const fkUsuario = sessionStorage.getItem("ID_USUARIO");  
  if (!fkUsuario) {
    alert("Erro: Usuário não encontrado.");
    return;
  }

  // Envia a pontuação para o servidor
  fetch("/ranking/quiz/inserir", {
    method: "POST",  
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      qtdAcertos: questionsCorrect,
      fkUsuario: fkUsuario, 
      fkQuiz: 2  
    })
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`Erro ao registrar pontuação: ${response.statusText}`);
    }
  })
  .then(data => {
    console.log("Resposta do servidor:", data);
  })
  .catch(error => {
    console.error("Erro ao registrar pontuação:", error.message);
    alert("Erro ao registrar pontuação: " + error.message);
  });
}


function loadQuestion() {
  spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
  const item = questions[currentIndex];
  answers.innerHTML = "";
  question.innerHTML = item.question;

  item.answers.forEach((answer) => {
    const div = document.createElement("div");

    div.innerHTML = `
      <button class="answer" data-correct="${answer.correct}">
        ${answer.option}
      </button>
    `;

    answers.appendChild(div);
  });

  document.querySelectorAll(".answer").forEach((item) => {
    item.addEventListener("click", nextQuestion);
  });
}

loadQuestion();

