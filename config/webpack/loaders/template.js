module.exports = {
	test: /app\/javascript\/packs\/app\/templates\/*.hbs$/,
	use: [
		{
			loader: 'ember-webpack-loaders/htmlbars-loader',
			options: {
				appPath: './app/javascript/packs/app',
			}
		},
		{
			loader: 'ember-webpack-loaders/inject-templates-loader',
			options: {
				appPath: './app/javascript/packs/app',
			}
		},
		{
			loader: 'ember-webpack-loaders/inject-modules-loader'
		}
	],
	exclude: /node_modules/
}
