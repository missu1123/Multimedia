function add()
{
	var inputElement = getInputElement("inputText");
	var userString = inputElement.value;

	localStorage.setItem("userText" , userString);

}

var jsArray = ["con cac", "cai loz"];

function getInputElement()
{
	return document.getElementById("inputText");
}


function load()
{
	var inputElement = getInputElement();
	inputElement.value = localStorage.getItem("userText");

}