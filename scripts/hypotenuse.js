const sides = document.querySelectorAll('.input-angle');
const hypotenuseBtn = document.querySelector('#submit-answer-btn');
const outputE1 = document.querySelector('#output');

function calculateSumOfSquares(a,b){
    const sumOfSquares = a*a + b*b;
    return(sumOfSquares);
}

function calculateHypotenuse(){

    const side1 = Number(sides[0].value);
    const side2 = Number(sides[1].value);

    if(side1 && side2){
        const sumOfSquares = calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));
        const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
        outputE1.innerText = "The length of hypotenuse is "+ lengthOfHypotenuse;
    }
    else{
        outputE1.innerText = "Please enter all values";
    }

}

hypotenuseBtn.addEventListener('click',calculateHypotenuse);