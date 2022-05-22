var fullHeight,
FullHeight = {
	settings: {
		window: $(window)
	},
	debounce: function(func, timeout = 300) {
		let timer;
		return (...args) => {
			clearTimeout(timer);
			timer = setTimeout(() => { func.apply(this, args); }, timeout);
		};
	},
	saveHeight: function() {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	},
	onWindowLoad: function() {
		const deliverHeight = FullHeight.debounce(() => FullHeight.saveHeight());
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
