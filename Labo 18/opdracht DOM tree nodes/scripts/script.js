const setup = () => {
// deze code wordt pas uitgevoerd
// als de pagina volledig is ingeladen
    let paragraaf = document.getElementById("abc");
    console.log (paragraaf);
}
window.addEventListener("load", setup);