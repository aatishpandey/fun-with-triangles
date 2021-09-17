const inputs = document.querySelectorAll(".input-angle");
const isTriangleBtn = document.querySelector("#btn-check");
const outputE1 = document.querySelector("#output");

function CalsulateSumOfAngles(angle1,angle2,angle3){
    const sumOfAngles = angle1+angle2+angle3;
    return sumOfAngles;
}

function isTriangle(){
    const sumOfAngles = CalsulateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    console.log(sumOfAngles);

    if(sumOfAngles === 180)
    {
        outputE1.innerText = "Yay , the angles form  a triangle";
    }
    else{
        outputE1.innerText = "Oh not forming a triangle!";
    }
}

isTriangleBtn.addEventListener("click",isTriangle)