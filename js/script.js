$(document).ready(function(){
	(function() {
		[].slice.call( document.querySelectorAll( '.test_svg_arrow' ) ).forEach( function( el ) {
			var svgicon = new svgIcon( el, svgIconConfig, { size : { w : 98.99495, h : 56.56854 } } );
		});
		[].slice.call( document.querySelectorAll( '.test_svg_bird' ) ).forEach( function( el ) {
			var svgicon = new svgIcon( el, svgIconConfig, { size : { w : 370.5, h : 50.5 }, evtoggle: 'mouseover' } );
		});
	})();
});
