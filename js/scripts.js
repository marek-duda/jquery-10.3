$(function() {

    var $carouselList = $('#carousel ul'),
        $interval;
		

    function changeSlide() {
        $carouselList.animate({'margin-left': -700}, 500, moveFirstSlide);
    };

    function moveFirstSlide() {
        $firstItem = $carouselList.find('li:first'),
        $lastItem = $carouselList.find('li:last');
        $lastItem.after($firstItem);
        $carouselList.css({'margin-left': 0});
    };

    function startSlide() {
        $interval = setInterval(changeSlide, 2500);
    };

    startSlide();
	
});