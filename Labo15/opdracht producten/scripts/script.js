const setup = () => {
// deze code wordt pas uitgevoerd
// als de pagina volledig is ingeladen
    let btnHerberekenen = document.getElementById("btnHerberekenen");
    btnHerberekenen.addEventListener("click", herberekenen);
}
window.addEventListener("load", setup);

const herberekenen = () => {
    let prijzen = document.getElementsByClassName("prijs");
    let aantallen = document.getElementsByClassName("aantal");
    let btw = document.getElementsByClassName("btw");
    let subtotalen = document.getElementsByClassName("subtotaal");
    let veldTotaal = document.getElementById("totaal");
    let totaal = 0;

    for (i=0;i<prijzen.length;i++){
        let prijs = parseFloat(prijzen[i].innerHTML);
        let aantal = aantallen[i].value;
        let btwproduct = parseInt(btw[i].innerHTML);

        console.log(parseFloat(prijzen[i].innerHTML));
        console.log(aantallen[i].value);
        console.log(parseInt(btw[i].innerHTML));

        let subtotaal = (prijs * aantal) + (prijs / 100 * btwproduct * aantal);
        subtotalen[i].innerHTML =  subtotaal.toFixed(2) + " Eur";

        totaal += subtotaal;
    }

    veldTotaal.innerHTML = totaal.toFixed(2) + " Eur";
}