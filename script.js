var menuContainer = document.getElementById('main-menu');
var drink = document.getElementById('drink-link');
var drinks = document.getElementById('drinks');
var breakfast = document.getElementById('bfast-link');
var breakfasts = document.getElementById('breakfast');
var lunch = document.getElementById('lunch-link');
var lunches = document.getElementById('lunch');
var salad = document.getElementById('salad-link');
var salads = document.getElementById('salads');
var panini = document.getElementById('panini-link');
var paninis = document.getElementById('paninis');

function clearContainer(elem) {
	elem.innerHTML = "";
}

drink.addEventListener("click", function(event){
	event.preventDefault();
	clearContainer(menuContainer);
	menuContainer.appendChild(drinks);
	drinks.style.display = 'Block';
});

breakfast.addEventListener("click", function(event){
	event.preventDefault();
	clearContainer(menuContainer);
	menuContainer.appendChild(breakfasts);
	breakfasts.style.display = 'Block';
});

lunch.addEventListener("click", function(event){
	event.preventDefault();
	clearContainer(menuContainer);
	menuContainer.appendChild(lunches);
	lunches.style.display = 'Block';
});

salad.addEventListener("click", function(event){
	event.preventDefault();
	clearContainer(menuContainer);
	menuContainer.appendChild(salads);
	salads.style.display = 'Block';
});

panini.addEventListener("click", function(event){
	event.preventDefault();
	clearContainer(menuContainer);
	menuContainer.appendChild(paninis);
	paninis.style.display = 'Block';
});