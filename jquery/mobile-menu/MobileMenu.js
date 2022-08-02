var s,
MobileMenu = {

	settings: {
		siteMenu: $('.floating-nav-bar-nav-list'),
	},

	ButtonInjection: function() {

	},

	bindUIActions: function() {
		MobileMenu.ButtonInjection();
	},

	init: function() {
		s = this.settings;
		this.bindUIActions();
	},
};
