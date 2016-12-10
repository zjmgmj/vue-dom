import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './store'
import './Content/css/public.css'
import './Content/css/fonts.css'
import zepto from './Content/js/n-zepto.js'
import zepto_touch from './Content/js/touch.js'
import swiper from './Content/js/swiper.min.js';

import App from './App'
import Home from './components/Home'
import Header from './components/header'
import Banner from './components/banner'
import Footer from './components/footer'
import './Content/css/subpage.css'
import About from './components/about'
import Contact from './components/contact'
import Job from './components/job'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [{
	path: '/',
	component: Home
}, {
	path: '/home',
	component: Home
}, {
	path: '/about',
	component: About
}, {
	path: '/contact',
	component: Contact
}, {
	path: '/job',
	component: Job
}]


const router = new VueRouter({
	routes
});

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})
