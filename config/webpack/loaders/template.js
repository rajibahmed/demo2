module.exports = {
	test: /app\/index\.js/,
	loader: 'ember-webpack-loaders/inject-templates-loader!ember-webpack-loaders/inject-modules-loader',
	exclude: /node_modules/
}
