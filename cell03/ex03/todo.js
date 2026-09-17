const list = document.getElementById("ft_list");

// https://developer.chrome.com/blog/cookie-max-age-expires/
const save = () => {
	const todos = [...list.children].map((todo) => todo.textContent);
	document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + ";path=/;max-age=63158400";
};

const add = (text) => {
	const todo = document.createElement("div");
	todo.textContent = text;
	todo.addEventListener("click", () => {
		if (confirm("Are you sure you want to remove this item?")) {
			todo.remove();
			save();
		}
	});
	list.prepend(todo);
};

document.getElementById("new-button").addEventListener("click", () => {
	const text = prompt("New TO DO:");
	if (text === null || text.trim() === "") return;
	add(text);
	save();
});

const match = document.cookie.match(/(?:^|; )todos=([^;]*)/);

if (match) {
	JSON.parse(decodeURIComponent(match[1])).reverse().forEach(add);
}
