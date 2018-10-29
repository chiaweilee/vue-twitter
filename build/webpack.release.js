const path = require('path')
const webpack = require('webpack')

const resolve = dir => path.join(__dirname, '..', dir)

module.exports = {
	entry: {
		'index' : './src/index.js',
		'index.min' : './src/index.js'
	},
	output: {
		path: path.resolve('./lib'),
		publicPath: '/',
		filename: '[name].js',
		libraryTarget: 'umd'
	},
	module: {
		rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter'),
          emitWarning: true
        }
      },
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						'scss': 'vue-style-loader!css-loader!postcss-loader!sass-loader',
						'sass': 'vue-style-loader!css-loader!postcss-loader!sass-loader?indentedSyntax'
					}
					// other vue-loader options go here
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]'
				}
			}
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true
	},
	performance: {
		hints: false
	},
	devtool: '#source-map'
}

if (process.env.NODE_ENV === 'production') {
	module.exports.devtool = '#source-map'
	// http://vue-loader.vuejs.org/en/workflow/production.html
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			include: /\.min\.js$/,
			sourceMap: false,
			compress: { warnings: false },
			comments: false,
		}),
		new webpack.ProvidePlugin({}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	])
}
