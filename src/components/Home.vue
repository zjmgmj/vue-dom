<style lang="less">
	@padding: 0.15rem;
	.fade-transition {
		/* transition: opacity 0.3s ease;*/
		transform: translateX(0%);
		transition: all 0.3s ease;
	}
	
	.fade-enter {
		transform: translateX(100%);
		transition: all 0.3s ease;
	}
	
	.fade-leave {
		opacity: 0;
		/*     transform: translateX(-100%);*/
		transition: all 0.1s ease;
	}
	
	h1 {
		font-size: 1.2rem;
	}
	
	h2 {
		font-size: 1rem;
	}
	
	h3 {
		font-size: 1.2rem;
	}
	
	h4 {
		font-size: 0.9rem;
		font-weight: lighter;
	}
	
	.flex-column {
		display: flex;
		flex-direction: column;
	}
	
	.product {
		justify-content: center;
		text-align: center;
		width: 100%;
		align-items: center;
		padding-top: @padding;
		margin-bottom: 0.02rem;
		@media screen and (max-width: 414px) {
			img {
				width: 50%;
				padding-top: 0.5rem;
				display: block;
			}
		}
		h3 {
			line-height: 1.4rem;
		}
	}
	
	.flex-wrap-reverse {
		flex-flow: row wrap-reverse;
	}
	
	.flex-wrap {
		flex-flow: row wrap;
	}
	
	.background-f2f2f2 {
		background: linear-gradient(top, #fafafa, #f2f2f2);
		background: -webkit-linear-gradient(top, #fafafa, #f2f2f2);
	}
	
	.padding-bottom {
		margin-bottom: @padding;
		padding-top: 1rem;
	}
	
	.content-news {
		background: #f2f2f2;
		padding: 2rem 0;
		h1 {
			color: #2f2f2f;
			padding-left: 5%;
			box-sizing: border-box;
			span {
				color: rgba(47, 47, 47, .6);
				font-size: 0.8rem;
				padding-left: 0.5rem;
			}
		}
		.news {
			li {
				width: 90%;
				padding: 1rem 5%;
				line-height: 1.5rem;
				border-bottom: 1px rgba(0, 0, 0, .1) solid;
				&:last-child {
					border-bottom: none;
				}
				time {
					display: block;
					color: #8b8b8b;
					span {
						color: rgba(139, 139, 139, .6);
						padding-left: 1.5rem;
					}
				}
				p {
					color: rgba(47, 47, 47, .6);
				}
			}
		}
	}
	
	.app {
		background: url("../images/app.jpg") no-repeat center;
		height: 257px;
		width: 100%;
		color: #fff;
		box-sizing: border-box;
		padding: 7% 0 0 5%;
		a {
			color: #fff;
		}
		.app-content {
			padding: 6% 0 0 5%;
		}
		.andrid {
			background: linear-gradient(left, #1d9abf, #5661c3);
			background: -webkit-linear-gradient(left, #1d9abf, #5661c3);
		}
		.ios,
		.andrid {
			width: 9.5rem;
			padding: 0.2rem 0.4rem;
			border-radius: 2rem;
			margin-bottom: 1rem;
		}
		.ios {
			border: 0.01rem solid rgba(255, 255, 255, .7);
		}
		.fa {
			&:before {
				font-size: 2rem;
			}
		}
		.flex {
			justify-content: space-around;
			align-items: center;
		}
	}
	
	.products {
		text-align: center;
		margin-top: 1rem;
		.flex {
			flex-flow: row wrap;
			li {
				width: 50%;
				box-sizing: border-box;
				padding: 10px 5px;
				border-bottom: 1px #f0f0f0 solid;
				&:nth-child(2n) {
					border-left: 1px #f0f0f0 solid;
				}
				img {
					width: 100%;
				}
			}
		}
	}
	
	.follow {
		text-align: center;
		padding: 1.5rem 0;
		color: #d0d0d0;
		a {
			border: 0.2rem solid #d0d0d0;
			border-radius: 100%;
			height: 3rem;
			width: 3rem;
			line-height: 3rem;
			margin: 1rem 0.5rem;
		}
		.flex {
			flex-flow: row nowrap;
			justify-content: center;
			align-items: center;
			.fa {
				&:before {
					font-size: 1.6rem;
					color: #d0d0d0;
					text-align: center;
					line-height: 3rem;
				}
			}
			.youku {
				background: url("../images/youku.jpg") no-repeat center;
				background-size: 2rem;
			}
		}
	}
	
	.footer-menu {
		background: #f2f2f2;
		width: 100%;
		color: #2F2F2F;
		a {
			color: #2f2f2f;
		}
		.foot-nav {
			width: 90%;
			margin: 0 5%;
			.flex {
				flex-flow: row nowrap;
				justify-content: space-between;
			}
			.menu-toggle {
				border-bottom: 0.01rem #e5e5e5 solid;
				line-height: 2rem;
				padding-bottom: .2rem;
				padding-top: 1rem;
				&:last-child {
					border-bottom: none;
				}
				.nav-menu-icon {
					font-style: inherit;
				}
				.nav-menu-li {
					max-height: 0;
					overflow: hidden;
					opacity: 0;
					box-sizing: border-box;
					padding-left: 1rem;
					transform: translateX(100%);
					transition: all 0.8s;
					&.active {
						opacity: 1;
						z-index: 5;
						opacity: 1;
						max-height: 3000px!important;
						transform: translateX(0);
						transition: all 0.9s;
					}
					a {
						color: rgba(0, 0, 0, .6);
					}
				}
			}
			.switch {
				text-align: center;
				line-height: 3rem;
			}
		}
	}
	
	#airwheel_weixin {
		position: fixed;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, .5);
		top: 0;
		z-index: 9999;
		display: none;
		.weixin {
			width: 15rem;
			height: 18.5rem;
			background: #fff;
			border-radius: 0.5rem;
			position: fixed;
			top: 50%;
			left: 50%;
			margin-left: -7.5rem;
			margin-top: -9rem;
			overflow: hidden;
			text-align: center;
			color: rgba(0, 0, 0, .6);
			transform: scale(1, 0);
			transition: all 300ms;
			&.prompt_show {
				animation: prompt_show 300ms ease-in-out;
				animation-fill-mode: forwards;
				transform-origin: top;
			}
		}
	}
	
	@keyframes prompt_show {
		0% {
			transform: scale(1, 0);
		}
		100% {
			transform: scale(1, 1);
		}
	}
</style>
<template>
	<section>
		<Banner></Banner>
		<section class="content-product">
			<div class="flex product flex-wrap-reverse background-f2f2f2 padding-bottom">
				<img src="../images/air_productfirst.png" />
				<div>
					<h3>R3</h3>
					<p>百公里续航 智能助力</p>
				</div>
			</div>
			<div class="flex-column product background-f2f2f2 padding-bottom">
				<div>
					<h3>E3</h3>
					<p>装进背包的智能电动车</p>
				</div>
				<img src="../images/air_productsecond.jpg" />
			</div>
			<div class="flex product background-f2f2f2 flex-wrap padding-bottom">
				<div>
					<h3>R3</h3>
					<p>百公里续航 智能助力</p>
				</div>
				<img src="../images/air_productthree.png" />
			</div>
		</section>
		<section class="content-news">
			<h1>新闻中心<span>News</span></h1>
			<div class="news">
				<ul>
					<a href="">
						<li>
							<time>11-14<span>2016</span></time>
							<h2>跳脱思维困境 爱尔威智能头盔魔力大</h2>
							<p>骑行头盔C5具备了基础的安全防护功能，由外侧多个排风口组成</p>
						</li>
					</a>
					<a href="">
						<li>
							<time>11-14<span>2016</span></time>
							<h2>跳脱思维困境 爱尔威智能头盔魔力大</h2>
							<p>骑行头盔C5具备了基础的安全防护功能，由外侧多个排风口组成</p>
						</li>
					</a>
					<a href="">
						<li>
							<time>11-14<span>2016</span></time>
							<h2>跳脱思维困境 爱尔威智能头盔魔力大</h2>
							<p>骑行头盔C5具备了基础的安全防护功能，由外侧多个排风口组成</p>
						</li>
					</a>
				</ul>
			</div>
		</section>
		<section class="app">
			<h1>APP下载</h1>
			<div class="app-content">
				<ul class="andrid">
					<a href="" class="flex flex-wrap">
						<i class="fa fa-android"></i>
						<li>
							<h4>ANDROID</h4>
							<p>4.3 or higher</p>
						</li>
					</a>
				</ul>
				<ul class="ios">
					<a href="" class="flex flex-wrap">
						<i class="fa fa-apple"></i>
						<li>
							<h4>APP STORE</h4>
							<p>ios7.0 or higher</p>
						</li>
					</a>
				</ul>
			</div>
		</section>
		<section class="products">
			<ul class="flex">
				<li>
					<img src="../images/r5.jpg" />
					<h3>R5</h3>
					<p>百公里续航</p>
				</li>
				<li>
					<img src="../images/z5.jpg" />
					<h3>Z5</h3>
					<p>一键折叠</p>
				</li>
				<li>
					<img src="../images/s8.jpg" />
					<h3>S8</h3>
					<p>坐立两用</p>
				</li>
				<li>
					<img src="../images/m3.jpg" />
					<h3>M3</h3>
					<p>城市冲浪</p>
				</li>
			</ul>
		</section>
		<section class="follow">
			<h1>关注我们</h1>
			<div class="flex">
				<a href=""><i class="fa fa-weibo"></i></a>
				<a id="weixin"><i class="fa fa-weixin"></i></a>
				<a href="" class="youku"></a>
			</div>
			<div id="airwheel_weixin">
				<div class="weixin">
					<div id="">
						<img src="../images/airwheel_weixin.jpg" />
					</div>
					<span id="">
					长按二维码<br>关注爱尔威微信公众号
				</span>
				</div>
			</div>
		</section>
		<section class="footer-menu">
			<nav class="foot-nav">
				<ul>
					<li class="menu-toggle">
						<a href="product.html" class="flex">
							<span>全部产品</span><i class="nav-menu-icon nav-menu-rotate-back fa fa-angle-right"></i>
						</a>
					</li>
					<li class="menu-toggle">
						<a class="flex navmenu">
							<span>在线商城</span><i class="nav-menu-icon nav-menu-rotate-back fa fa-angle-right"></i>
						</a>
						<ul class="nav-menu-li">
							<li>
								<a href="http://airwheel.tmall.com" target="_blank">天猫:Airwheel旗舰店</a>
							</li>
							<li>
								<a href="http://mall.jd.com/index-53160.html" target="_blank">京东:Airwheel官方旗舰店</a>
							</li>
						</ul>
					</li>
					<li class="menu-toggle ">
						<a class="flex navmenu">
							<span>媒体中心</span>
							<i class="nav-menu-icon nav-menu-rotate-back fa fa-angle-right"></i>
						</a>
						<ul class="nav-menu-li">
							<li>
								<a href="video.html">视频中心</a>
							</li>
							<li>
								<a href="photo.html">图库</a>
							</li>
						</ul>
					</li>
					<li class="menu-toggle om-list">
						<router-link to="/about" class="flex">
							<span class="om-list-title om-ellipsis">公司简介</span><i class="nav-menu-icon nav-menu-rotate-back fa fa-angle-right"></i>
						</router-link>
					</li>
					<li class="menu-toggle ">
						<a href="contact.html" class="flex">
							<span>联系我们</span><i class="nav-menu-icon nav-menu-rotate-back fa fa-angle-right"></i>
						</a>
					</li>
				</ul>
			</nav>
		</section>
	</section>
</template>
<script>
	import Banner from './banner'
	export default {
		name: 'app',
		components: {
			'Banner': Banner
		}
	}
</script>