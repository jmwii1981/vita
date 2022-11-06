var fullHeight,
FullHeight = {
	settings: {
		window: $(window)
	},
	saveHeight: function() {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	},
	onWindowLoad: function() {
		const deliverHeight = Debounce.deBall(() => FullHeight.saveHeight());
		window.addEventListener("resize", deliverHeight);
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
