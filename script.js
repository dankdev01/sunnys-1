/* onclick of a menu-link
	remove current menu

   show menu pertaining to that link */


// Adding Google Maps API w/ Marker
// function initMap() {
// 	var uluru = { lat: -25.363, lng: 131.044 };
// 	var map = new google.maps.Map(document.getElementById('map'), {
// 		zoom: 4,
// 		center: uluru
// 	});
// 	var maker = new google.maps.Marker({
// 		position: uluru,
// 		map: map
// 	});
// }


function showDrinks(e) {
	console.log("I have been clicked");
	var drinks = document.getElementById('drinks');
	console.log(drinks.getAttribute("id"));
	drinks.style.display = "inherit";
}

function showBreakfast(e) {
	console.log("Breakfast has been clicked");
	var breakfast = document.getElementById('breakfast');
	console.log(breakfast.getAttribute("id"));
	breakfast.style.display = "inherit";
}

