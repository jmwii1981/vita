var debounce,
Debounce = {
	settings: {
		window: $(window)
	},
	deBall: function(func, timeout = 600) {
		let timer;
		return (...args) => {
			clearTimeout(timer);
			timer = setTimeout(() => { func.apply(this, args); }, timeout);
		};
	},
	bindUIActions: function() {
		Debounce.deBall();
	},
	init: function() {
		debounce = this.settings;
		this.bindUIActions();
		console.log( 'Debounce loaded!' );
	},
};
