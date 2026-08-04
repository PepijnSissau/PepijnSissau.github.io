const setup = () => {
// deze code wordt pas uitgevoerd
// als de pagina volledig is ingeladen
    let btnSubmit = document.getElementById("btnSubmit");
    btnSubmit.addEventListener("click", verstuur);

}
window.addEventListener("load", setup);

const verstuur = () => {
    let resultVoornaam = checkvoornaam();
    let resultFamilienaam = checkFamilienaam();
    let resultGeboortedatum = checkGeboortedatum();
    let resultEmail = checkEmail();
    let resultAantalKinderen = checkAantalKinderen();

    if (resultVoornaam && resultFamilienaam && resultGeboortedatum && resultEmail && resultAantalKinderen){
        confirm("proficiat!");
    }
}

const checkvoornaam = () => {
    let voornaam = document.getElementById("voornaam").value
    let voornameVeld = document.getElementById("voornaam");
    let voornaamResult = document.getElementById("voornaamResult");
    if (voornaam.length === 0) {
        voornameVeld.classList.remove("invalid");
        voornaamResult.innerHTML = '';
    } else if (isGetal(voornaam)) {
        voornameVeld.classList.add("invalid");
        voornaamResult.innerHTML = "Voornaam mag geen cijfer zijn";
    } else if (voornaam.length > 30) {
        voornameVeld.classList.add("invalid");
        voornaamResult.innerHTML = "Voornaam mag niet langer zijn dan 30 karakters";
    } else {
        voornameVeld.classList.remove("invalid");
        voornaamResult.innerHTML = '';
        return true;
    }
}

const checkFamilienaam = () => {
    let familienaam = document.getElementById("familienaam").value;
    let familienaamVeld = document.getElementById("familienaam");
    let familienaamResult = document.getElementById("familienaamResult");
    if (familienaam.length === 0) {
        familienaamVeld.classList.add("invalid");
        familienaamResult.innerHTML = "Familienaam is verplicht";
    } else if (isGetal(familienaam)) {
        familienaamVeld.classList.add("invalid");
        familienaamResult.innerHTML = "Familienaam mag geen cijfer zijn";
    } else if (familienaam.length > 50) {
        familienaamVeld.classList.add("invalid");
        familienaamResult.innerHTML = "Familienaam mag niet langer zijn dan 50 karakters";
    } else {
        familienaamVeld.classList.remove("invalid");
        familienaamResult.innerHTML = "";
        return true;
    }
}

const checkGeboortedatum = () => {
    let geboortedatum = document.getElementById("geboortedatum").value;
    let geboortedatumVeld = document.getElementById("geboortedatum");
    let geboortedatumeResult = document.getElementById("geboortedatumResult");


    if (geboortedatum.length === 0) {
        geboortedatumVeld.classList.add("invalid");
        geboortedatumeResult.innerHTML = "Geboortedatum is verplicht";
    } else {
        let jaartal = geboortedatum.substring(0,4);
        if (isGetal(jaartal)){
            let maand = geboortedatum.substring(5,7);
            if (isGetal(jaartal)) {
                let dag = geboortedatum.substring(8,10);
                if (isGetal(dag)) {
                    if (geboortedatum.substring(4,5).localeCompare("-") === 0 && geboortedatum.substring(7,8).localeCompare("-") === 0) {
                        if (geboortedatum.length === 10) {
                            geboortedatumVeld.classList.remove("invalid");
                            geboortedatumeResult.innerHTML="";
                            return true;
                        } else {
                            geboortedatumVeld.classList.add("invalid");
                            geboortedatumeResult.innerHTML="formaat is niet jjjj-mm-dd";
                        }
                    } else {
                        geboortedatumVeld.classList.add("invalid");
                        geboortedatumeResult.innerHTML="formaat is niet jjjj-mm-dd";
                    }
                } else {
                    geboortedatumVeld.classList.add("invalid");
                    geboortedatumeResult.innerHTML="formaat is niet jjjj-mm-dd";
                }
            } else {
                geboortedatumVeld.classList.add("invalid");
                geboortedatumeResult.innerHTML="formaat is niet jjjj-mm-dd";
            }
        } else {
            geboortedatumVeld.classList.add("invalid");
            geboortedatumeResult.innerHTML="formaat is niet jjjj-mm-dd";
        }
        console.log(jaartal);
    }
}

const checkEmail = () => {
    let email = document.getElementById("email").value;
    let emailVeld = document.getElementById("email");
    let emailResult = document.getElementById("emailResult");

    console.log(email.indexOf("@"));

    if (email.length === 0) {
        emailVeld.classList.add("invalid");
        emailResult.innerHTML = "Email is verplicht";
    } else if (isGetal(email)){
        emailVeld.classList.add("invalid");
        emailResult.innerHTML = "Email mag geen getal zijn";
    } else if (email.indexOf("@") < 0){
        emailVeld.classList.add("invalid");
        emailResult.innerHTML = "Email bevat geen @";
    } else if (email.indexOf("@") >= 0 && email.indexOf("@",email.indexOf("@")+1) > 0) {
        emailVeld.classList.add("invalid");
        emailResult.innerHTML = "Email bevat meer dan 1 @";
    } else if (email.substring(0,email.indexOf("@")).length === 0) {
        emailVeld.classList.add("invalid");
        emailResult.innerHTML = "Er moet een karakter voor de @ staan";
    } else if (email.substring(email.indexOf("@"), email.length-1).length === 0) {
        emailVeld.classList.add("invalid");
        emailResult.innerHTML = "Er moet een karakter na de @ staan";
    } else {
        emailVeld.classList.remove("invalid");
        emailResult.innerHTML = "";
        return true;
    }
}

const checkAantalKinderen = () => {
    let aantalKinderen = document.getElementById("aantalkinderen").value;
    let aantalKinderenVeld = document.getElementById("aantalkinderen");
    let aantalKinderenResult = document.getElementById("aantalKinderenResult");

    if (!isGetal(aantalKinderen)) {
        aantalKinderenVeld.classList.add("invalid");
        aantalKinderenResult.innerHTML = "Het ingevulde aantal kinderen moet een getal zijn";
    } else if (aantalKinderen<=0) {
        aantalKinderenVeld.classList.add("invalid");
        aantalKinderenResult.innerHTML = "Is geen positief getal";
    } else if (aantalKinderen>99) {
        aantalKinderenVeld.classList.add("invalid");
        aantalKinderenResult.innerHTML = "Is te vruchtbaar";
    } else{
        aantalKinderenVeld.classList.remove("invalid");
        aantalKinderenResult.innerHTML = "";
        return true;
    }
}

const isGetal = (tekst) => {
    return !isNaN(tekst);
}