$('#side').html('<img src="ajax-loader.gif" align="middle">');

$.ajax({
	url: 'load_tweets.php',
	success: function(res) {
		$('#side').html(res);
	},
});

////////////////////////////

var center = new google.maps.LatLng(36.05178307933835, 42.49737373046878);
var myOptions = {
	zoom: 2,
	center: center,
	mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map = new google.maps.Map(document.getElementById('map'), myOptions);

///////////////////////////

var script = document.createElement('script');
script.src = "http://api.eventful.com/json/events/search?c=music&app_key=h3FDj2fF9TkqbTv4&page_number=1&date=Future&keywords=calvin+harris&callback=getEvents";
document.getElementsByTagName('head')[0].appendChild(script);

function getEvents(data) {
	console.log(data);
	var templateString = $('#event-template').html();
	var template = Handlebars.compile(templateString);
	var html = "";

	for (i=0; i<data.events.event.length; i=i+1){
		html = html + "<div class='number'>" + (i+1) + ".</div>" + template(data.events.event[i]);
	
		var marker = new google.maps.Marker({
		position: new google.maps.LatLng(data.events.event[i].latitude, data.events.event[i].longitude),
		 title: data.events.event[i].title
		 });
		 marker.setMap(map);
	
	}
	
	$('#events_section').html(html);
}