const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
		'webpack-hot-middleware/client',
		'babel-polyfill',
		path.resolve(__dirname, 'src/client/index')
	],
	output: {
		path: path.resolve(__dirname, 'src'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	resolve:{
    modulesDirectories: [
      path.resolve(path.join(__dirname, 'web_modules')),
      path.resolve(path.join(__dirname, 'node_modules')),
      path.resolve(path.join(__dirname, 'src')),
    ],
    extensions: ['.js', '.json', '.jsx', ''],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development'),
				WEBPACK: true
			}
		})
	],
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel',
				include: path.resolve(__dirname, 'src'),
				query: {
					presets: [ 'react-hmre' ]
				}
			},
			{
				test: /\.scss/,
				loader: 'style!css!sass!postcss',
				include: path.resolve(__dirname, 'src')
			}
		]
	},
    postcss: function() {
        return [autoprefixer];
    }
};
