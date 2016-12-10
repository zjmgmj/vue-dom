<template>
	<section class="banner">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide" style="background-image:url(http://airwheel.cn/moble/images/banner1.jpg); background-position: top center; background-size: 100% 100%;"></div>
					<div class="swiper-slide" style="background-image:url(http://airwheel.cn/moble/images/banner1.jpg); background-position: top center; background-size: 100% 100%;"></div>
					<div class="swiper-slide" style="background-image:url(http://airwheel.cn/moble/images/banner1.jpg); background-position: top center; background-size: 100% 100%;"></div>
				</div>
				<div class="swiper-pagination"></div>
			</div>
		</section>
</template>
<script type="text/javascript">
	$(function(){
		function wscreen() {
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
//			spaceBetween: 30,
			loop: true,
//			spaceBetween: 30,
			keyboardControl: true,
			centeredSlides: true,
			autoplay: 2500,
			autoplayDisableOnInteraction: false
		});
	});
</script>
<style lang="less">
@col-lg:1200px;
@col-md:768px;
@col-sm:414px;
@col-xs:320px;
@content-center: @col-lg;
@font-size: 25px;
@opacity: 0.8;
@color: #979797;
@color-hover: #707473;
@color-strong: #707473;
@color-nav-hover: #707473;
@footer-a-hover:#707473;
@footer-bg:#f9f9f9;
@subpage-nav-bg:#f7f8f9;
@subpage-nav-color:#707473;
@new-detail-p:#444;
@subpage-content:60px;
@banner-height:662px;
@contnt-margin:30px;
@nav-height:60px;
@newdetail-title:#44a8f2;
.swiper-container {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.swiper-slide {
    background-repeat: no-repeat;
    .md {
        display: none;
    }
    @media screen and (max-width:1200px) {
        background-size: 150% 100%;
        .max {
            display: none;
        }
        .md {
            display: block;
        }
    }
}
.swiper-pagination-bullet {
    width: 50px;
    height: 2px;
    display: inline-block;
    position: relative;
    opacity: .2;
    padding: 5px 0;
    &:after {
        display: block;
        content: "";
        background: gray;
        width: 100%;
        height: 2px;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
    }
}

.banner {
    width: 100%;
    position: relative;
    overflow: hidden;
    height: @banner-height;
/*//  margin-top: 2.8rem;
//   cursor: pointer;*/

}

.swiper-container-no-flexbox .swiper-slide {
    float: left
}

.swiper-container-vertical>.swiper-wrapper {
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    -ms-flex-direction: column;
    -webkit-flex-direction: column;
    flex-direction: column;
}

.swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-transition-property: -webkit-transform;
    -moz-transition-property: -moz-transform;
    -o-transition-property: -o-transform;
    -ms-transition-property: -ms-transform;
    transition-property: transform;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
}

.swiper-container-android .swiper-slide,
.swiper-wrapper {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -o-transform: translate(0, 0);
    -ms-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}

.swiper-container-multirow>.swiper-wrapper {
    -webkit-box-lines: multiple;
    -moz-box-lines: multiple;
    -ms-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
}

.swiper-container-free-mode>.swiper-wrapper {
    -webkit-transition-timing-function: ease-out;
    -moz-transition-timing-function: ease-out;
    -ms-transition-timing-function: ease-out;
    -o-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
    margin: 0 auto;
}

.swiper-slide {
    -webkit-flex-shrink: 0;
    -ms-flex: 0 0 auto;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
}

.swiper-container-autoheight,
.swiper-container-autoheight .swiper-slide {
    height: auto;
}

.swiper-container-autoheight .swiper-wrapper {
    -webkit-box-align: start;
    -ms-flex-align: start;
    -webkit-align-items: flex-start;
    align-items: flex-start;
    -webkit-transition-property: -webkit-transform, height;
    -moz-transition-property: -moz-transform;
    -o-transition-property: -o-transform;
    -ms-transition-property: -ms-transform;
    transition-property: transform, height;
}

.swiper-container .swiper-notification {
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    opacity: 0;
    z-index: -1000;
}

.swiper-wp8-horizontal {
    -ms-touch-action: pan-y;
    touch-action: pan-y;
}

.swiper-wp8-vertical {
    -ms-touch-action: pan-x;
    touch-action: pan-x;
}

.swiper-button-next,
.swiper-button-prev {
    position: absolute;
    top: 50%;
    width: 27px;
    height: 44px;
    margin-top: -22px;
    z-index: 10;
    cursor: pointer;
    -moz-background-size: 27px 44px;
    -webkit-background-size: 27px 44px;
    background-size: 27px 44px;
    background-position: center;
    background-repeat: no-repeat;
}

.swiper-button-next.swiper-button-disabled,
.swiper-button-prev.swiper-button-disabled {
    opacity: .35;
    cursor: auto;
    pointer-events: none;
}
.swiper-pagination {
    position: absolute;
    text-align: center;
    -webkit-transition: .3s;
    -moz-transition: .3s;
    -o-transition: .3s;
    transition: .3s;
    -webkit-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    z-index: 10;
}

.swiper-pagination.swiper-pagination-hidden {
    opacity: 0;
}

.swiper-container-horizontal>.swiper-pagination-bullets,
.swiper-pagination-custom,
.swiper-pagination-fraction {
    bottom: -5px;
    left: 0;
    width: 100%;
}
button.swiper-pagination-bullet {
    border: none;
    margin: 0;
    padding: 0;
    box-shadow: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -webkit-appearance: none;
    appearance: none
}

.swiper-pagination-clickable .swiper-pagination-bullet {
    cursor: pointer
}

.swiper-pagination-white .swiper-pagination-bullet {
    background: #fff
}

.swiper-pagination-bullet-active {
    opacity: 1;
}

.swiper-pagination-white .swiper-pagination-bullet-active {
    background: #fff;
}

.swiper-pagination-black .swiper-pagination-bullet-active {
    background: #000;
}

.swiper-container-vertical>.swiper-pagination-bullets {
    right: 10px;
    top: 50%;
    -webkit-transform: translate3d(0, -50%, 0);
    -moz-transform: translate3d(0, -50%, 0);
    -o-transform: translate(0, -50%);
    -ms-transform: translate3d(0, -50%, 0);
    transform: translate3d(0, -50%, 0);
}
.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 5px 0;
    display: block;
}
.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 5px;
}
@-webkit-keyframes swiper-preloader-spin {
    100% {
        -webkit-transform: rotate(360deg)
    }
}

@keyframes swiper-preloader-spin {
    100% {
        transform: rotate(360deg)
    }
}
</style>