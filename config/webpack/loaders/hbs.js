module.exports = {
	test: /\.hbs$/,
	include: /app\/javascript\/packs\/app\/templates/,
	use: [
		{
			loader: 'ember-webpack-loaders/htmlbars-loader',
			options: {
				appPath: './app/javascript/packs/app'
			}
		}
	]
}
