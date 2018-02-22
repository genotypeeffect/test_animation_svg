$(document).ready(function(){
	(function() {
		[].slice.call( document.querySelectorAll( '.test_svg' ) ).forEach( function( el ) {
			var svgicon = new svgIcon( el, svgIconConfig, { size : { w : 98.99495, h : 56.56854 } } );
		});
	})();
});
