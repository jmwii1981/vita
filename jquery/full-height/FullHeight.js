var fullHeight,
FullHeight = {
	settings: {
		window: $(window)
	},
	makeFullScreen: function() {
		$('.header').css({'height': $(window).height()*1});
	},
	onOrientationChange: function() {
		$(window).on('orientationchange', function() {
			fullHeight.makeFullScreen;
		});
	},
	onResize: function() {
		$(window).on('resize', function() {
			fullHeight.makeFullScreen;
		});
	},
	bindUIActions: function() {
		FullHeight.makeFullScreen();
		FullHeight.onOrientationChange();
		FullHeight.onResize();
	},
	init: function() {
		fullHeight = this.settings;
		this.bindUIActions();
		console.log( 'FullHeight loaded!' );
	},
};
