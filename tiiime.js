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
	console.log(ui.value);
	
}

var scrollBarContainer = $('#scroll-bar-container');
scrollBarContainer.slider();
scrollBarContainer.on('slide',onSlide);
var contentContainer = $('#content-container');


for (var i = 0; i < events.length; i++) {

	var eventContentContainer = $('<div></div>');
	var image = $('<img src="' + events[i].image + '">');
	var title = $('<p>' + events[i].title + '</p>');
	eventContentContainer.append(image);
    eventContentContainer.append(title);
    contentContainer.append(eventContentContainer);

};


