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

$(function() {
	var w = $(window).width();
	if (w < 1000) {
		$('#content').addClass('content-small');
	}
});

$(window).resize(function() {
	var w = $(window).width();
	if (w < 1000) {
		$('#content').addClass('content-small');
	}
	else {$('#content').removeClass('content-small');
	}
});

$(function() {
	var h = $(window).height();
	if (h < 768) {
		$('#footer').addClass('footer-small');
	}
});

$(window).resize(function() {
	var h = $(window).height();
	if (h < 768) {
		$('#footer').addClass('footer-small');
	}
	else {$('#footer').removeClass('footer-small');
	}
});

 /*carousel buttons*/
 /*$(".leftbutton").click(function() {
	if ()
	$(".slidelist").css()
 })*/
 
