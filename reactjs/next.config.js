const globImporter = require('node-sass-glob-importer');

module.exports = {
	webpack: (config => {
		config.module.rules.push({
			test: /\.(css|scss)/,
			loader: 'emit-file-loader',
			options: {
				name: 'dist/[path][name].[ext]',
			},
		}, {
			test: /\.css$/,
			use: ['babel-loader', 'raw-loader'],
		}, {
			test: /\.s(a|c)ss$/,
			use: [
				'babel-loader',
				'raw-loader',
				{
					loader: 'sass-loader',
					options: {
						importer: globImporter(),
						node: {
							dns: 'mock',
							net: 'mock'
						},
					},
				},
			],
		}, );

		return config;
	}),
};
