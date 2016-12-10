define('Lazy', ['lazyload'], function() {
	jQuery(document).ready(function($) {
		$("img.lazy").lazyload({
			threshold: 300,
			effect: "fadeIn"
		});
	})
});