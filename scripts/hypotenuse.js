const sides = document.querySelectorAll('.input-angle');
const hypotenuseBtn = document.querySelector('#submit-answer-btn');
const outputE1 = document.querySelector('#output');

function calculateSumOfSquares(a,b){
    const sumOfSquares = a*a + b*b;
    return(sumOfSquares);
}

function calculateHypotenuse(){
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputE1.innerText = "The length of hypotenuse is "+ lengthOfHypotenuse;
}

hypotenuseBtn.addEventListener('click',calculateHypotenuse);