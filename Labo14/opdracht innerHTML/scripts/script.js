const setup = () => {
// deze code wordt pas uitgevoerd
// als de pagina volledig is ingeladen
    let btnChangeText=document.getElementById("btnChangeText");
    btnChangeText.addEventListener("click", wijzigen);
}

const wijzigen = () => {
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!"
}
window.addEventListener("load", setup);