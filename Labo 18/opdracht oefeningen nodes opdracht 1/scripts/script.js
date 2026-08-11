const setup = () => {
// deze code wordt pas uitgevoerd
// als de pagina volledig is ingeladen
    let paragraaf = document.querySelector("body > p");
    paragraaf.innerHTML = "Veranderd!";
}
window.addEventListener("load", setup);