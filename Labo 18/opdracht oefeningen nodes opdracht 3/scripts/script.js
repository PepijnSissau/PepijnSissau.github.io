const setup = () => {
// deze code wordt pas uitgevoerd
// als de pagina volledig is ingeladen
    window.addEventListener("click", uitvoeren);

}
window.addEventListener("load", setup);

const uitvoeren = () => {
    let p = document.createElement("p");
    let div = document.querySelector("body > div");

    div.appendChild(p);
}