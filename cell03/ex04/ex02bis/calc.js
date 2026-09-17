$(function () {
	var $left = $("#left");
	var $right = $("#right");
	var $operator = $("#operator");

	var isPositiveInteger = function (value) {
		return /^\d+$/ .test($.trim(value));
	};

	$("#calc").on("submit", function (event) {
		event.preventDefault();

		if (!isPositiveInteger($left.val()) || !isPositiveInteger($right.val())) {
			alert("Error :(");
			return;
		}

		var a = Number($left.val());
		var b = Number($right.val());
		var result;

		if (($operator.val() === "/" || $operator.val() === "%") && b === 0) {
			alert("It's over 9000!");
			return;
		}

		switch ($operator.val()) {
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
	});
});
