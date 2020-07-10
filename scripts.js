function loadGroceryList() {
	if (this.readyState === XMLHttpRequest.DONE) {
		if (this.status === 200) {
			const groceryListObj = this.response;
			console.log('groceryListObj');
		} else {
			alert('Could not load grocery list.');
		}
	}
}

function getJSON(filePath, callback) {
	var httpRequest = new XMLHttpRequest();

	if (!httpRequest) {
		alert('Cannot create an XMLHTTP instance');
		return false;
	}
	httpRequest.onreadystatechange = callback;
	httpRequest.open('GET', filePath);
	request.responseType = 'json';
	httpRequest.send();
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', function () {
		getJSON('groceries.json', loadGroceryList);
	});
} else {
	getJSON('groceries.json', loadGroceryList);
}
