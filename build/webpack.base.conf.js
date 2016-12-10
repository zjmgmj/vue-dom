var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')

var env = process.env.NODE_ENV
	// check env & config/index.js to decide weither to enable CSS Sourcemaps for the
	// various preprocessor loaders added to vue-loader at the end of this file
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd

module.exports = {
	entry: {
		app: './src/main.js'
	},
	output: {
		path: config.build.assetsRoot,
		publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
		filename: '[name].js'
	},
	resolve: {
		extensions: ['', '.js', '.vue'],
		fallback: [path.join(__dirname, '../node_modules')],
		root: 'F:/nodejs/vue-tutorid/src/Content',
		alias: {
			'vue$': 'vue/dist/vue.common.js',
			'src': path.resolve(__dirname, '../src'),
			'assets': path.resolve(__dirname, '../src/assets'),
			'components': path.resolve(__dirname, '../src/components'),
			zepto: 'js/n-zepto.js',
			zepto_touch: 'js/touch.js',
			swiper: 'js/swiper.min.js'
		}
	},
	resolveLoader: {
		fallback: [path.join(__dirname, '../node_modules')]
	},
	module: {
		loaders: [{
			test: /\.vue$/,
			loader: 'vue'
		},{
			test: /\.js$/,
			loader: 'babel',
			include: projectRoot,
			exclude: /node_modules/
		},{
			test: /\.less$/,
			loader: "vue-style!css!less"
		},{
			test: /\.json$/,
			loader: 'json'
		}, {
			test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: 'file-loader?name=./fonts/[name].[ext]'
		}, {
			test: /\.(png|jpg|gif)$/,
			loader: 'url-loader?limit=8192&name=./image/[hash].[ext]'
		}]
	},
//	plugins: [
//		new webpack.ProvidePlugin({
//			$: 'zepto',
//			Zepto:'zepto'
//		}),
//		new webpack.optimize.UglifyJsPlugin({
//			compress: {
//				warnings: false
//			}
//		})
//	],
	vue: {
		loaders: utils.cssLoaders({
			sourceMap: useCssSourceMap
		}),
		postcss: [
			require('autoprefixer')({
				browsers: ['last 2 versions']
			})
		]
	}
}