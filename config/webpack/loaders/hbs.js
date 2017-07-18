module.exports = {
	test: /app\/javascript\/packs\/app\/templates\/*.hbs$/,
	use: [
		{
			loader: 'ember-webpack-loaders/htmlbars-loader',
			options: {
				appPath: './app/javascript/packs/app'
			}
		}
	]
}
