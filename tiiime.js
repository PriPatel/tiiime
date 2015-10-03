
var eventContainers = [];

function onSlide(event,ui) {
	var scalar = ui.value / 100.01;
	var eventNumber = Math.floor(scalar * (placesEvents.length));
	displayEvent(eventNumber);
}

function displayEvent(eventNumber) {
	for (var i = 0; i < eventContainers.length; i++) {
		eventContainers[i].removeClass('displayed');
	}
	eventContainers[eventNumber].addClass('displayed');
}


function init() {
	var scrollBarContainer = $('#scroll-bar-container');
	scrollBarContainer.slider();
	scrollBarContainer.on('slide',onSlide);
	var contentContainer = $('#content-container');

	for (var i = 0; i < placesEvents.length; i++) {
		eventContainers.push($('<div class="event-content-container"></div>'));
		var image = $('<img src="' + placesEvents[i].image + '">');
		var title = $('<div class="title">' + placesEvents[i].title + '</div>');
		var date = $('<div class="date">' + placesEvents[i].date + '</div>');
		image.addClass('placeImages');

		eventContainers[i].append(image);
    	eventContainers[i].append(title);
    	eventContainers[i].append(date);
    	contentContainer.append(eventContainers[i]);
	}
	setupNavigation();
}

init();



function setupNavigation () {
	var navigationContainer = $('#navigation-container');
	var groups = [{
		"name":"Places",
		"eventType":placesEvents
	},
	{
		"name":"People",
		"eventType":peopleEvents

	},
	{
		"name":"Products",
		"eventType":productEvents
	},
	{
		"name":"Awards"
	},
	];

	for (var i = 0; i < groups.length; i++) {
		var button = $('<span class="button">' + groups[i].name + '</span>');
		navigationContainer.append(button);

		function doSomething() {
			alert("bastard");
		}

		button.click(doSomething);

	};

}











