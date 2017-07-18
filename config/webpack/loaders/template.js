module.exports = {
	test: /app\/javascript\/packs\/app\/index.js$/,
	use: [
		{
			loader: 'ember-webpack-loaders/inject-templates-loader',
			options: {
				appPath: './app/javascript/packs/app',
			}
		},
		{
			loader: 'ember-webpack-loaders/inject-modules-loader',
			options: {
				appPath: './app/javascript/packs/app',
			}
		}
	],
	exclude: /node_modules/
}
