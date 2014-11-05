( function() {
	'use strict';

	var createVUIElement = function( tag, className ) {
		var vuif = document.createElement( tag );
		vuif.className = className;
		return vuif;
	};

	var addVUIField = function( fieldRowTag, labelTag, container ) {
		var fld = createVUIElement( fieldRowTag, "vui-field-row" );
		var lbl = createVUIElement( labelTag, "vui-label" );
		lbl.appendChild(document.createTextNode("text"));
		fld.appendChild(lbl);
		fld.appendChild(document.createTextNode("text"));
		container.appendChild(fld);
		return fld;
	}

	var addVUIChildField = function( fieldRowTag, childTag, labelTag, container ) {
		var fld = createVUIElement( fieldRowTag, "vui-field-row");
		var chld = document.createElement( childTag );
		var lbl = createVUIElement( labelTag, "vui-label" );
		lbl.appendChild(document.createTextNode("text"));
		chld.appendChild(lbl);
		chld.appendChild(document.createTextNode("text"));
		fld.appendChild( chld );
		container.appendChild(fld);
		return chld;
	}

	var addVUIChildLabel = function( labelTag, parentTag, container) {
		var prnt = createVUIElement( parentTag );
		var lbl = createVUIElement( labelTag, "vui-label" );
		lbl.appendChild(document.createTextNode("text"));
		prnt.appendChild(lbl);
		prnt.appendChild(document.createTextNode("text"));
		container.appendChild(prnt);
		return lbl;
	}

	var verifyFieldStyles = function( elemConstructor ) {
		var container;
		var elem;

		beforeEach( function () {

			jasmine.addMatchers( vui.jasmine.dom.matchers );

			container = document.createElement("div");
			document.body.appendChild(container);
			elem = elemConstructor(container);
		});

		it( 'has correct border style', function() {
			expect( elem ).toHaveBorderStyle( 'none' );
		} );

		it( 'has correct display style', function() {
			expect( elem ).toHaveDisplay( 'block' );
		} );

		it( 'has correct width', function() {
			document.body.style.width="1000px";
			expect( elem.clientWidth ).toBe( 1000 );
			expect( elem.offsetWidth ).toBe( 1000 );
		} );

		it( 'has correct height', function() {
			// Handle peculiar behaviour of legend elements on WebKit.
			if( elem.tagName == "FIELDSET" ) {
				expect( elem.clientHeight ).toBeOnBrowser( { default : 40, Firefox : 45, Chrome : 45} );
				expect( elem.clientHeight ).toBeOnBrowser( { default : 40, Firefox : 45, Chrome : 45} );
			} else {
				expect( elem.clientHeight ).toBe( 45 );
				expect( elem.offsetHeight ).toBe( 45 );
			}
		} );

		it( 'has correct margins', function() {
			expect( elem ).toHaveBottomMargin( '20px' );
			expect( elem ).toHaveTopMargin( '0px' );
			expect( elem ).toHaveLeftMargin( '0px' );
			expect( elem ).toHaveRightMargin( '0px' );
		} );

		it( 'has correct padding', function() {
			expect( elem ).toHavePadding( '0px' );
		} );

		afterEach( function() {
			document.body.removeChild(container);
		} );
	};

	var verifyLabelStyles = function( elemConstructor ) {
		var elem;
		var container;

		beforeEach( function () {

			jasmine.addMatchers( vui.jasmine.dom.matchers );

			container = document.createElement("div");
			document.body.appendChild(container);
			elem = elemConstructor(container);

		});

		it( 'has correct colour', function () {
			expect( elem ).toHaveColor( 'rgb(107, 107, 107)' );
		});

		it( 'has border none', function () {
			expect( elem ).toHaveBorderWidth( '0px' );
		});

		it( 'has border style none', function () {
			expect( elem ).toHaveBorderStyle( 'none' );
		});

		it( 'has default cursor', function() {
			expect( elem ).toHaveCursor( 'default' );
		});

		it( 'has block display', function() {
			expect( elem ).toHaveDisplay( 'block' );
		});

		it( 'has font size', function() {
			expect( elem ).toHaveFontSize( '13px' );
		});

		it( 'has font weight', function() {
			expect(  window.getComputedStyle( elem ).getPropertyValue( 'font-weight' ) ).toBeOnBrowser( { default: 'bold', 'Firefox': 700 } );
		});

		it( 'has line height', function() {
			expect( elem ).toHaveLineHeight( '20px' );
		});

		it( 'has correct margins', function() {
			expect( elem ).toHaveBottomMargin( '5px' );
			expect( elem ).toHaveTopMargin( '0px' );
			expect( elem ).toHaveLeftMargin( '0px' );
			expect( elem ).toHaveRightMargin( '0px' );
		} );

		it( 'has correct padding', function() {
			expect( elem ).toHavePadding( '0px' );
		} );

		it( 'has correct text alignment', function() {
			expect( elem ).toHaveTextAlign( container.dir == 'rtl' ? 'right' : 'left');
		} );

		afterEach( function() {
			document.body.removeChild(container);
		} );
	};

	beforeEach( function() {
		document.body.style.fontFamily="Arial";
		document.body.style.fontSize="13px";
		document.body.style.lineHeight="20px";
	} );

	describe( 'vui-field-row', function() {

		describe ( 'divs', function() {
			verifyFieldStyles(
				function (container) {
					return addVUIField( "div", "label", container );
				}
			);
		} );

		describe ( 'fieldsets', function() {
			verifyFieldStyles(
				function (container) {
					return addVUIField( "fieldset", "legend", container );
				}
			);
		} );

		describe ( 'child fieldsets', function() {
			verifyFieldStyles(
				function (container) {
					return addVUIChildField( "div", "fieldset", "legend", container );
				}
			);
		} );


		describe ( 'right to left', function() {

			describe ( 'divs', function() {
				verifyFieldStyles(
					function (container) {
						container.dir = "rtl";
						return addVUIField( "div", "label", container );
					}
				);
			} );

			describe ( 'fieldsets', function() {
				verifyFieldStyles(
					function (container) {
						container.dir = "rtl";
						return addVUIField( "fieldset", "legend", container );
					}
				);
			} );

			describe ( 'child fieldsets', function() {
				verifyFieldStyles(
					function (container) {
						container.dir = "rtl";
						return addVUIChildField( "div", "fieldset", "legend", container );
					}
				);
			} );

		} );

	} );

	describe( 'vui-label', function() {
		describe( 'label', function() {
			verifyLabelStyles(
				function (container) {
					return addVUIChildLabel( "label", "div", container );
				}
			);
		} );

		describe( 'legend', function() {
			verifyLabelStyles(
				function (container) {
					return addVUIChildLabel( "legend", "fieldset", container );
				}
			);
		} );

		describe ( 'right to left', function() {

			describe( 'label', function() {
				verifyLabelStyles(
					function (container) {
						container.dir = "rtl";
						return addVUIChildLabel( "label", "div", container );
					}
				);
			} );

			describe( 'legend', function() {
				verifyLabelStyles(
					function (container) {
						container.dir = "rtl";
						return addVUIChildLabel( "legend", "fieldset", container );
					}
				);
			} );

		});

	} );

} )();
