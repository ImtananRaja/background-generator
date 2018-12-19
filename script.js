var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var Random = document.querySelector(".Random");


colorPick = (parentElem, theColor1, theColor2, type) => {
	if(type === "rgba"){
		var ui =parentElem.parentElement.style.background = 
		"linear-gradient(to right, rgba("
		+ theColor1 
		+ "), rgba("
		+ theColor2 
		+"))";
	}
	else {

		parentElem.parentElement.style.background = 
		"linear-gradient(to right, " 
		+ theColor1.value 
		+ ", "
		+ theColor2.value 
		+")";
	}

		parentElem.textContent = parentElem.parentElement.style.background + ";";
}

color1.addEventListener("input", function(){
	colorPick(css, color1, color2, false);
});


color2.addEventListener("input", function(){
	colorPick(css, color1, color2, false);
});

getRandomNum = () => {
	return Math.floor((Math.random() * 255));
}

Random.addEventListener("click", function(){
	var cal1 = getRandomNum();
	var cal2 = getRandomNum();
	var cal3 = getRandomNum();
	var cal4 = getRandomNum();
	var cal5 = getRandomNum();
	var cal6 = getRandomNum();

	var col1 = cal1+", "+cal2+", "+cal3+", 1";
	var col2 = cal4+", "+cal5+", "+cal6+", 1";

	colorPick(css, col1, col2, "rgba");

});