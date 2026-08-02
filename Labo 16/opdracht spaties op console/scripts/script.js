const setup = () => {
// deze code wordt pas uitgevoerd
// als de pagina volledig is ingeladen
    let btnverstuur = document.getElementById("verstuur");
    btnverstuur.addEventListener("click", verstuur);

}
window.addEventListener("load", setup);

const verstuur = () => {
    let txtinvoer = document.getElementById("invoer").value.trim().replaceAll(' ', '').split('');
    let output = '';

    for (i=0;i<txtinvoer.length;i++){
        output += txtinvoer[i] + ' ';
    }

    console.log(output);
}