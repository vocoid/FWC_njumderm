const balloon = document.getElementById("balloon");
const colors = ["red", "green", "blue"];
let size = 200;
let color = 0;

const draw = () => {
	balloon.style.width = balloon.style.height = size + "px";
	balloon.style.backgroundColor = colors[color];
};

balloon.addEventListener("click", () => {
	size += 10;
	color = (color + 1) % colors.length;

	if (size > 420) {
		size = 200;
		color = 0;
	}

	draw();
});

balloon.addEventListener("mouseleave", () => {
	if (size <= 200) return;
	size = Math.max(200, size - 5);
	color = (color + colors.length - 1) % colors.length;
	draw();
});

draw();