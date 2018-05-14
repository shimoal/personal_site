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
		},
		{
			use: ['style-loader', 'css-loader'],
			test: /\.css$/
  	},
  	{
  		test: /\.(jpe?g|png|gif|svg)$/,
  		use: [
  			{
  				loader: 'url-loader',
  				options: { limit: 40000 }
  			}, 
  			'image-webpack-loader'
  		]
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