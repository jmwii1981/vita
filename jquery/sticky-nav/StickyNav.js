var s,
StickyNav = {

	settings: {
		siteHeader: $('.floating-nav-bar'),
		siteHeaderOffset: null,
		scrollTop: 0
	},

	WindowInteractions: function() {

		// If the '.floating-nav-bar' exists
		if ( $('.floating-nav-bar').length > 0 ) {

			// On window load or resize..
			$(window).on('load resize', function() {

				// Update the siteHeaderOffset variable with the outerHeight dimensions of the '.floating-nav-bar' element
				s.siteHeaderOffset = window.innerHeight - $('.floating-nav-bar').outerHeight();

				// If the siteHeaderOffset variable is less than or equal to the scrollTop variable.
				// So, if scrolled down the page ...
				if ( s.siteHeaderOffset <= s.scrollTop ) {

					// On '.floating-nav-bar' add a class of stick.
					$('.floating-nav-bar').addClass('stick');

				// If the siteHeaderOffset variable is greater than the scrollTop variable
				// So, if scrolled to the top ...
				} else if ( s.siteHeaderOffset > s.scrollTop ) {

					// On '.floating-nav-bar' remove the class of stick if it's there.
					$('.floating-nav-bar').removeClass('stick');
				}
			});
		}

	},

	ScrollingActions: function() {
		// When scrolling up or down
		$(window).on( 'scroll', function() {

			// Update the scrollTop variable's value with the screen position (either 0 or greater)
			s.scrollTop = $(window).scrollTop();

			// If the scrollTop variable's value is greater than zero
			if ( $('.floating-nav-bar').length > 0 ) {

				// If the siteHeaderOffset variable is less than or equal to the scrollTop variable's value.
				// So, if the nav bar has hit the top of the window's viewport.
				if ( s.siteHeaderOffset <= s.scrollTop ) {

					// On '.floating-nav-bar' add a class of stick.
					$('.floating-nav-bar').addClass('stick');

					// On '.notification-header' add a class of stick.
					$('.notification-header').addClass('stick');

					// Update the aria-hidden attribute to be false.
					$('.menu-item.menu-logo, .menu-item.menu-logo > a').attr({'aria-hidden': 'false', 'tabindex': ''});

				// If the siteHeaderOffset variable is greater than the scrollTop variable's value.
				// So, if the nav bar is below the top of the window's viewport.
				} else if ( s.siteHeaderOffset > s.scrollTop ) {

					// On '.floating-nav-bar' remove the class of stick if it's there.
					$('.floating-nav-bar').removeClass('stick');

					// On '.notification-header' remove the class of stick if it's there.
					$('.notification-header').removeClass('stick');

					// On '.notification-header' remove the class of minimize if it's there.
					$('.notification-header').removeClass('minimize');

					// Update the aria-hidden attribute to be true.
					$('.menu-item.menu-logo, .menu-item.menu-logo > a').attr({'aria-hidden': 'true', 'tabindex': '-1'});
				}
			}
		});
	},

	bindUIActions: function() {
		StickyNav.WindowInteractions();
		StickyNav.ScrollingActions();
	},

	init: function() {
		s = this.settings;
		this.bindUIActions();
		// console.log('StickyNav functionality loaded!');
	},
};
