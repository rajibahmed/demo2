module.exports = {
	test: /app\javascipt\/packs\/app\/index\.js/,
	use: [
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
