$(function () {
	var $list = $("#ft_list");

	var save = function () {
		var todos = $list.children().map(function () { return $(this).text(); }).get();
		
		document.cookie ="todos=" + encodeURIComponent(JSON.stringify(todos)) + ";path=/;max-age=63158400";
	};

	var add = function (text) {
		$("<div></div>")
			.text(text)
			.on("click", function () {
				if (confirm("Are you sure you want to remove this item?")) {
					$(this).remove();
					save();
				}
			})
			.prependTo($list);
	};

	$("#new-button").on("click", function () {
		var text = prompt("New TO DO:");
		if (text === null || $.trim(text) === "") return;
		add(text);
		save();
	});

	var match = document.cookie.match(/(?:^|; )todos=([^;]*)/);

	if (match) {
		$.each(JSON.parse(decodeURIComponent(match[1])).reverse(), function (_, todo) {
			add(todo);
		});
	}
});
