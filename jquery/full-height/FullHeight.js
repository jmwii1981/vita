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
	onWindowLoad: function() {
		FullHeight.makeFullScreen();
	},
	bindUIActions: function() {
		// FullHeight.onOrientationChange();
		// FullHeight.onResize();
		// FullHeight.onWindowLoad();
	},
	init: function() {
		fullHeight = this.settings;
		this.bindUIActions();
		console.log( 'FullHeight loaded!' );
	},
};
