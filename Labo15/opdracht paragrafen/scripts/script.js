const setup = () => {
// deze code wordt pas uitgevoerd
// als de pagina volledig is ingeladen
    addOpvallend();

}
window.addEventListener("load", setup);

const addOpvallend = () => {
    let paragrafen = document.getElementsByClassName('belangrijk');
    for (i=0;i<paragrafen.length;i++){
        paragrafen[i].classList.add('opvallend');
    }
}