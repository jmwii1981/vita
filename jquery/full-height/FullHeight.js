var fullHeight,
FullHeight = {
	settings: {
		window: $(window)
	},
	onWindowLoad: function() {
		// $(document).ready(function(){

		$('.header').css({'height': $(window).height()*1});
		// });
	},
	bindUIActions: function() {
		FullHeight.onWindowLoad();
	},
	init: function() {
		fullHeight = this.settings;
		this.bindUIActions();
		console.log( 'FullHeight loaded!' );
	},
};
