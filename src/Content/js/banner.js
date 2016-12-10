var banner = require('../css/banner.less');
define('banner',['swiper'], function(swiper) {
	$(function(){
		wscreen = function() {
			var windowhegiht = window.innerWidth / 720;
			var bannerheght = windowhegiht * 640;
			if(window.innerWidth <= 720) {
				$(".banner").height(bannerheght)
			}
		};
		wscreen();
		$(window).resize(function() {
			wscreen();
		});
		var swiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			slidesPerView: 1,
			paginationClickable: true,
			spaceBetween: 30,
			loop: true,
			spaceBetween: 30,
			keyboardControl: true,
			centeredSlides: true,
			autoplay: 2500,
			autoplayDisableOnInteraction: false
		});
	});
	
});