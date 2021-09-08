const sportQuizData = [
    {
        question: "Q1) How many Ballon d'Ors does Cristiano Ronaldo have ?",
        a: "2",
        b: "0",
        c: "5",
        d: "3",
        correct: "c"
    },
    {
        question: "Q2) Which team won the 2021 All-Ireland Final in hurling ?",
        a: "Limerick",
        b: "Wexford",
        c: "Cork",
        d: "Dublin",
        correct: "a"
    },
    {
        question: "Q3) Which team did basketball player Michael Jordan play for ?",
        a: "Phoenix Suns",
        b: "Chicago Bulls",
        c: "Los Angeles Lakers",
        d: "Miami Heat",
        correct: "b"
    },
    {
        question: "Q4) Which National soccer team won the 2018 World Cup ?",
        a: "Germany",
        b: "France",
        c: "Spain",
        d: "Brazil",
        correct: "b"
    },
    {
        question: "Q5) Sam Snead and which other player are tied at 1st with the most ever PGA Tour wins in golf ?",
        a: "Jack Nicklaus",
        b: "Rory McIlroy",
        c: "Phil Mickelson",
        d: "Tiger Woods",
        correct: "d"
    },
    {
        question: "Q6) What sport does Roger Federer play ?",
        a: "American Football",
        b: "Soccer",
        c: "Tennis",
        d: "Boxing",
        correct: "c"
    },
    {
        question: "Q7) What year was the first ever Olympics Games held in ?",
        a: "1896",
        b: "1908",
        c: "1922",
        d: "1751",
        correct: "a"
    },
    {
        question: "Q8) Who holds the record for being the fastest man on earth in the 100m sprint ?",
        a: "Tyson Gay",
        b: "Usain Bolt",
        c: "Yohan Blake",
        d: "Michael Johnston",
        correct: "b"
    },
    {
        question: "Q9) Who  holds the record for most goals in La Liga ?",
        a: "Luis Suarez",
        b: "Cristiano Ronaldo",
        c: "Ronaldinho",
        d: "Lionel Messi",
        correct: "d"
    },
    {
        question: "Q10) How many Super bowl rings does Tom Brady have in the NFL ?",
        a: "0",
        b: "4",
        c: "7",
        d: "11",
        correct: "c"
    }
];

const quiz = document.getElementById("quiz");
const answerE1s = document.querySelectorAll('.answer');
const questionE1 = document.getElementById("question_sport");
const a_text_sport = document.getElementById("a_text_sport");
const b_text_sport = document.getElementById("b_text_sport");
const c_text_sport = document.getElementById("c_text_sport");
const d_text_sport = document.getElementById("d_text_sport");
const submitBtn_sport = document.getElementById("submit_sport");

let currentSportQuiz = 0;
let score = 0;

function loadSportQuiz() {
    deselectAnswers();

    const currentSportQuizData = sportQuizData[currentSportQuiz];

    questionE1.innerText = currentSportQuizData.question;
    a_text_sport.innerText = currentSportQuizData.a;
    b_text_sport.innerText = currentSportQuizData.b;
    c_text_sport.innerText = currentSportQuizData.c;
    d_text_sport.innerText = currentSportQuizData.d;
}

loadSportQuiz();

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

submitBtn_sport.addEventListener("click", () => {

    const answer = getSelected();

    if(answer) {
        if(answer === sportQuizData[currentSportQuiz].correct) {
            score++;
        }

        currentSportQuiz++;
        if (currentSportQuiz < sportQuizData.length) {
            loadSportQuiz();
        }  else {
            quiz.innerHTML = `<h2>You have answered ${score}/${sportQuizData.length} correctly. Well Done !</h2> <button onclick="location.reload()">Reload</button><button onclick="window.location.href='index.html';">Home</button>`;                
                            
        }
    }

});

