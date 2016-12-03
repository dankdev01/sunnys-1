var menuContainer = document.getElementById('main-menu');
var drinks = document.getElementById('drinks');
var breakfast = document.getElementById('bfast-link');
var breakfasts = document.getElementById('breakfast');
var lunches = document.getElementById('lunch');
var salads = document.getElementById('salads');
var paninis = document.getElementById('paninis');

function clearContainer(elem) {
	elem.innerHTML = "";
}

// Brings back a node list which can be traversed like an XML file
var linkClass = document.getElementsByClassName("item-links");

function getId(e) {
	e.preventDefault();
	var attribute = this.getAttribute("id");
	console.log(attribute);
	switchMenu(attribute);
}

for (var i = 0; i < linkClass.length; i += 1) {
	linkClass[i].addEventListener('click', getId, false);
}

function switchMenu(attr) {
	switch (attr) {
		case "drink-link":
			clearContainer(menuContainer);
			menuContainer.appendChild(drinks);
			drinks.style.display = 'Block';
			break;
		case "bfast-link":
			clearContainer(menuContainer);
			menuContainer.appendChild(breakfasts);	
			breakfasts.style.display = 'Block';
			break;
		case "lunch-link":
			clearContainer(menuContainer);
			menuContainer.appendChild(lunches);
			lunches.style.display = 'Block';
			break;
		case "salad-link":
			clearContainer(menuContainer);
			menuContainer.appendChild(salads);
			salads.style.display = 'Block';
			break;
		case "panini-link":
			clearContainer(menuContainer);
			menuContainer.appendChild(paninis);
			paninis.style.display = 'Block';
			break;
		default: 
			console.log("This should not appear ever");
	}
}



