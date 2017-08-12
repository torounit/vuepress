export default  {

	/**
	 *
	 * browserSync.
	 *
	 */
	browserSync: {
		//proxy: ' localhost:8080',
		files: [
			"./**/*.*"
		]
	},

	/**
	 *
	 * JavaScript.
	 *
	 */
	browserify: {
		bundleOption: {
			cache: {},
			packageCache: {},
			fullPaths: false,
			debug: true,
			entries: './assets/scripts/all.js',
			extensions: ['js', 'jsx', 'vue']
		},
		dest: './',
		filename: 'bundle.js'
	}
};
