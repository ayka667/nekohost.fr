
//Hero Slider
$(".hero_slider").bxSlider({
        pagerCustom: '#bx-pager',
    	controls:true,
    	pager: 'true',
    	auto:false,
        touchEnabled: false,
        swipeThreshold: 100,
        oneToOneTouch: true,
        preventDefaultSwipeX: true
  	});   

$('.preview_panel').bxSlider({
  auto: true,
  controls: false,
  autoControls: false,
  touchEnabled: true,
  stopAutoOnClick: true,
  pager: false,
});


  $('.reviews_s').bxSlider({
    slideWidth: 500,
    minSlides: 2,
    maxSlides: 4,
    moveSlides: 1,
    pager: false,
    auto: true
  });