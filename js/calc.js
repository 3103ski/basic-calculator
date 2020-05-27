// create DOM variabls
const display = document.querySelector('.input');

let mustReplace = true;
let operatorEngaged = false;
let decimal = false;
let percent = false;
let pressedEquals = false;

let number1 = 0;
let number2 = 0;
let currOperator = '';

// clear results
const appendDigit = (newDigit) => {
	if (mustReplace && newDigit !== '0' && newDigit != '.') {
		display.innerHTML = newDigit;
		decimal = false;
		mustReplace = false;
	} else if (newDigit == '.' && decimal == false) {
		display.innerHTML = display.innerHTML + newDigit;
		mustReplace = false;
		decimal = true;
	} else if (!mustReplace && newDigit != '.') {
		display.innerHTML = display.innerHTML + newDigit;
	}
};

const resetDisplay = () => {
	number1 = '0';
	display.innerHTML = number1;
	mustReplace = true;
	pressedEquals = false;
	decimal = false;
	percent = false;
	operatorEngaged = false;
	currOperator = '';
};

const engageOperator = (operator) => {
	mustReplace = true;
	operatorEngaged = true;
	if (number1 != 0 && pressedEquals == false && percent == false) {
		currOperator = operator;
		showResult();
		number1 = parseFloat(display.innerHTML);
	} else if (operator == '%' && percent == false) {
		currOperator = operator;
		number1 = parseFloat(display.innerHTML);
		showResult();
		currOperator = '';
		percent = true;
	} else if (currOperator == '%' && percent == true) {
		currOperator = operator;
		showResult();
	} else {
		currOperator = operator;
	}
	number1 = parseFloat(display.innerHTML);
};

const showResult = () => {
	let result;
	switch (currOperator) {
		case '+':
			result = number1 + parseFloat(display.innerHTML);
			break;
		case '-':
			result = number1 - parseFloat(display.innerHTML);
			break;
		case '*':
			result = number1 * parseFloat(display.innerHTML);
			break;
		case '/':
			result = number1 / parseFloat(display.innerHTML);
			break;
		case '%':
			result = number1 / 100;
			break;
	}
	operatorEngaged = false;
	percent = false;
	decimal = false;
	display.innerHTML = result;
};

const equalsign = () => {
	pressedEquals = true;
	showResult();
};

const flipSign = () => {
	num = display.innerHTML;
	if (num[0] != '-' && num !== '0') {
		display.innerHTML = '-' + num;
	} else if (num[0] == '-' && num !== '0') {
		display.innerHTML = num.substr(1);
	}
};
