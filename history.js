const historyQuizData = [
    {
        question: "Q1) Who was Henry VIII's last wife ?",
        a: "Catherine Jenkins",
        b: "Catherine Smith",
        c: "Catherine Parr",
        d: "Catherine Rowe",
        correct: "c"
    },
    {
        question: "Q2) What year did the Titanic sink ?",
        a: "1912",
        b: "1908",
        c: "1914",
        d: "1920",
        correct: "a"
    },
    {
        question: "Q3) In which European country was there a civil war between 1946 and 1949 ?",
        a: "France",
        b: "Greece",
        c: "Germany",
        d: "Spain",
        correct: "b"
    },
    {
        question: "Q4) Who discovered penicillin ?",
        a: "Vincent Fleming",
        b: "Alexander Fleming",
        c: "David Fleming",
        d: "None of the above",
        correct: "b"
    },
    {
        question: "Q5) Which war was fought in South Africa between 1899 and 1902 ?",
        a: "World War 1",
        b: "First Boer War",
        c: "SA Civil War",
        d: "Second Boer War",
        correct: "d"
    },
    {
        question: "Q6)  Hiroshima was hit by the atomic bomb of 1945, but which other Japanese city was also hit ?",
        a: "Tokyo",
        b: "Yokohama",
        c: "Nagasaki",
        d: "Osaka",
        correct: "c"
    },
    {
        question: "Q7)  Which Treaty ended World War I ?",
        a: "The Treaty of Versailles",
        b: "The Treaty of Paris",
        c: "The Treaty of Milan",
        d: "The Treaty of Brussels",
        correct: "a"
    },
    {
        question: "Q8) From which country did Vietnam claim independence in 1945 ?",
        a: "England",
        b: "France",
        c: "Spain",
        d: "Thailand",
        correct: "b"
    },
    {
        question: "Q9) What came after the Bronze Age ?",
        a: "The Stone Age",
        b: "The Metal Age",
        c: "The Wood Age",
        d: "The Iron Age",
        correct: "d"
    },
    {
        question: "Q10) Which famous US landmark did Martin Luther King Junior give his famous 'I have a dream' speech in front of ?",
        a: "The Statue of Liberty",
        b: "The White House",
        c: "The Lincoln Memorial",
        d: "The Grand Canyon",
        correct: "c"
    }
];

const quiz = document.getElementById("quiz");
const answerE1s = document.querySelectorAll('.answer');
const questionE1 = document.getElementById("question_history");
const a_text_history = document.getElementById("a_text_history");
const b_text_history = document.getElementById("b_text_history");
const c_text_history = document.getElementById("c_text_history");
const d_text_history = document.getElementById("d_text_history");
const submitBtn_history = document.getElementById("submit_history");

let currentHistoryQuiz = 0;
let score = 0;


function loadHistoryQuiz() {
    deselectAnswers();
    const currentHistoryQuizData = historyQuizData[currentHistoryQuiz];

    questionE1.innerText = currentHistoryQuizData.question;
    a_text_history.innerText = currentHistoryQuizData.a;
    b_text_history.innerText = currentHistoryQuizData.b;
    c_text_history.innerText = currentHistoryQuizData.c;
    d_text_history.innerText = currentHistoryQuizData.d;
}

loadHistoryQuiz();


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

submitBtn_history.addEventListener("click", () => {

    const answer = getSelected();
    console.log(answer)
    if(answer) {
        if(answer === historyQuizData[currentHistoryQuiz].correct) {
            score++;
        }

        currentHistoryQuiz++;
        if (currentHistoryQuiz < historyQuizData.length) {
            loadHistoryQuiz();
        }  else {
            quiz.innerHTML = `<h2>You have answered ${score}/${historyQuizData.length} correctly. Well Done !</h2> <button onclick="location.reload()">Reload</button><button onclick="window.location.href='index.html';">Home</button>`;                
                            
        }
    }

});
