var events = [
{
	"image":"http://placehold.it/400x200",
	"title":"Grade Abe"
},
{
	"image":"http://placehold.it/300x200",
	"title":"Grader Abe"
},
{
	"image":"http://placehold.it/500x400",
	"title":"Gradest Abe"
}];

function onSlide(event,ui) {
	var scalar = ui.value / 100.01;
	var eventNumber = Math.floor(scalar * (events.length));
	displayEvent(eventNumber);
}

function displayEvent (eventNumber) {
	for (var i = 0; i < eventContainers.length; i++) {
		eventContainers[i].removeClass('displayed');
	}
	eventContainers[eventNumber].addClass('displayed');
}



var scrollBarContainer = $('#scroll-bar-container');
scrollBarContainer.slider();
scrollBarContainer.on('slide',onSlide);
var contentContainer = $('#content-container');
var eventContainers = [];


for (var i = 0; i < events.length; i++) {

	eventContainers.push($('<div class="event-content-container"></div>'));
	var image = $('<img src="' + events[i].image + '">');
	var title = $('<p>' + events[i].title + '</p>');

	eventContainers[i].append(image);
    eventContainers[i].append(title);
    contentContainer.append(eventContainers[i]);


};


