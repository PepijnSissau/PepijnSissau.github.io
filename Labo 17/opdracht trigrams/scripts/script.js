const setup = () => {
// deze code wordt pas uitgevoerd
// als de pagina volledig is ingeladen
    let btnVersturen = document.getElementById("versturen");
    btnVersturen.addEventListener("click", telTrigrammen);
}
window.addEventListener("load", setup);

const telTrigrammen = () => {
    let inputTxt = document.getElementById("inputTxt").innerHTML;
    let aantalTrigrammen = 0;
    console.log(inputTxt);
    for (i=0;i<inputTxt.length-2;i++){
        console.log(inputTxt.substring(i,i+3));
        aantalTrigrammen++;
    }
    console.log(aantalTrigrammen);
}