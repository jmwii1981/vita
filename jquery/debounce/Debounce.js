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
	deRepeat: function(func, timeout = 5000) { // 5 seconds
		let repeatingTimer;
		return (...args) => {
			clearInterval(repeatingTimer);
			repeatingTimer = setInterval(() => { func.apply(this, args); }, repeater);
		};
	},
	bindUIActions: function() {
		Debounce.deBall();
	},
	init: function() {
		debounce = this.settings;
		this.bindUIActions();
		// console.log( 'Debounce loaded!' );
	},
};
