$(document).ready(function(){
		$('.potfolio-btn[filter]').click(function(){
			if ($(this).attr('val') == 'off'){
				$('.potfolio-btn[filter]').attr('val', 'off').removeClass('focused');
				$(this).attr('val', 'on').addClass('focused');
				$('.filter > div').hide(300);
				$('.filter > div[filter =' + $(this).attr('filter') + ']').show(300);
				if ($(this).attr('filter')=='all'){
					$('.potfolio-btn[filter]').attr('val', 'off').removeClass('focused');
					$(this).attr('val', 'on').addClass('focused');
					$('.filter > div').show(300);
				}
			}
		})
	$('.opinion-slider').slick();

	$('.services-slider').slick({
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

});