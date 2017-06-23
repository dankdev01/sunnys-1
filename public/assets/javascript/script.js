(function() {
	'use strict';

	document.addEventListener('DOMContentLoaded', launch());

	function launch() {
		getData();
	}

	function getData() {
		var req = new XMLHttpRequest();
		var response = req.response;
		req.open('GET', 'data.json', true);
		req.setRequestHeader("Content-type", "application/json");
		req.onreadystatechange = function() {
			if (req.readyState == 4 && req.status == 200) {
				var response = JSON.parse(req.responseText);
				loopMenu(response["paninis"]);
				return response;
			}
		}
		req.send();
	}

	function loopMenu(response) {
		var menu = document.getElementById("menu-list");
		response.forEach(function(res) {
			menu.appendChild(menuItem(res));
		})
	}

	function menuItem(object) {
		var itemContainer = document.createElement('div');
		var itemName = document.createElement('h4');
		var itemDescription = document.createElement('p');
		var itemPrice = document.createElement('h4');

		itemName.className = "col-sm-10";
		itemPrice.className = "col-sm-2";

		itemDescription.classList.add("menu-item-description");
		itemDescription.classList.add("col-md-12");

		itemContainer.classList.add("menu-container");
		itemContainer.classList.add("col-sm-5");
		
		itemContainer.appendChild(itemName);
		itemContainer.appendChild(itemPrice);
		itemContainer.appendChild(itemDescription);

		itemName.innerHTML = object.name;
		itemPrice.innerHTML = object.price;
		itemDescription.innerHTML = object.description;

		return itemContainer;
	}

})();
