var mobileMenu,
MobileMenu = {

	settings: {
		// "#main-menu" ".main-menu"
		menuNav: $('#main-menu'),
		// "#menu-button" ".menu-button"
		menuButton: $('#menu-button'),
	},

	ButtonActions: function() {

		//** THIS area is reserved for button clicks that create menu element responses.

		// NAV EVENTS – Menu Button
		// Down Arrow, Space, or Enter – Opens menu and moves focus to first menuitem
		// Up Arrow – Opens menu and moves focus to last menuitem

		// SELECTORS
		// "#menu-button"

		// ARIA RESULTS
		// aria-expanded="true" when menu is opened
		// aria-expanded="false" when menu is closed

		// VISUAL RESULTS
		// logo and menu button move to the top of the screen
		// menu button arrow turns into an 'x'
		// menu items flash into view
		// accessibility features are included with menu items

	},

	MenuActions: function() {

		//** THIS area is reserved for button clicks that create menu element responses.

		// NAV EVENTS – Menu
		// Space or Enter – Activates the menu item, which is equivalent to activating the link element from which the menu item is made.
		// Escape – Closes the menu.
		// Tab – Sets focus to the menu button.
		// Up Arrow – Moves focus to the previous menu item. (If focus is on the first menu item, moves focus to the last menu item).
		// Down Arrow – Moves focus to the next menu item. (If focus is on the last menu item, moves focus to the first menu item).
		// Home – Moves focus to the first menu item.
		// End – Moves focus to the last menu item.
		// A-Z [a-z] – Moves focus to the next menu item with a label that starts with the typed character if such an menu item exists. Otherwise, focus does not move.

		// SELECTORS
		// "#main-menu" ".floating-nav-bar-nav-list"

	},

	bindUIActions: function() {
		MobileMenu.ButtonActions();
		MobileMenu.MenuActions();
	},

	init: function() {
		mobileMenu = this.settings;
		this.bindUIActions();
	},
};
