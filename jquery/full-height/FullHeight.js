var fullHeight,
FullHeight = {
	settings: {
		window: $(window)
	},
	getWindowHeight: function() {
		$('.header').css({'height': $(window).height()*1});
	},
	onOrientationChange: function() {
		$(window).on('orientationchange', function() {
			fullHeight.getWindowHeight;
		});
	},
	onResize: function() {
		$(window).on('resize', function() {
			fullHeight.getWindowHeight;
		});
	},
	bindUIActions: function() {
		FullHeight.getWindowHeight();
		FullHeight.onOrientationChange();
		FullHeight.onResize();
	},
	init: function() {
		fullHeight = this.settings;
		this.bindUIActions();
		console.log( 'FullHeight loaded!' );
	},
};
