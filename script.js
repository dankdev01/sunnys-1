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

function switchMe(event) {
	event.preventDefault();
	if (event.currentTarget.id === 'drink-link') {
		clearContainer(menuContainer);
		menuContainer.appendChild(drinks);
		drinks.style.display = 'Block';
	} else if (event.currentTarget.id === 'bfast-link') {
		clearContainer(menuContainer);
		menuContainer.appendChild(breakfasts);
		breakfasts.style.display = 'Block';
	} else if (event.currentTarget.id === 'lunch-link') {
		clearContainer(menuContainer);
		menuContainer.appendChild(lunches);
		lunches.style.display = 'Block';
	} else if (event.currentTarget.id === 'salad-link') {
		clearContainer(menuContainer);
		menuContainer.appendChild(salads);
		salads.style.display = 'Block';
	} else if (event.currentTarget.id === 'panini-link') {
		clearContainer(menuContainer);
		menuContainer.appendChild(paninis);
		paninis.style.display = 'Block';
	} else {
		return false;
	}
} 