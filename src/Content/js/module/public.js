var Public_zh = require('../../Content/css/public.less'),
fonts = require('../../Content/css/fonts.css');
$(function() {
/*	$("body").prepend('<header><nav class="navication"><div class="logo"><a href="/"><img src="/images/a02.png" alt="Airwheel Logo"></a></div><div id="navbar-toggle"><button><span></span><span></span><span></span></button><div class="moble-nav"><ul class="nav-menu"><li><a href="/">首页</a></li></ul><ul class="nav-menu"><li class="navmenu"><span>媒体中心</span><i class="nav-menu-icon">+</i></li><li class="nav-menu-li"><div class="nav-menu-content"><a href="/photos">图库</a> <a href="/videoList">视频</a></div></li></ul><ul class="nav-menu"><li class="navmenu"><span><a href="/product.html" target="_blank">产品</a></span><i class="nav-menu-icon">+</i></li><div class="nav-menu-li"><ul class="nav-menu-content"><li class="nav-product-list"><dl><dt class="nav-product-list-title"><span title="折叠电动车">Airwheel E系列</span><i class="nav-menu-icon">+</i></dt><dt><a href="/product/e6">Airwheel E6</a></dt><dt><a href="/product/e3">Airwheel E3</a></dt></dl><dl><dt class="nav-product-list-title"><span title="智能头盔">Airwheel C系列</span><i class="nav-menu-icon">+</i></dt><dt><a href="/product/c5">Airwheel C5</a></dt></dl></li><li class="nav-product-list"><dl><dt class="nav-product-list-title"><span title="助力电动车">Airwheel R系列</span><i class="nav-menu-icon">+</i></dt><dt><a href="/product/R3">Airwheel R3</a></dt><dt><a href="/product/R5">Airwheel R5</a></dt></dl><dl><dt class="nav-product-list-title"><span title="滑板车">Airwheel M系列</span><i class="nav-menu-icon">+</i></dt><dt><a href="/m3.html">Airwheel M3</a></dt></dl></li><li class="nav-product-list"><dl><dt class="nav-product-list-title"><span title="电动滑板车">Airwheel Z系列</span><i class="nav-menu-icon">+</i></dt><dt><a href="/z3.html">Airwheel Z3</a></dt><dt><a href="/product/z5">Airwheel Z5</a></dt><dt><a href="/product/z6">Airwheel Z6</a></dt></dl></li><li class="nav-product-list"><dl><dt class="nav-product-list-title"><span title="独轮摩托车,平衡车">Airwheel A系列</span><i class="nav-menu-icon">+</i></dt><dt><a href="/a3.html">Airwheel A3</a></dt></dl></li><li class="nav-product-list"><dl><dt class="nav-product-list-title"><span title="电动平衡车">Airwheel S系列</span><i class="nav-menu-icon">+</i></dt><dt><a href="/product/s8">Airwheel S8</a></dt><dt><a href="/s6.html">Airwheel S6</a></dt><dt><a href="/s5.html">Airwheel S5</a></dt><dt><a href="/s3.html">Airwheel S3</a></dt><dt><a href="/s3t.html">Airwheel S3T</a></dt></dl></li><li class="nav-product-list"><dl><dt class="nav-product-list-title"><span title="电动独轮车">Airwheel Q系列</span><i class="nav-menu-icon">+</i></dt><dt><a href="/q1.html">Airwheel Q1</a></dt><dt><a href="/q3.html">Airwheel Q3</a></dt><dt><a href="/q5.html">Airwheel Q5</a></dt></dl></li><li class="nav-product-list"><dl><dt class="nav-product-list-title"><span title="独轮电动车">Airwheel X系列</span><i class="nav-menu-icon">+</i></dt><dt><a href="/x3.html">Airwheel X3</a></dt><dt><a href="/x5.html">Airwheel X5</a></dt><dt><a href="/x6.html">Airwheel X6</a></dt><dt><a href="/x8.html">Airwheel X8</a></dt></dl></li></ul></div></ul><ul class="nav-menu"><li class="navmenu"><span>加盟合作</span><i class="nav-menu-icon">+</i></li><li class="nav-menu-li"><div class="nav-menu-content"><a href="/application.html">申请代理商</a> <a href="/channel.html">渠道合作</a> <a href="/styles-shortcodes.html">服务网点</a></div></li></ul><ul class="nav-menu"><li class="navmenu"><span>在线商城</span><i class="nav-menu-icon">+</i></li><li class="nav-menu-li"><div class="nav-menu-content"><a href="http://airwheel.tmall.com" target="_blank">天猫:Airwheel旗舰店</a> <a href="http://mall.jd.com/index-53160.html" target="_blank">京东:Airwheel官方旗舰店</a></div></li></ul><ul class="nav-menu"><li class="navmenu"><span>帮助与支持</span><i class="nav-menu-icon">+</i></li><li class="nav-menu-li"><div class="nav-menu-content"><a href="/styles-columns.html">学习秘籍</a> <a href="/styles-typography.html">售后保证</a> <a href="/fit.html">配件专区</a> <a href="/manual.html">电子说明书</a> <a href="/faq.html">Airwheel问题解答</a> <a href="/app.html">APP</a></div></li></ul><ul class="nav-menu"><li class="navmenu"><span>关于我们</span><i class="nav-menu-icon">+</i></li><li class="nav-menu-li"><div class="nav-menu-content"><a class="link" href="/newslist">Airwheel新闻</a> <a class="link" href="/wenhua.html">车车漫画</a> <a class="link" href="/portfolio.html">公司简介</a> <a class="link" href="/portfolio-3cols.html">国际认证</a> <a class="link" href="/job.html">加入我们</a></div></li></ul><ul class="nav-menu"><li><a href="/blog.html">联系我们</a></li></ul><ul class="nav-menu"><li><a href="/fake-statement.html">打假声明</a></li></ul></div></div></nav></header>')
	$("body").append('<footer class="footer"><div class="content-center"><div class="footer-content"><ul><li><a href="/">首页</a>&nbsp;|&nbsp;<a href="/photos">媒体中心</a>&nbsp;|&nbsp;<a href="/product.html">产品中心</a>&nbsp;|&nbsp;<a href="https://airwheel.tmall.com"target="_blank">在线商城</a>&nbsp;|&nbsp;<a href="/manual.html">产品说明</a>&nbsp;|&nbsp;<a href="/sitemap.html">网站地图</a>&nbsp;|&nbsp;<a href="/portfolio.html">关于我们</a>&nbsp;|&nbsp;<a href="/blog.html">联系我们</a></li><li>©2016<a href="http://www.airwheel.cn/"target="_blank">www.airwheel.cn</a>常州爱尔威智能科技有限公司京ICP备11047181-2号技术支持：摩玛工业设计</li></ul></div><div class="info-links"><div><ul class="social-icons"><li class="weibo"><a href="http://weibo.com/u/3558983364"rel="nofollow"target="_blank"title="新浪微博">新浪微博</a></li><li class="youku"><a href="http://i.youku.com/u/UMTQ1MTU1OTQ4NA==/videos"rel="nofollow"target="_blank"title="优酷">优酷</a></li><li class="facebook"><a href="https://www.facebook.com/airwheeltechnology?ref=hl"rel="nofollow"target="_blank"title="Facebook">Facebook</a></li><li class="twitter"><a href="https://twitter.com/AirwheelCZ"rel="nofollow"target="_blank"title="Twitter">Twitter</a></li><li class="youtube"><a href="https://www.youtube.com/channel/UCyaQqGma-vkYxZu4HIZJbUw"rel="nofollow"target="_blank"title="Youtube">Youtube</a></li><li class="skype"><a href="tencent://message/?Menu=yes&amp;uin=800064806&amp;Service=58&amp;SigT=A7F6FEA02730C9885CEA88F68E5F9A2E2A3A0ACACA02C4E38A0ED3D4052B58B3DE834E3C8A49C761EF1BB77B95799E7C6250FAA73AB7CD03A2D2F088B818FBBD7763C3729F95969A3B8A74571A33BA1FA48E941DC9738495EA40FD8F188CA19959C89A89C3609D0F0AA583A7E8FCEACD6359B7369751AEDF&amp;SigU=30E5D5233A443AB23AFB9CF79A149DFA710C9C55983BED911F4FD87C5D72E4D3845EAED45F54929B85E2667AB856F952B22A11D47620D34378CF20717BA5EDC132770C81CBBB3462"rel="nofollow"title="QQ"target="_blank">QQ</a></li></ul></div></div></div></footer>')
	*/
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

	var l = $("#gotoTop").offset().left;

	function gotoTop(min_height) {
		$("#gotoTop").click(function() {
			$('html,body').animate({
				scrollTop: 0
			}, 500);
			$(".func_box a:eq(0)").addClass("current")
		}).hover(function() {
			$(this).addClass("gotoTopHover");
			$(".gotoTopTip").fadeIn()
		}, function() {
			$(this).removeClass("gotoTopHover");
			$(".gotoTopTip").fadeOut()
		});
		min_height ? min_height = min_height : min_height = 100;
		$(window).scroll(function() {
			var s = $(window).scrollTop();
			if(s > min_height) {
				$("#gotoTop").fadeIn(100);
				$("#gotoTop").css("position", "fixed");
				$("#gotoTop").css("left", l)
			} else {
				$("#gotoTop").fadeOut(200)
			}
		})
	};
	var iE3 = !window.XMLHttpRequest;
	if(iE3) {
		document.getElementById("gotoTop").style.display = "none"
	} else {
		gotoTop()
	}

});