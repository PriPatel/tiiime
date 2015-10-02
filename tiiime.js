var eventContainers = [];

function onSlide(event,ui) {
	var scalar = ui.value / 100.01;
	var eventNumber = Math.floor(scalar * (events.length));
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

	for (var i = 0; i < events.length; i++) {
		eventContainers.push($('<div class="event-content-container"></div>'));
		var image = $('<img src="' + events[i].image + '">');
		var title = $('<div class="title">' + events[i].title + '</div>');
		var date = $('<div class="date">' + events[i].date + '</div>');
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
		"name":"a"
	},
	{
		"name":"b"
	},
	{
		"name":"c"
	},
	{
		"name":"d"
	},
	];

	for (var i = 0; i < groups.length; i++) {
		var button = $('<div class="button">' + groups[i].name + '</div>');
		navigationContainer.append(button);
	};

}

