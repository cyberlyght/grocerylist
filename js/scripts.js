/*
 * Author: David Sampson
 * Date: 07/10/2020
 */

// XMLHttpRequest callback: Parse JSON response and add elements to the page.
function loadGroceryList() {

	if (this.readyState === XMLHttpRequest.DONE) {
		if (this.status === 200) {

			const groceryList = JSON.parse(this.response);
			let tilesElement = document.getElementById('groceryList');

			// Create grocery item tiles for each item in the JSON response and add them to the tiles element.
			groceryList.forEach(function(item, index){

				let groceryItemHTML = '<div class="groceryItemQuantity accent">QTY: ' + item.qty + '</div>';
				groceryItemHTML += '<div class="groceryItemName">' + item.item + '</div>';
				groceryItemHTML += '<div class="groceryItemDescription">' + item.brand + ' ' + item.type + '</div>';
				groceryItemHTML += '<div class="groceryItemCategory accent">' + item.category + '</div>';
				
				let groceryItemElement = document.createElement('div');
				groceryItemElement.setAttribute('class', 'groceryItem slideFadeIn');
				groceryItemElement.innerHTML = groceryItemHTML;

				// Trigger animation on the grocery item element after a delay.
				setTimeout(function(){
					groceryItemElement.classList.remove('slideFadeIn');
				}, index*100+10);

				let tileElement = document.createElement('li');
				tileElement.setAttribute('class', 'tile');
				tileElement.appendChild(groceryItemElement);

				tilesElement.appendChild(tileElement);
			});

		} else {

			alert('Could not load grocery list.');

		}
	}

}


// Get specified JSON file and execute callback function.
function getJSON(filePath, callback) {

	let httpRequest = new XMLHttpRequest();

	if (!httpRequest) {
		alert('Cannot create an XMLHTTP instance');
		return false;
	}

	httpRequest.onreadystatechange = callback;
	httpRequest.open('GET', filePath);
	httpRequest.send();

}


// If document is already ready, get JSON data now, otherwise, do it on ready.
if (document.readyState === 'loading') {

	document.addEventListener('DOMContentLoaded', function () {
		getJSON('data/groceries.json', loadGroceryList);
	});

} else {

	getJSON('data/groceries.json', loadGroceryList);

}
