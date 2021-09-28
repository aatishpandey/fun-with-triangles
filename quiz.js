const quizForm = document.querySelector('.quiz-form');
const SubmitAnsBtn = document.querySelector('#submit-answer-btn');
const outputE1 = document.querySelector('#output');

const correctAnswers = ["90°","right angled","45°","no","100°"];


function calculateScoreOf(){
    let score=0;
    let index=0;
    let num=0;
    const formResults = new FormData(quizForm);

    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
        score = score + 1;
        console.log(score);
    }
        index = index+1;
        num=num+1;
    }
    // console.log(score);
    if(num === 5)
    {outputE1.innerText = "Your score is " + score;}
    else{
        outputE1.innerText = "Please select all answers";
    }
}

SubmitAnsBtn.addEventListener("click",calculateScoreOf);
