var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var groupOfLi= document.querySelectorAll("li");
 	
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	
	li.classList.add("list-group-item", "d-flex", "justify-content-between");
	
	// 3. BONUS: if a new list-group-item item is added, it automatically adds the delete button next to it. 
	li.appendChild(addDeleteButton(li));

	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if(inputLength() > 0) 
	{
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if(inputLength() > 0 && event.keycode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// 1. If you click on the list item, it toggles the .done class on and off.
groupOfLi.forEach(function(li, i) {
	li.addEventListener("click", function(e) {
		li.classList.toggle('done');
	});	
		li.appendChild(addDeleteButton(li));
});

// 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.
function addDeleteButton(li) {
	var btnDelete= document.createElement("button");
	btnDelete.appendChild(document.createTextNode("Delete"));
	btnDelete.classList.add("btn","btn-danger");

	btnDelete.addEventListener("click", function(e) {
		// if (promptDelete() === "true") {
		e.target.parentElement.parentElement.removeChild(li);
		// }
	});
	return btnDelete;
}