let $ = document;

const weightInput = $.querySelector("#weight")
const weightSpan = $.querySelector("#weight-val")

const heightInput = $.querySelector("#height")
const heightSpan = $.querySelector("#height-val")

const resultBmi = $.querySelector("#result")
const categoryBmi = $.querySelector("#category")

const iconDoc = $.querySelector(".iconInDuc")
const questionBox = $.querySelector(".questionBox")


function bmiCalc() {
    let weightInputValue = weightInput.value;
    let heightInputValue = heightInput.value;

    weightSpan.innerHTML = weightInputValue + " kg"
    heightSpan.innerHTML = heightInputValue + " cm"

    let heightForBmi = heightInputValue / (100) // تبدیل کردن سانتی متر به متر
    let resultBmiVar = weightInputValue / (heightForBmi ** 2)

    resultBmi.innerHTML = (resultBmiVar).toFixed(1)


    if (resultBmiVar < 18.5) {
        categoryBmi.innerHTML = "|: کم وزن  "
        resultBmi.style.color = "#ffc44d"
        document.body.style.backgroundColor = "#ffc44d"
    } else if (resultBmiVar >= 18.5 && resultBmiVar <= 24.9) {
        categoryBmi.innerHTML = "(: شما نرمال هستید  "
        resultBmi.style.color = "green"
        document.body.style.backgroundColor = "#00df30c9"
    } else if (resultBmiVar >= 25 && resultBmiVar <= 29.9) {
        categoryBmi.innerHTML = "/: شما اضافه وزن دارید "
        resultBmi.style.color = "orange"
        document.body.style.backgroundColor = "orange"
    } else if (resultBmiVar > 30) {
        categoryBmi.innerHTML = "): شما چاق هستید  "
        resultBmi.style.color = "red"
        document.body.style.backgroundColor = "red"
    }
    
}
weightInput.addEventListener("input", bmiCalc)
heightInput.addEventListener("input", bmiCalc)



function openModal() {
    questionBox.style.opacity = 1;
    questionBox.style.visibility = "visible";
}
iconDoc.addEventListener("click", openModal);

function closeModal() {
    questionBox.style.opacity = 0;
    questionBox.style.visibility = "hidden";
}
questionBox.addEventListener("click", function(event) {
    if (event.target === questionBox) {
        closeModal();
    }
});

