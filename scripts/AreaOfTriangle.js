const base = document.querySelector("#base");
const height = document.querySelector("#height");
const output = document.querySelector("#output");
const calBtn = document.querySelector("#submit-answer-btn")

//Area of Triangle A = 1/2 (base * height)
function calculateArea(e) {
    const baseOfTri = base.value;
    const heightOfTri = height.value;
    const prod = baseOfTri * heightOfTri;
    const a = 0.5*prod;
    output.innerText = a;
  }

  calBtn.addEventListener("click", calculateArea);