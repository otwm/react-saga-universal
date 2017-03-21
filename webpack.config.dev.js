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
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint',
        include: './src',
      },
    ],
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
			},
      {
        test: /\.css$/,
        loader: 'style!css?importLoaders=1!postcss'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.svg$/,
        loader: 'file',
        query: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }
		]
	},
    postcss: function() {
        return [autoprefixer];
    }
};
