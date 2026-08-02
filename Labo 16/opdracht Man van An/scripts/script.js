const setup = () => {
// deze code wordt pas uitgevoerd
// als de pagina volledig is ingeladen
    let btnverstuur = document.getElementById("verstuur");
    btnverstuur.addEventListener("click", bereken);

}
window.addEventListener("load", setup);

const bereken = () => {
    let inputTxt = document.getElementById("inputTxt").innerHTML.toLowerCase();
    let currentIndex = 0;
    let aantalKeer = 0;
    let searchString = 'an';
    console.log(inputTxt);

    for (i=0;i<inputTxt.length;i++){
        if (currentIndex < inputTxt.indexOf(searchString, currentIndex)){
            aantalKeer += 1;
            currentIndex = inputTxt.indexOf(searchString, currentIndex) + 1;
        }
    }

    console.log(aantalKeer);
}