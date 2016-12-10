<template>
	<div class="main">
		<Top></Top>
		<router-view keep-alive transition="fade" transition-mode='out-in'></router-view>
		<Bottom></Bottom>
	</div>
</template>

<script>
	import Home from './components/Home'
	import Header from './components/header'
	import Footer from './components/footer'
	export default {
		name: 'app',
		components: {
			'Top': Header,
			'Bottom': Footer,
			'Home': Home
		},
	}
</script>