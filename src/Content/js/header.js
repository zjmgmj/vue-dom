$(function() {
	var navmenu = $(".nav-menu");
	var hheight = window.innerHeight;
	var wweith = window.innerWidth;

	$(".nav-product a").bind('mouseover', function() {
		$(this).find('img').addClass("nav-menu-scale").removeClass("nav-menu-scale-back");
	});
	$(".nav-product a").bind('mouseleave', function() {
		$(this).find('img').removeClass("nav-menu-scale").addClass("nav-menu-scale-back");
	});
	$(".world").bind('mouseover', function() {
		$(".world-content").slideDown(100);
	});
	$(".world").bind('mouseleave', function() {
		$(".world-content").hide();
	});
	$("div.language").bind('click', function() {
		$(this).find("ul").slideToggle();
		$(this).addClass("language-bg");
	});
	$("div.language").bind('mouseleave', function() {
		$(this).find("ul").slideUp();
		$(this).removeClass("language-bg");
	});

	$("#navbar-toggle button").on("click", function() {

		$(".moble-nav").css('height', hheight - 60);
		$(".moble-nav").slideToggle();
		if($("button").hasClass("close")) {
			$("button").removeClass("close");
			$("html,body").removeClass("mask");

		} else {
			$("button").addClass("close");
			$("html,body").addClass("mask");
		}
	});
	$(".mobile-language-title").on('click', function() {
		if($(this).find('.arrow').hasClass('arrow-vertical')) {
			$(this).find('.arrow').removeClass("arrow-vertical").addClass("arrow-vertical-back");
			$(this).next('.mobile-language-content').slideUp(100);
		} else {
			$(this).find('.arrow').addClass("arrow-vertical").removeClass("arrow-vertical-back");
			$(this).next('.mobile-language-content').slideDown(100);
		}
	});

	$(".navmenu").on('click', function() {
		$(this).next(".nav-menu-li").slideToggle(300);
		if($(this).find('.nav-menu-icon').hasClass('nav-menu-rotate')) {
			$(this).find('.nav-menu-icon').removeClass("nav-menu-rotate").addClass("nav-menu-rotate-back");
		} else {
			$(this).find('.nav-menu-icon').addClass("nav-menu-rotate").removeClass("nav-menu-rotate-back");

		}
	});
	$(".nav-product-list-title").on('click', function() {
		$(this).nextAll('dt').slideToggle(300);
		if($(this).find('.nav-menu-icon').hasClass('nav-menu-rotate')) {
			$(this).find('.nav-menu-icon').removeClass("nav-menu-rotate").addClass("nav-menu-rotate-back");
		} else {
			$(this).find('.nav-menu-icon').addClass("nav-menu-rotate").removeClass("nav-menu-rotate-back");

		}
	});

//	var l = $("#gotoTop").offset().left;
//
//	function gotoTop(min_height) {
//		$("#gotoTop").click(function() {
//			$('html,body').animate({
//				scrollTop: 0
//			}, 500);
//			$(".func_box a:eq(0)").addClass("current")
//		}).hover(function() {
//			$(this).addClass("gotoTopHover");
//			$(".gotoTopTip").fadeIn()
//		}, function() {
//			$(this).removeClass("gotoTopHover");
//			$(".gotoTopTip").fadeOut()
//		});
//		min_height ? min_height = min_height : min_height = 100;
//		$(window).scroll(function() {
//			var s = $(window).scrollTop();
//			if(s > min_height) {
//				$("#gotoTop").fadeIn(100);
//				$("#gotoTop").css("position", "fixed");
//				$("#gotoTop").css("left", l)
//			} else {
//				$("#gotoTop").fadeOut(200)
//			}
//		})
//	};
//	var iE3 = !window.XMLHttpRequest;
//	if(iE3) {
//		document.getElementById("gotoTop").style.display = "none"
//	} else {
//		gotoTop()
//	}
});