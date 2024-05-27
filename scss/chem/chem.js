let operand1 = '';
let operand2 = '';
let operator = '';
let result = '';

function clearScreen() {
	operand1 = '';
	operand2 = '';
	operator = '';
	result = '';
	document.getElementById('result').value = '';
}

function display(value) {
	document.getElementById('result').value += value;
}