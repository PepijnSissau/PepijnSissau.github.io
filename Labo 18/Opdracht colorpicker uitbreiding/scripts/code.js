const initialize = () => {
	let sliders = document.getElementsByClassName("slider");
	let save = document.getElementById("btnSubmit");

	save.addEventListener("click", opslaan);
	
	for (let i = 0; i < sliders.length; i++) {
		// we moeten zowel op het input als het change event reageren,
		// zie http://stackoverflow.com/questions/18544890
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}
	
	update();
};

const update = () => {
	let red = document.getElementById("sldRed").value; //input always value
	let green =document.getElementById("sldGreen").value;
	let blue = document.getElementById("sldBlue").value;
	
	document.getElementById("lblRed").innerHTML=red;
	document.getElementById("lblGreen").innerHTML=green;// html-element innerHTML
	document.getElementById("lblBlue").innerHTML=blue;
	
	let swatch = document.getElementById("swatch");
	swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";
};

const opslaan = () => {
	let swatch = document.getElementById("swatch");
	let savedSwatches = document.querySelector("#savedSwatches");
	let newDiv = document.createElement("div");
	let deleteButton = document.createElement("button");

	let red = document.getElementById("sldRed").value; //input always value
	let green =document.getElementById("sldGreen").value;
	let blue = document.getElementById("sldBlue").value;

	newDiv.classList.add("savedSwatch");
	newDiv.classList.remove("swatch");
	newDiv.setAttribute("style", "background-color: rgb("+red+", "+green+", "+blue+")");
	newDiv.style.textAlign = "right";

	deleteButton.classList.add("deleteButton");
	deleteButton.textContent="X";
	deleteButton.addEventListener("click", remove);

	newDiv.appendChild(deleteButton);

	savedSwatches.appendChild(newDiv);
};

const remove = (e) => {
	let parent = e.target.parentNode;
	console.log(parent);
	parent.remove();
}

window.addEventListener("load", initialize);