const generalKnowledgeQuizData = [
    {
        question: "Q1) What's the biggest animal in the world ?",
        a: "Bear",
        b: "Giraffe",
        c: "Blue whale",
        d: "Elephant",
        correct: "c"
    },
    {
        question: "Q2) What does IPA stand for ?",
        a: "Indian Pale Ale",
        b: "Irish Pale Ale",
        c: "Islamic Protection Act",
        d: "None of the above",
        correct: "a"
    },
    {
        question: "Q3) How many sides does a heptadecagon have ?",
        a: "32",
        b: "17",
        c: "12",
        d: "9",
        correct: "b"
    },
    {
        question: "Q4) Who plays Delboy Trotter in Only Fools And Horses ?",
        a: "Leonardo DiCaprio",
        b: "David Jason",
        c: "Brad Pitt",
        d: "Tom Hanks",
        correct: "b"
    },
    {
        question: "Q5) Which planet is closest to the sun ?",
        a: "Saturn",
        b: "Uranus",
        c: "Venus",
        d: "Mercury",
        correct: "d"
    },
    {
        question: "Q6) How many elements are there in the periodic table ?",
        a: "512",
        b: "49",
        c: "118",
        d: "200",
        correct: "c"
    },
    {
        question: "Q7) Where was the first ever Olympics Games held ?",
        a: "Athens, Greece",
        b: "Paris, France",
        c: "Split, Croatia",
        d: "Madrid, Spain",
        correct: "a"
    },
    {
        question: "Q8) What star sign would someone born on August 24th be ?",
        a: "Cancer",
        b: "Virgo",
        c: "Leo",
        d: "Gemini",
        correct: "b"
    },
    {
        question: "Q9) What nut is in the middle of a Ferrero Rocher ?",
        a: "Almond",
        b: "Pistachio",
        c: "Cashew",
        d: "Hazelnut",
        correct: "d"
    },
    {
        question: "Q10) Whats the name of the oldest county in Ireland ?",
        a: "Mayo",
        b: "Cork",
        c: "Waterford",
        d: "Dublin",
        correct: "c"
    }
];

const quiz = document.getElementById("quiz");
const answerE1s = document.querySelectorAll('.answer');
const questionE1 = document.getElementById("question_general_knowledge");
const a_text_general_knowledge = document.getElementById("a_text_general_knowledge");
const b_text_general_knowledge = document.getElementById("b_text_general_knowledge");
const c_text_general_knowledge = document.getElementById("c_text_general_knowledge");
const d_text_general_knowledge = document.getElementById("d_text_general_knowledge");
const submitBtn_general_knowledge = document.getElementById("submit_general_knowledge");

let currentGeneralKnowledgeQuiz = 0;
let score = 0;

loadGeneralKnowledgeQuiz();

function loadGeneralKnowledgeQuiz() {
    deselectAnswers();
    const currentGeneralKnowledgeQuizData = generalKnowledgeQuizData[currentGeneralKnowledgeQuiz];

    questionE1.innerText = currentGeneralKnowledgeQuizData.question;
    a_text_general_knowledge.innerText = currentGeneralKnowledgeQuizData.a;
    b_text_general_knowledge.innerText = currentGeneralKnowledgeQuizData.b;
    c_text_general_knowledge.innerText = currentGeneralKnowledgeQuizData.c;
    d_text_general_knowledge.innerText = currentGeneralKnowledgeQuizData.d;
}

loadGeneralKnowledgeQuiz();

function getSelected() {
    const answerE1s = document.querySelectorAll('.answer');

    let answer = undefined;

    answerE1s.forEach(answerE1 => {
        if(answerE1.checked) {
            answer = answerE1.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerE1s.forEach((answerE1) => {
        answerE1.checked = false;
    });
}

submitBtn_general_knowledge.addEventListener("click", () => {

    const answer = getSelected();

    if(answer) {
        if(answer === generalKnowledgeQuizData[currentGeneralKnowledgeQuiz].correct) {
            score++;
        }

        currentGeneralKnowledgeQuiz++;
        if (currentGeneralKnowledgeQuiz < generalKnowledgeQuizData.length) {
            loadGeneralKnowledgeQuiz();
        }  else {
            quiz.innerHTML = `<h2>You have answered ${score}/${generalKnowledgeQuizData.length} correctly. Well Done !</h2> <button onclick="location.reload()">Reload</button><button onclick="window.location.href='index.html';">Home</button>`;                
        }
    }

});

