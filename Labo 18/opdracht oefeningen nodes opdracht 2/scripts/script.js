const setup = () => {
// deze code wordt pas uitgevoerd
// als de pagina volledig is ingeladen
    let listItems = document.querySelectorAll("body > ul > li");
    for (i=0;i<listItems.length;i++){
        listItems[i].classList.add("listitem");
    }

    let img = document.createElement("img");
    let imgAttribute = document.createAttribute("src");
    imgAttribute.value = "https://cdn-icons-png.flaticon.com/512/364/364015.png";
    img.setAttributeNode(imgAttribute);

    let body = document.querySelector("body");
    body.appendChild(img);

}
window.addEventListener("load", setup);