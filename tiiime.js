var events = [
{
	"image":"http://placehold.it/400x200",
	"title":"Grade Abe"
},
{
	"image":"http://placehold.it/300x200",
	"title":"Grader Abe"
}];

var scrollBarContainer = $('#scroll-bar-container');
scrollBarContainer.slider();
var contentContainer = $('#content-container');
var image = $('<img src="' + events[1].image + '">');
var title = $('<p>' + events[1].title + '</p>');
contentContainer.append(image);
contentContainer.append(title);


