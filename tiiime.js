
var selectedEvents = placesEvents;
var eventContainers = [];
var scrollBarContainer = $('#scroll-bar-container');
var i=0
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
		"name":"Awards",
		"eventType":placesEvents
	},
	];


var button = $('<span class="button">' + groups[i].name + '</span>');


function onSlide(event,ui) {
	var scalar = ui.value / 100.01;
	var eventNumber = Math.floor(scalar * (selectedEvents.length));
	displayEvent(eventNumber);
}

function resetSlider() {
	scrollBarContainer.slider('value', 0);
}

function displayEvent(eventNumber) {
	for (var i = 0; i < eventContainers.length; i++) {
		eventContainers[i].removeClass('displayed');
	}
	eventContainers[eventNumber].addClass('displayed');
}

function init(eventType) {
	scrollBarContainer.slider();
	scrollBarContainer.on('slide',onSlide);

	setupEventContainers(eventType);
	setupNavigation();
}

function setupEventContainers(eventType){
	var contentContainer = $('#content-container');

	for (var i = 0; i < eventType.length; i++) {
		eventContainers.push($('<div class="event-content-container"></div>'));
		var image = $('<img src="' + eventType[i].image + '">');
		var title = $('<div class="title">' + eventType[i].title + '</div>');
		var date = $('<div class="date">' + eventType[i].date + '</div>');
		image.addClass('placeImages');

		eventContainers[i].append(image);
    	eventContainers[i].append(title);
    	eventContainers[i].append(date);
    	contentContainer.append(eventContainers[i]);


	}
	displayEvent(0);
}

function removeEventContainers(){
	var contentContainer = $('#content-container');
	eventContainers=[];
	contentContainer.empty();
}

function onClick (event){
	selectedEvents = $(event.currentTarget).data('group').eventType;
	removeEventContainers();
	resetSlider();
	setupEventContainers(selectedEvents);
	$(event.currentTarget).addClass('buttonselected');
}

function setupNavigation () {
	var navigationContainer = $('#navigation-container');

	

	for (var i = 0; i < groups.length; i++) {
		var button = $('<span class="button">' + groups[i].name + '</span>');
		button.data('group', groups[i]);
		navigationContainer.append(button);
		button.on('click', onClick);
	};
}

init(selectedEvents);

