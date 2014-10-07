module.exports = function( config ) {
	'use strict';

	config.set( {
		autoWatch: false,
		basePath: '../',
		browsers: ['PhantomJS', 'Chrome', 'Firefox', 'Safari'],
		exclude: [],
		frameworks: ['jasmine'],
		junitReporter : {
			outputFile: 'test/output/unit.xml',
			suite: 'unit'
		},
		plugins : [
			'karma-chrome-launcher',
			'karma-jasmine',
			'karma-junit-reporter',
			'karma-firefox-launcher',
			'karma-safari-launcher',			
			'karma-phantomjs-launcher',
			'karma-script-launcher'
		],
		reporters: ['progress','junit']
	} );
};