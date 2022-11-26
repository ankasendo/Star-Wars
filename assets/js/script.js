//quiz 

const quizData = [{
        question: "Who are Kylo Ren parents?",
        a: "Padme and Anakin Skywalker",
        b: "Han Solo and princess Leia",
        c: "R2-D2 and C-3PO",
        d: "Mara Jade and Luke Skywalker",
        correct: "b"

    },
    {
        question: "What is the name of Han Solo ship?",
        a: "Millennium Falcon",
        b: "Bird Rocket",
        c: "Stormtrooper",
        d: "Force",
        correct: "a"
    },
    {
        question: "Anakin Skywalker grew up to be who?",
        a: "Luke Skywalker",
        b: "Yoda",
        c: "Darth Vader",
        d: "Kylo Ren",
        correct: "c",
    },
    {
        question: "What species is Chewbacca? ",
        a: "Wookie",
        b: "Jawas",
        c: "Ewoks",
        d: "Gungan",
        correct: "a"
    },
    {
        question: "Who created Star Wars?",
        a: "Disney",
        b: "Quentin Tarantino",
        c: "George Lucas",
        d: "Steven Speilberg",
        correct: "c"
    },
    {
        question: "What is baby Yoda real name?",
        a: "Tofu",
        b: "Greg",
        c: "Mandalorian",
        d: "Grogu",
        correct: "d"
    },
    {
        question: "Where is Jabba the Hutt's palace located?",
        a: "Versal",
        b: "Costar",
        c: "Death Star",
        d: "Tatooine",
        correct: "d"
    },
    {
        question: "Who built C-3PO?",
        a: "Luke Skywalker",
        b: "Obi-Wan Kenobi",
        c: "Anakin Skywalker",
        d: "Han Solo",
        correct: "c"
    },
    {
        question: "In Star Wars, what do they call the invisible power that bind the galaxy together?",
        a: "The microcells",
        b: "The Force",
        c: "The Speed",
        d: "Stardust",
        correct: "b"
    }
];

// Get the list elements 

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
  

// Score card
let currentQuiz = 0;
let score = 0;

const deselectAnswers = () =>  {
    answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
};

// Loads all questions into Quiz
function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

loadQuiz();

// Event listeners and correct answer
submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) score++;
      currentQuiz++;
      if (currentQuiz < quizData.length) loadQuiz();
      else {
        submitButton.style.visibility = 'hidden';
        quiz.innerHTML = `
              <h2>You did so well!
              <hr>
              You managed to get${score}/${quizData.length} questions correctly</h2>
              <button onclick="window.location.reload();">Play Again</button>
          `;
      }
    }
  });