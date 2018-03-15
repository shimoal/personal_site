var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPuligin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'dist'),
    filename: 'bundle.[chunkhash].js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			use: 'babel-loader',
			exclude: /node_modules/
		}]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		}),
		new HtmlWebpackPuligin({
      template: './src/index.html'
    }),
	]
};