/*var a = new Date();
var date = a.getHours();

if (date < 2) {
	$("body").css("background-image" , "url('0.jpg')");
	$("body").css("background-size" , "cover");
}
else if (date < 4) {
	$("body").css("background-image" , "url('1.jpg')");
	$("body").css("background-size" , "cover");
}
else if (date < 6) {
	$("body").css("background-image" , "url('2.jpg')");
	$("body").css("background-size" , "cover");
}
else if (date < 8) {
	$("body").css("background-image" , "url('3.jpg')");
	$("body").css("background-size" , "cover");
}
else if (date < 10) {
	$("body").css("background-image" , "url('4.jpg')");
	$("body").css("background-size" , "cover");
}
else if (date < 12) {
	$("body").css("background-image" , "url('6.jpg')");
	$("body").css("background-size" , "cover");
}
else if (date < 14) {
	$("body").css("background-image" , "url('6.jpg')");
	$("body").css("background-size" , "cover");
}
else if (date < 16) {
	$("body").css("background-image" , "url('7.jpg')");
	$("body").css("background-size" , "cover");
}
else if (date < 18) {
	$("body").css("background-image" , "url('8.jpg')");
	$("body").css("background-size" , "cover");
}
else if (date < 20) {
	$("body").css("background-image" , "url('9.jpg')");
	$("body").css("background-size" , "cover");
}
else if (date < 22) {
	$("body").css("background-image" , "url('day.jpg')");
	$("body").css("background-size" , "cover");
}
else {
	$("body").css("background-image" , "url('night2.jpg')");
	$("body").css("background-size" , "cover");
};*/


/*$(function(){
     
    var picsArray = new Array();
     
    picsArray[0]="0.jpg";
    picsArray[1]="1.jpg";
    picsArray[2]="2.jpg";
    picsArray[3]="3.jpg";
    picsArray[4]="4.jpg";
    picsArray[5]="5.jpg";
    picsArray[6]="6.jpg";
    picsArray[7]="7.jpg";
    picsArray[8]="8.jpg";
    picsArray[9]="9.jpg";

    var thisId = 0;

    window.setInterval(function(){
        $("body").css("background-image", "url('"+picsArray[thisId]+"')");
        $("body").css("background-size" , "cover");
        thisId++;
        if (thisId == 10) thisId = 0;
    },20000);        
 });*/
 
 
 /*carousel buttons*/
 /*$(".leftbutton").click(function() {
	if ()
	$(".slidelist").css()
 })*/
 
 var slideWidth = 1000;
 
 var slideToggle = function(dir) {
	var container = $('.slide-container');
	var slider = $('.slide-list', container);
	var active = $('.slide-item.active', container);

	if ('right' == dir) {
		var next = active.next('.slide-item');
		if (next.size()) {
			var leftCurrent = slider.css("left").replace('px','');
			var leftNew = parseInt(leftCurrent) - slideWidth;
			slider.css({ 'left': leftNew+'px' });
			active.removeClass('active');
			next.addClass('active');
		}
		else {
			slider.css({ 'left': 0 });
			active.removeClass('active');
			$('.slide-item:first').addClass('active');
		}
	}
	else {
		var next = active.prev('.slide-item');
		if (next.size()) {
			var leftCurrent = slider.css("left").replace('px','');
			var leftNew = parseInt(leftCurrent) + slideWidth;
			slider.css({ 'left': leftNew+'px' });
			active.removeClass('active');
			next.addClass('active');
		}
		else {
			var slideTotal = $('.slide-item').size();
			var leftNew = -(slideTotal - 1) * slideWidth;
			slider.css({ 'left': leftNew+'px' });
			active.removeClass('active');
			$('.slide-item:last').addClass('active');
		}
	}
 }
 
$(function() {
	$('.slide-container')
	.on('click', '.slide-left', function() { slideToggle('left'); })
	.on('click', '.slide-right', function() { slideToggle('right'); });
	
	var sliderRotator;	
	var sliderInit = function() {
		sliderRotator = setInterval(function() { slideToggle('right'); }, 3000);
	};
	
	sliderInit();
});