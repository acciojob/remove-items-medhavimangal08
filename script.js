let button = document.querySelector("input");
let selectmain = document.querySelector("#colorSelect");
button.addEventListener("click", remove)
function remove(e) {
	let optiontoremove=selectmain.options[selectmain.selectedIndex];
	selectmain.removeChild(optiontoremove);
}

