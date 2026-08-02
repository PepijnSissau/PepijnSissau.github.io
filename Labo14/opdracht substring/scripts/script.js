const setup = () => {
// deze code wordt pas uitgevoerd
// als de pagina volledig is ingeladen
    let btnSubstring = document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", substring);
}

const substring = () => {
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let number1 = num1.value;
    let number2 = num2.value;
    let txtInput = document.getElementById("txtInput");
    let stringToSubstring = txtInput.value;
    let substringedText = stringToSubstring.substring(number1, number2);
    let txtOutput = document.getElementById("txtOutput");
    txtOutput.innerHTML = substringedText;
}

window.addEventListener("load", setup);