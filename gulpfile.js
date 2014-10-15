var gulp = require( 'gulp' ),
	del = require( 'del' ),
	vui = require( 'vui-helpers' );

gulp.task( 'clean', function( cb ) {
	del([ 'field.css' ], cb);
} );

gulp.task( 'css', function () {
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
