var gulp = require( 'gulp' ),
	del = require( 'del' ),
	vui = require( 'vui-helpers' ),
	imagesToLess = require( 'images-to-less-variables' );

gulp.task( 'clean', function( cb ) {
	del([ 'field.css' ], cb);
} );

gulp.task( 'iconsLess', function ( done ) {
	imagesToLess( '*.png', {
		dest: 'field-icons.less',
		prefix: 'vui-'
	} ).then( function() {
		done();
	} );
} );

gulp.task( 'css', [ 'iconsLess' ], function () {
	return vui.makeCss(
		'field.css.less',
		'field.css',
		{ 'lintOpts' : '.csslintrc'	}
	);
} );

gulp.task( 'default', [ 'clean' ], function() {
	gulp.start( 'css' );
} );

gulp.task( 'test', function () {
	return vui.test( {
		files: [
			'test/**/*Spec.js',
			'field.css'
		]
	} ) ;
} );
