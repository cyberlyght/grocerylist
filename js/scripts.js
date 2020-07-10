function loadGroceryList() {

	if (this.readyState === XMLHttpRequest.DONE) {
		if (this.status === 200) {

			const groceryList = JSON.parse(this.response);
			let tilesElement = document.getElementById('groceryList');

			groceryList.forEach(function(item){
				let groceryItemHTML = '<div class="groceryItem">';
				groceryItemHTML += '<div class="groceryItemQuantity accent">QTY: ' + item.qty + '</div>';
				groceryItemHTML += '<div class="groceryItemName">' + item.item + '</div>';
				groceryItemHTML += '<div class="groceryItemDescription">' + item.brand + ' ' + item.type + '</div>';
				groceryItemHTML += '<div class="groceryItemCategory accent">' + item.category + '</div>';
				groceryItemHTML += '</div>';

				let tileElement = document.createElement('div');
				tileElement.setAttribute('class', 'tile');
				tileElement.innerHTML = groceryItemHTML;

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
