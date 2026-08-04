const setup = () => {
// deze code wordt pas uitgevoerd
// als de pagina volledig is ingeladen
    let btnVersturen = document.getElementById("versturen");
    btnVersturen.addEventListener("click", vervangenDe);
}
window.addEventListener("load", setup);

const vervangenDe = () => {
    let inputTxt = document.getElementById("inputTxt").innerHTML;
    let currentIndex = 0;

    for (i=0;i<inputTxt.length;i++){
        if (currentIndex < inputTxt.indexOf('de', currentIndex)){
            console.log(inputTxt.substring(currentIndex,inputTxt.indexOf('de', currentIndex)) + 'het');
            currentIndex = inputTxt.indexOf('de', currentIndex) + 2;
        }
    }
    console.log(inputTxt.substring(currentIndex, inputTxt.length+1 ));
}