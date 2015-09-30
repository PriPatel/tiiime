var events = [
{
	"image":"http://placehold.it/400x200",
	"title":"Grade Abe"
}];

var scrollBarContainer = $('#scroll-bar-container');
scrollBarContainer.slider();
var contentContainer = $('#content-container');
var image = $('<img src="' + events[0].image + '">');
contentContainer.append(image);
