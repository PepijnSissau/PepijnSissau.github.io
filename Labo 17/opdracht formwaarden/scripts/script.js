const setup = () => {
// deze code wordt pas uitgevoerd
// als de pagina volledig is ingeladen
    let btnSubmit = document.getElementById("btnSubmit");
    btnSubmit.addEventListener("click", verstuur);

}

window.addEventListener("load", setup);

const verstuur = () => {
    let roker = document.getElementById("roker").checked;
    if (roker){
        console.log("Is een roker");
    } else {
        console.log("Is geen roker");
    }

    let moedertaal = document.getElementsByClassName("moedertaal");
    for (i=0;i<moedertaal.length;i++){
        if (moedertaal[i].checked) {
            console.log('Moedertaal is '+ moedertaal[i].value);
        }
    }

    let buurland = document.getElementById("buurland");
    console.log("Favoriete buurland is " + buurland[buurland.selectedIndex].text);

    let bestelling = document.getElementById("bestelling");
    let lijstje = '';
    for (i=0;i<bestelling.length;i++){
        if (bestelling[i].selected) {
            lijstje += bestelling[i].text + ' ';
        }
    }
    console.log("De bestelling bestaat uit " + lijstje);

}