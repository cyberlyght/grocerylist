/*
 * Author: David Sampson
 * Date: 07/10/2020
 */

function loadGroceryList() {

	if (this.readyState === XMLHttpRequest.DONE) {
		if (this.status === 200) {

			const groceryList = JSON.parse(this.response);
			let tilesElement = document.getElementById('groceryList');

			groceryList.forEach(function(item, index){
				let groceryItemHTML = '<div class="groceryItemQuantity accent">QTY: ' + item.qty + '</div>';
				groceryItemHTML += '<div class="groceryItemName">' + item.item + '</div>';
				groceryItemHTML += '<div class="groceryItemDescription">' + item.brand + ' ' + item.type + '</div>';
				groceryItemHTML += '<div class="groceryItemCategory accent">' + item.category + '</div>';
				
				let groceryItemElement = document.createElement('div');
				groceryItemElement.setAttribute('class', 'groceryItem');
				groceryItemElement.innerHTML = groceryItemHTML;

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


if (document.readyState === 'loading') {

	document.addEventListener('DOMContentLoaded', function () {
		getJSON('data/groceries.json', loadGroceryList);
	});

} else {

	getJSON('data/groceries.json', loadGroceryList);

}
