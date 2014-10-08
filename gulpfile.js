var gulp = require( 'gulp' ),
	vui = require( 'vui-helpers' );

gulp.task( 'clean', function() {
	return gulp.src( [ 'dist/**/*', 'test/output' ] )
		.pipe( vui.clean() );
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
	return vui.test(
			'test/karma.conf.js',
			'test/**/*Spec.js',
			'*.css'
		);
} );
