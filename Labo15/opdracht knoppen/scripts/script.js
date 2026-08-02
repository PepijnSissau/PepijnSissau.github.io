const setup = () => {
// deze code wordt pas uitgevoerd
// als de pagina volledig is ingeladen
    let buttons = document.getElementsByClassName("button");

    for (i=0;i<buttons.length;i++) {
        buttons[i].style.backgroundColor= "#FFFFFF";
        buttons[i].addEventListener("click", updateButton);
    }
}
window.addEventListener("load", setup);

const updateButton = (e) => {
    console.log(e.target.id);
    console.log(e.target.style.backgroundColor);
    if (e.target.style.backgroundColor === 'rgb(255, 255, 255)'){
        e.target.style.backgroundColor = 'lightblue';
    } else {
        e.target.style.backgroundColor = '#FFFFFF';
    }
}