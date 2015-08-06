var a = new Date();
var date = a.getHours();

if (date < 17) {
	$("body").css("background-image" , "url('city.jpg')");
	$("body").css("background-size" , "cover");
}
else {
	$("body").css("background-image" , "url('nightSky.jpg')");
	$("body").css("background-size" , "cover");
}
