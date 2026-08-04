const setup = () => {
// deze code wordt pas uitgevoerd
// als de pagina volledig is ingeladen
    uitvoeren();
}
window.addEventListener("load", setup);

const uitvoeren = () => {
    let gemeentes = [];
    let ingevoerdeGemeente = prompt('Voer een gemeente in');
    let selectGemeente = document.getElementById("gemeente");

    while (ingevoerdeGemeente !== 'stop'){
        gemeentes.push(ingevoerdeGemeente)
        ingevoerdeGemeente = prompt('Voer een gemeente in');
    }

    gemeentes.sort(compare);

    for (i=0;i<gemeentes.length;i++){
        let option = document.createElement("option")
        option.text = gemeentes[i];
        selectGemeente.add(option);
    }
}

const compare = (a, b) => {
    return a.localeCompare(b);
}