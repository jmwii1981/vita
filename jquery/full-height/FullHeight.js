var fullHeight,
FullHeight = {
	settings: {
		window: $(window)
	},
	onWindowLoad: function() {

		$('.header').css({'height': $(window).height()*1});

		$(window).on('orientationchange', function(event) {
			$('.header').css({'height': $(window).width()*1});
		});
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
