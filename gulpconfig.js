/*
 *
 * Gulp User Settings. Override Default Settings.
 *
 */

export default  {

	/**
	 *
	 * browserSync.
	 *
	 */
	browserSync: {
		proxy: '0.0.0.0:8080',
		files: [
			"./style.css",
      "./bundle.css",
			"./bundle.js",
			"./**/*.php"
		]
	},
  browserify: {
    bundleOption: {
      cache: {},
      packageCache: {},
      fullPaths: false,
      debug: true,
      entries: './scripts/all.js',
      extensions: ['js', 'jsx', 'vue']
    },
    dest: './',
    filename: 'bundle.js'
  }
};
