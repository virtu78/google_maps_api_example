var path = require('path')
var webpack = require('webpack')
module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		'babel-polyfill',
		'./src/index.js'
	],
	output:	{
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	],
	module:	{	
		rules: [
			{
				test:	/\.js$/,
				include:	[
					path.resolve(__dirname,	"src"),
				],
				loaders: [
					'react-hot-loader', {
            			loader: 'babel-loader',
						query: {
							babelrc: false,
                    		cacheDirectory: true,
                    		presets: [ 'es2015', 'stage-0', 'react' ],
							plugins: ['transform-runtime']
               			 }
					}],
			}
		]
	},
		devServer: {
		host: '127.0.0.1',
		port: 8080
	}
};
