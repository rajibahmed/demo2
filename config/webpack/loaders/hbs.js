module.exports = {
	test: /\.hbs$/,
	include: /app\/javascript\/packs\/app\/templates/,
	loader: 'ember-webpack-loaders/htmlbars-loader',
	exclude: /node_modules/
}
