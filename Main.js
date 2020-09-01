let description = false;
let details = function(){
	let Q1 = document.querySelector(".details");
	let P = document.querySelectorAll(".details p");
	let Bgd = document.querySelector(".ques1 p");

	if(description === false) {
		Q1.style.background = "grey";
		Q1.style.width = "300px";
		Bgd.style.backgroundimage = "(bgd.png)";

		let arraylength = P.length;
		for (var i = 0; i < arraylength; i++){
			P[i].style.visibility = "visible";
		}

		description = true;
	}
	else if(description === true){
		Q1.style.background = "black";
		Q1.style.width = "unset";
		let arraylength = P.length;
		for (var i = 0; i < arraylength; i++){
			P[i].style.visibility = "hidden";
	}
		description = false;
	}
}

let description2 = false;
let details2 = function(){
	let Q2 = document.querySelector(".details2");
	let P = document.querySelector(".details2 p");

	if(description2 === false) {
		Q2.style.background = "grey";
		Q2.style.width = "300px";
		P.style.visibility = "visible";

		description2 = true;
	}
	else if(description2 === true){
		Q2.style.background = "black";
		Q2.style.width = "unset";
		P.style.visibility = "hidden";
	
		description2 = false;
	}
}

let description3 = false;
let details3 = function(){
	let Q3 = document.querySelector(".details3");
	let P = document.querySelectorAll(".details3 p");

	if(description3 === false) {
		Q3.style.background = "grey";
		Q3.style.width = "300px";

		let arraylength = P.length;
		for (var i = 0; i < arraylength; i++){
			P[i].style.visibility = "visible";
		}

		description3 = true;
	}
	else if(description3 === true){
		Q3.style.background = "black";
		Q3.style.width = "unset";
		let arraylength = P.length;
		for (var i = 0; i < arraylength; i++){
			P[i].style.visibility = "hidden";
	}
		description3 = false;
	}
}

let description4 = false;
let details4 = function(){
	let Q4 = document.querySelector(".details4");
	let P = document.querySelector(".details4 p");

	if(description4 === false) {
		Q4.style.background = "grey";
		Q4.style.width = "300px";
		P.style.visibility = "visible";

		description4 = true;
	}
	else if(description4 === true){
		Q4.style.background = "black";
		Q4.style.width = "unset";
		P.style.visibility = "hidden";
	
		description4 = false;
	}
}

let description5 = false;
let details5 = function(){
	let Q5 = document.querySelector(".details5");
	let P = document.querySelector(".details5 p");

	if(description5 === false) {
		Q5.style.background = "grey";
		Q5.style.width = "300px";
		P.style.visibility = "visible";

		description5 = true;
	}
	else if(description5 === true){
		Q5.style.background = "black";
		Q5.style.width = "unset";
		P.style.visibility = "hidden";
	
		description5 = false;
	}
}
