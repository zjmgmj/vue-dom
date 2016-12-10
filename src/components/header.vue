<template>
	<header>
		<nav class="navication">
			<div class="logo">
				<a href="/"><img src="data:image/png;base64,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" alt="Airwheel Logo"></a>
			</div>
			<div id="navbar-toggle"><button><span></span><span></span><span></span></button>

			</div>
		</nav>
		<div class="moble-nav" id="header_nav">
			<ul class="nav-menu">
				<a href="product.html">
					<li class="navmenu"><span>产品中心</span><i class="nav-menu-icon nav-menu-rotate-back fa fa-angle-right"></i></li>
				</a>
			</ul>
			<ul class="nav-menu">
				<li class="navmenu"><span>在线商城</span><i class="nav-menu-icon nav-menu-rotate-back fa fa-angle-right"></i></li>
				<li class="nav-menu-li">
					<div class="nav-menu-content">
						<a href="http://airwheel.tmall.com" target="_blank">天猫:Airwheel旗舰店</a>
						<a href="http://mall.jd.com/index-53160.html" target="_blank">京东:Airwheel官方旗舰店</a>
					</div>
				</li>
			</ul>
			<ul class="nav-menu">
				<a href="new.html">
					<li class="navmenu"><span> 新闻中心</span><i class="nav-menu-icon nav-menu-rotate-back fa fa-angle-right"></i></li>
				</a>

			</ul>
			<ul class="nav-menu">
				<li class="navmenu"><span>服务支持</span><i class="nav-menu-icon nav-menu-rotate-back fa fa-angle-right"></i></li>
				<li class="nav-menu-li">
					<div class="nav-menu-content">
						<a href="/styles-columns.html">产品说明书</a>
						<a href="/styles-typography.html">App下载</a>
					</div>
				</li>
			</ul>
			<ul class="nav-menu">
				<li>
					<a href="contact.html">联系我们</a><i class="nav-menu-icon nav-menu-rotate-back fa fa-angle-right"></i>
				</li>
			</ul>
		</div>
	</header>

</template>
<script type="text/javascript">
	$(function() {
		var navmenu = $(".nav-menu");
		var hheight = window.innerHeight;
		var wweith = window.innerWidth;
		$("#navbar-toggle button").on('tap', function() {
			if($("button").hasClass("close")) {
				$("button").removeClass("close");
				$(".moble-nav").removeClass("active");

			} else {
				$("button").addClass("close");
				$(".moble-nav").addClass("active");
			}
		});
		$(".navmenu").on('tap', function() {
			if($(this).find('.nav-menu-icon').hasClass('nav-menu-rotate-back')) {
				$(this).find('.nav-menu-icon').removeClass("nav-menu-rotate-back").addClass("nav-menu-rotate");
				$(this).next(".nav-menu-li").addClass("active");
			} else {
				$(this).find('.nav-menu-icon').addClass("nav-menu-rotate-back").removeClass("nav-menu-rotate");
				$(this).next(".nav-menu-li").removeClass("active");
			}
		});
	});
</script>
<style lang="less">
	header {
		width: 100%;
		line-height: 3.3rem;
		height: 2.8rem;
		vertical-align: middle;
		a {
			color: #616264;
		}
		.navication {
			background: #303030;
			height: 2.8rem;
			width: 100%;
			margin: 0;
			display: flex;
			flex-flow: row wrap;
			justify-content: space-between;
			position: fixed;
			top: 0;
			z-index: 9999;
			.logo {
				float: left;
				width: 107px;
				position: relative;
				max-height: 60px;
				top: .1rem;
				margin-left: 10px;
				img {
					width: 100%;
				}
			}
			#navbar-toggle {
				position: absolute;
				width: 100%;
				color: #707473;
				left: 0;
				button {
					display: block;
					width: 40px;
					height: 40px;
					font-size: 30px;
					position: absolute;
					text-align: center;
					color: #fff;
					right: 0;
					top: 0;
					z-index: 888;
					background: none;
					border: none;
					span {
						width: 20px;
						height: 2px;
						background: #fff;
						display: block;
						margin: 4px auto 0;
						transition: all 600ms;
					}
					&.close span {
						&:nth-child(1) {
							transform: matrix(.707107, .707107, -.707107, .707107, 0, 6);
							transition: all 600ms;
						}
						&:nth-child(2) {
							opacity: 0;
							transition: all 600ms;
						}
						&:nth-child(3) {
							transform: matrix(.707107, -.707107, .707107, .707107, 0, -6);
							transition: all 600ms;
						}
					}
					i {
						transform: rotate(45deg);
						display: none;
						font-weight: lighter;
						font-size: 35px;
						border-radius: 100%;
					}
				}
			}
		}
		.moble-nav {
			display: block;
			max-height: 3000px;
			height: auto;
			overflow: hidden;
			box-shadow: #000000;
			overflow-x: hidden;
			overflow-y: auto;
			position: fixed;
			width: 100%;
			top: 2.83rem;
			opacity: 0;
			z-index: -1;
			transform: translateY(-20px);
			background: rgba(255, 255, 255, 0.4);
			-webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, .1);
			-moz-box-shadow: 0 2px 10px rgba(0, 0, 0, .1);
			transition: all 0.4s linear;
			&.active {
				opacity: 1;
				z-index: 5;
				transform: translateY(0);
				transition: all 0.4s linear;
			}
			.nav-menu {
				display: block;
				width: 100%;
				background: #fff;
				border-bottom: 1px #ececec solid;
				padding-left: 13px;
				.nav-menu-li {
					overflow: hidden;
					width: 100%;
					opacity: 0;
					background: #fff;
					transform: translateX(100%);
					max-height: 0;
					transition: all 0.8s;
					&.active {
						opacity: 1;
						z-index: 5;
						max-height: 3000px!important;
						transform: translateX(0);
						transition: all 0.9s;
					}
					.nav-menu-content {
						width: 100%;
						&:after {
							clear: both;
							content: "";
							display: block;
						}
						a {
							padding: 0 20px;
							color: #616264;
							border-top: 1px #ececec solid;
							display: block;
							&:hover {
								color: #60aff6;
							}
						}
						.nav-product-list {
							color: #000;
							float: none;
							width: 100%;
							dl {
								line-height: 30px;
								dt {
									display: none;
									line-height: 40px;
									padding-left: 20px;
									a {
										padding: 0;
									}
									&.nav-product-list-title {
										display: block;
										border-top: 1px solid #ececec;
										border-bottom: 0;
										color: #707473;
										padding-left: 10PX;
										margin-bottom: 0;
									}
								}
							}
							&:nth-child(7) {
								margin-right: 0;
							}
							.nav-product-list-title {
								padding: 10px 0;
								border-bottom: 1px solid #B7B8B9;
								margin-bottom: 10px;
								color: #616264;
							}
							&:last-child dl dt.nav-product-list-title {
								border-bottom: 0;
							}
						}
					}
					&.nav-product li {
						display: inline-block;
						padding: 10px;
						width: 126px;
						@media screen and (max-width: 413px) {
							width: 45%;
						}
						div {
							display: block;
							width: 100%;
							img {
								width: 100%;
							}
							&:after {
								width: 100%;
								height: 1px;
								background: #B7B8B9;
								content: "";
								display: block;
							}
						}
						a {
							color: #616264;
							img {
								width: 100%;
							}
							.nav-menu-scale {
								animation: nav-menu-scale 1.5s;
								-webkit-animation: nav-menu-scale 1.5s;
								-moz-animation: nav-menu-scale 1.5s;
								-ms-animation: nav-menu-scale 1.5s;
								animation-fill-mode: forwards;
								-webkit-animation-fill-mode: forwards;
							}
							.nav-menu-scale-back {
								animation: nav-menu-scale-back 1.5s;
								-webkit-animation: nav-menu-scale-back 1.5s;
								-moz-animation: nav-menu-scale-back 1.5s;
								-ms-animation: nav-menu-scale-back 1.5s;
								animation-fill-mode: forwards;
								-webkit-animation-fill-mode: forwards;
							}
						}
					}
				}
				.nav-menu-icon {
					font-style: inherit;
					float: right;
					margin-right: 29px;
					font-size: 20px;
					display: block;
				}
				a {
					color: #707473;
				}
				&:nth-child(2) li a:first-child {
					margin-left: 0;
				}
			}
			a {
				color: #707473;
			}
		}
	}
</style>