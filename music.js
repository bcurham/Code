const musicQuizData = [
    {
        question: "Q1) How many people started out in 'One Direction' ?",
        a: "2",
        b: "0",
        c: "5",
        d: "3",
        correct: "c"    
    },
    {
        question: "Q2) What was the name of the Gallagher brothers in 'Oasis' ?",
        a: "Liam and Noel",
        b: "Conor and Sam",
        c: "Jason and Tom",
        d: "Matthew and Peter",
        correct: "a"  
    },
    {
        question: "Q3) Which country won the Eurovision Song Contest 2015 ?",
        a: "Denmark",
        b: "Sweden",
        c: "Azerbaijan",
        d: "Ireland",
        correct: "b"
    },
    {
        question: "Q4) In which county did Irish band 'Westlife' form ?",
        a: "Roscommon",
        b: "Sligo",
        c: "Dublin",
        d: "Cork",
        correct: "b" 
    },
    {
        question: "Q5) How old was Elvis Presley when he died ?",
        a: "56",
        b: "71",
        c: "39",
        d: "42",
        correct: "d"
    },
    {
        question: "Q6) What genre of music is played by the band 'Queen' ?",
        a: "Hip-hop",
        b: "R&B",
        c: "Rock",
        d: "Jazz",
        correct: "c"
    },
    {
        question: "Q7) What 'One Directioner' is from Ireland ?",
        a: "Niall Horan",
        b: "Zayn Malik",
        c: "Harry Styles",
        d: "None of the above",
        correct: "a"
    },
    {
        question: "Q8) What is the missing word - Red Hot ____ Peppers ?",
        a: "Green",
        b: "Chilli",
        c: "Yellow",
        d: "Orange",
        correct: "b"
    },
    {
        question: "Q9) What stadium in Ireland did 'Coldplay' sell out in 2016 ?",
        a: "3 Arena",
        b: "Aviva",
        c: "Semple Stadium",
        d: "Croke Park",
        correct: "d"
    },
    {
        question: "Q10) Who first did the iconic 'Moonwalk' ?",
        a: "George Michael",
        b: "Tiny Tempah",
        c: "Michael Jackson",
        d: "Nick Jonas",
        correct: "c"
    }
];

const quiz = document.getElementById("quiz");
const answerE1s = document.querySelectorAll('.answer');
const questionE1 = document.getElementById("question_music");
const a_text_music = document.getElementById("a_text_music");
const b_text_music = document.getElementById("b_text_music");
const c_text_music = document.getElementById("c_text_music");
const d_text_music = document.getElementById("d_text_music");
const submitBtn_music = document.getElementById("submit_music");

let currentMusicQuiz = 0;
let score = 0;

function loadMusicQuiz() {
    deselectAnswers();

    const currentMusicQuizData = musicQuizData[currentMusicQuiz];

    questionE1.innerText = currentMusicQuizData.question;
    a_text_music.innerText = currentMusicQuizData.a;
    b_text_music.innerText = currentMusicQuizData.b;
    c_text_music.innerText = currentMusicQuizData.c;
    d_text_music.innerText = currentMusicQuizData.d;
}

loadMusicQuiz();

function getSelected() {
    const answerE1s = document.querySelectorAll('.answer');

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

submitBtn_music.addEventListener("click", () => {

    const answer = getSelected();
    
    if(answer) {
         if(answer === musicQuizData[currentMusicQuiz].correct) {
            score++;
        }

        currentMusicQuiz++;
        if (currentMusicQuiz < musicQuizData.length) {
            loadMusicQuiz();
        }  else {
            quiz.innerHTML = `<h2>You have answered ${score}/${musicQuizData.length} correctly. Well Done !</h2> <button onclick="location.reload()">Reload</button><button onclick="window.location.href='index.html';">Home</button>`;                
        }
    }

});

