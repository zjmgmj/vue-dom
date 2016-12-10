$(window).scroll(function() {
	var wwidth = window.innerWidth;
	if(wwidth > 760) {
		if($(window).scrollTop() >= 50) {
			$(".product-nav").addClass("fixedNav");
		} else {
			$(".product-nav").removeClass("fixedNav");
		}
	}
});
