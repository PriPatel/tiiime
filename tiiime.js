
var eventContainers = [];

function onSlide(event,ui) {
	var scalar = ui.value / 100.01;
	var eventNumber = Math.floor(scalar * (xyz.length));
	displayEvent(eventNumber);
}

function displayEvent(eventNumber) {
	for (var i = 0; i < eventContainers.length; i++) {
		eventContainers[i].removeClass('displayed');
	}
	eventContainers[eventNumber].addClass('displayed');
}


function init(xyz) {
	var scrollBarContainer = $('#scroll-bar-container');
	scrollBarContainer.slider();
	scrollBarContainer.on('slide',onSlide);
	var contentContainer = $('#content-container');

	for (var i = 0; i < productEvents.length; i++) {
		eventContainers.push($('<div class="event-content-container"></div>'));
		var image = $('<img src="' + xyz[i].image + '">');
		var title = $('<div class="title">' + xyz[i].title + '</div>');
		var date = $('<div class="date">' + xyz[i].date + '</div>');
		image.addClass('placeImages');

		eventContainers[i].append(image);
    	eventContainers[i].append(title);
    	eventContainers[i].append(date);
    	contentContainer.append(eventContainers[i]);
	}
	//setupNavigation();
}














//function setupNavigation () {
//	var navigationContainer = $('#navigation-container');
//}
	//var groups = [{
	//	"name":"Places",
	//	"eventType":placesEvents
	//},
	//{
	//	"name":"People",
	//	"eventType":peopleEvents

	//},
	//{
	//	"name":"Products",
	//	"eventType":productEvents
	//},
	//{
	//	"name":"Awards",
	//	"eventType":placesEvents
	//},
	//];
	//}

	//for (var i = 0; i < groups.length; i++) {
		//var button = $('<span class="button">' + groups[i].name + '</span>');
	   // button.value=[i];
		//navigationContainer.append(button);
		//button.click(function doSomething(){
		//	console.log(button.value);
		//});


	//};









