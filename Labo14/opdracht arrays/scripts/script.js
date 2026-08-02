const setup = () => {
// deze code wordt pas uitgevoerd
// als de pagina volledig is ingeladen
    const familieLeden = ['Pepijn', 'Naomi', 'Jasmijn', 'Liedewijn', 'Marjolein'];
    console.log(familieLeden.length);
    console.log(familieLeden[0]);
    console.log(familieLeden[2]);
    console.log(familieLeden[4]);

    let person = prompt("Geef nog een naam op");

    const VoegNaamToe = (person) => {
        familieLeden.push(person);
    }
    VoegNaamToe(person);
    console.log(familieLeden.toString());

}
window.addEventListener("load", setup);