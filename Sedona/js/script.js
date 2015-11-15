	var link = document.querySelector(".search-title-block");
	var searchForm = document.querySelector(".search-form");
	var form = searchForm.querySelector("form");
	var dateInField = form.querySelector("[name=date-in]")

	var adultPlus = form.querySelector("[name=plus-adults]");
	var adultMinus = form.querySelector("[name=minus-adults]");
	var adultField = form.querySelector("[name=adults]")

	var childPlus = form.querySelector("[name=plus-children]");
	var childMinus = form.querySelector("[name=minus-children]");
	var childField = form.querySelector("[name=children]")

	link.addEventListener("click", function(event) {
		if (searchForm.classList.contains("search-form-show")) {
			searchForm.classList.remove("search-form-show");
		} else {
			searchForm.classList.add("search-form-show");
			dateInField.focus();
		}
	});

	adultPlus.addEventListener("click", function(event){
		if(adultField.value == 8)
			return;

		adultField.value = ++adultField.value;
	});

	adultMinus.addEventListener("click", function(event){
		if(adultField.value == 1)
			return;

		adultField.value = --adultField.value;
	});

	childPlus.addEventListener("click", function(event){
		if(childField.value == 8)
			return;

		childField.value = ++childField.value;
	});

	childMinus.addEventListener("click", function(event){
		if(childField.value == 0)
			return;

		childField.value = --childField.value;
	});

	form.addEventListener("submit", function(event) {
		event.preventDefault();
	})
