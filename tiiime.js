var events = [
{
	"image":"piccys/UK.png",
	"title":"London HQ established",
	"date":"January 2006"
},
{
	"image":"piccys/aus.png",
	"title":"Re-seller agreement in Sydney",
	"date":"2009"
},
{
	"image":"piccys/paris.png",
	"title":"First international office opens in Paris",
	"date":"March 2010"
},
{
	"image":"piccys/UK.png",
	"title":"Unruly HQ moves from Truman Brewery to Fashion St",
	"date":"January 2011"
},
{
	"image":"piccys/US.png",
	"title":"New York and San Francisco offices open",
	"date":"February 2011"
},
{
	"image":"piccys/norway.png",
	"title":"Stockholm office opens",
	"date":"June 2011"
},
{
	"image":"piccys/gemrnay.png",
	"title":"Hamburg office opens",
	"date":"February 2012"
},
{
	"image":"piccys/US.png",
	"title":"Chicago office opens",
	"date":"April 2012"
},
{
	"image":"piccys/US.png",
	"title":"LA office opens",
	"date":"August 2012"
},
{
	"image":"piccys/US.png",
	"title":"Chicago office opens",
	"date":"April 2012"
},
{
	"image":"piccys/UK.png",
	"title":"Unruly HQ moves from Fashion St to Princelet St",
	"date":"June 2012"
},
{
	"image":"piccys/sweden.png",
	"title":"Oslo office opens",
	"date":"September 2013"
},
{
	"image":"piccys/APAV.png",
	"title":"APAC Regional HQ opens in Singapore",
	"date":"March 2014"
},
{
	"image":"piccys/southkorea.png",
	"title":"Enter S Korea via Re-seller",
	"date":"October 2014"
},
{
	"image":"piccys/dubai.png",
	"title":"Enter Dubai via re-seller",
	"date":"January 2015"
},
{
	"image":"piccys/aus.png",
	"title":"Sydney office opens ",
	"date":"April 2015"
},
];

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
	var title = $('<div class="title">' + events[i].title + '</div>');
	var date = $('<div class="date">' + events[i].date + '</div>');
	image.addClass('placeImages');

	eventContainers[i].append(image);
    eventContainers[i].append(title);
    eventContainers[i].append(date);
    contentContainer.append(eventContainers[i]);


};



