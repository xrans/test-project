var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("button");
setGradient();
function setGradient()
{
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	
	css.textContent = body.style.background + ";";

}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
button.addEventListener("click", function(){
	var liczba1 = "#"+  Math.floor((Math.random() * 255) + 0).toString(16) + Math.floor((Math.random() * 255) + 0).toString(16) + Math.floor((Math.random() * 255) + 0).toString(16);
	var liczba2 =  "#"+ Math.floor((Math.random() * 255) + 0).toString(16) + Math.floor((Math.random() * 255) + 0).toString(16) + Math.floor((Math.random() * 255) + 0).toString(16);
	body.style.background = "linear-gradient(to right, " + liczba1 + ", " + liczba2 + ")";
	
	css.textContent = body.style.background + ";";

	// var liczba1 =  Math.floor((Math.random() * 255) + 0).toString(16) + Math.floor((Math.random() * 255) + 0).toString(16) + Math.floor((Math.random() * 255) + 0).toString(16);
	// var liczba2 =  Math.floor((Math.random() * 255) + 0).toString(16) + Math.floor((Math.random() * 255) + 0).toString(16) + Math.floor((Math.random() * 255) + 0).toString(16);
	// console.log(liczba1 + liczba2);
	// body.style.background = "linear-gradient(to right, " + liczba1 + liczba2 + ")";
	// console.log(body.style.background);
	// css.textContent = body.style.background + ";";

})