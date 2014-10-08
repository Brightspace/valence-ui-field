module.exports = function( config ) {
	'use strict';

	config.set( {
		autoWatch: false,
		basePath: '../',
		browsers: ['PhantomJS'],
		exclude: [],
		frameworks: ['jasmine'],
		junitReporter : {
			outputFile: 'test/output/unit.xml',
			suite: 'unit'
		},
		plugins : [
			'karma-jasmine',
			'karma-junit-reporter',
			'karma-phantomjs-launcher',
			'karma-script-launcher'
		],
		reporters: ['progress','junit']
	} );
};