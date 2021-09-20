const inputs = document.querySelectorAll(".input-angle");
const isTriangleBtn = document.querySelector("#submit-answer-btn");
const outputE1 = document.querySelector("#output");

function CalsulateSumOfAngles(angle1,angle2,angle3){
    const sumOfAngles = angle1+angle2+angle3;
    return sumOfAngles;
}

function isTriangle(){

    const angle1 = Number(inputs[0].value);
    const angle2 = Number(inputs[1].value);
    const angle3 = Number(inputs[2].value);

    if(angle1 && angle2 && angle3){
        const sumOfAngles = CalsulateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
        console.log(sumOfAngles);

        if(sumOfAngles === 180)
        {
            outputE1.innerText = "Yay , the angles form  a triangle";
            console.log('Yay , the angles form  a triangle');
        }
        else{
            outputE1.innerText = "Oh not forming a triangle!";
            console.log('Oh not forming a triangle!');
        }
        }else{
            outputE1.innerText = "Please enter all values";
        }

}

isTriangleBtn.addEventListener("click",isTriangle);