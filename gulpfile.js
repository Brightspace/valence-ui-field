var gulp = require( 'gulp' ),
	vui = require( 'vui-helpers' );

gulp.task( 'clean', function( cb ) {
	vui.clean( [ 'dist/**/*' ] )
		.then( function() { cb(); } );
} );

gulp.task( 'css', function () {
	return vui.makeCss( 
		'src/**/*.style',
		'dist/', 
		{ 
		  'lintOpts' : '.csslintrc'
		}
	);
} );

gulp.task( 'default', [ 'clean' ], function() {
	gulp.start( 'css' );
} );

