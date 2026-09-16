const form = document.getElementById("calc");
const left = document.getElementById("left");
const right = document.getElementById("right");
const operator = document.getElementById("operator");

const isPositiveInteger = (value) => /^\d+$/.test(value.trim());

form.addEventListener("submit", (event) => {
	event.preventDefault();

	if (!isPositiveInteger(left.value) || !isPositiveInteger(right.value)) {
		alert("Error :(");
		return;
	}

	const a = Number(left.value);
	const b = Number(right.value);
	let result;

	if ((operator.value === "/" || operator.value === "%") && b === 0) {
		alert("It's over 9000!");
		return;
	}

	switch (operator.value) {
		case "+":
			result = a + b;
			break;
		case "-":
			result = a - b;
			break;
		case "*":
			result = a * b;
			break;
		case "/":
			result = a / b;
			break;
		default:
			result = a % b;
	}

	alert(result);
	console.log(result);
});
