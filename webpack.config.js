const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.tsx',
	// Where files should be sent once they are bundled
	output: {
		path: path.join(__dirname, '/dist'),
		filename: '[name].bundle.js'
	},
	// webpack 5 comes with devServer which loads in development mode
	devServer: {
		port: 3000,
		open: true,
		hot: true
	},
	// Rules of how webpack will take our files, complie & bundle them for the browser 
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							"@babel/preset-env",
							"@babel/preset-react",
							"@babel/preset-typescript",
						],
					},
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader', 'postcss-loader']
			}
		]
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
		extensions: ['.js', '.jsx', '.ts', '.tsx']
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './src/index.html' }),
		new webpack.ProvidePlugin({
      React: 'react'
    })

	],
}
