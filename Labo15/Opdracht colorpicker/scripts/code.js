const setup = () => {
	let colorDemos=document.getElementsByClassName("colorDemo");
	let sliderRed = document.getElementsByClassName("sliderRed");
	let sliderGreen = document.getElementsByClassName("sliderGreen");
	let sliderBlue = document.getElementsByClassName("sliderBlue");


	// we moeten zowel op het input als het change event reageren,
	// zie http://stackoverflow.com/questions/18544890
	sliderRed[0].addEventListener("change", update);
	sliderRed[0].addEventListener("input", update);
	sliderGreen[0].addEventListener("change", update);
	sliderGreen[0].addEventListener("input", update);
	sliderBlue[0].addEventListener("change", update);
	sliderBlue[0].addEventListener("input", update);

	// maak het blokje rood
	colorDemos[0].style.backgroundColor="red";
}

const update = () => {
	let sliderRed = document.getElementsByClassName("sliderRed");
	let sliderGreen = document.getElementsByClassName("sliderGreen");
	let sliderBlue = document.getElementsByClassName("sliderBlue");

	let textRed =document.getElementById('redValue');
	let textGreen =document.getElementById('greenValue');
	let textBlue =document.getElementById('blueValue');

	let valueRed=sliderRed[0].value;
	let valueGreen=sliderGreen[0].value;
	let valueBlue=sliderBlue[0].value;

	let colorDemo = document.getElementsByClassName("colorDemo");

	colorDemo[0].style.backgroundColor = 'rgb('+valueRed+','+ valueGreen + ',' + valueBlue+')';

	textRed.innerHTML = valueRed;
	textGreen.innerHTML = valueGreen;
	textBlue.innerHTML = valueBlue;
}

// dit is de eerste regel code die uitgevoerd wordt,
// de bovenstaande functie declaraties introduceren
// enkel de functies en voeren ze niet uit natuurlijk.
//
// Onderstaande zorgt ervoor dat de setup functie wordt
// uitgevoerd zodra de DOM-tree klaar is.
window.addEventListener("load", setup);