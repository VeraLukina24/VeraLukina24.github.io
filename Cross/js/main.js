$(function() {
	$('.comments__slider').slick({
		 arrows: false
	});

	$('.nav_wr__btn-menu').click( function(){
		$('nav').slideToggle();			
	});
});