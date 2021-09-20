const base = document.querySelector("#base");
const height = document.querySelector("#height");
const output = document.querySelector("#output");
const calBtn = document.querySelector("#submit-answer-btn")

//Area of Triangle A = 1/2 (base * height)
function calculateArea(e) {
    const baseOfTri = Number(base.value);
    const heightOfTri = Number(height.value);

    if(baseOfTri && heightOfTri){
      const prod = baseOfTri * heightOfTri;
    const a = 0.5*prod;
    output.innerText = a;
    }
    else{
      output.innerText = "Please enter all values";
    }

  }

  calBtn.addEventListener("click", calculateArea);