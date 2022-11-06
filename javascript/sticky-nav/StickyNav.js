var stickyNav,
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
				stickyNav.siteHeaderOffset = window.innerHeight - $('.floating-nav-bar').outerHeight();

				// If the siteHeaderOffset variable is less than or equal to the scrollTop variable.
				// So, if scrolled down the page ...
				if ( stickyNav.siteHeaderOffset <= stickyNav.scrollTop ) {

					// On '.floating-nav-bar' add a class of stick.
					$('.floating-nav-bar').addClass('sticky').removeClass('no-stick');

				// If the siteHeaderOffset variable is greater than the scrollTop variable
				// So, if scrolled to the top ...
				} else if ( stickyNav.siteHeaderOffset > stickyNav.scrollTop ) {

					// On '.floating-nav-bar' remove the class of stick if it's there.
					$('.floating-nav-bar').addClass('no-stick').removeClass('sticky');
				}
			});
		}

	},

	ScrollingActions: function() {
		// When scrolling up or down
		$(window).on( 'scroll', function() {

			// Update the scrollTop variable's value with the screen position (either 0 or greater)
			stickyNav.scrollTop = $(window).scrollTop();

			// If the scrollTop variable's value is greater than zero
			if ( $('.floating-nav-bar').length > 0 ) {

				// If the siteHeaderOffset variable is less than or equal to the scrollTop variable's value.
				// So, if the nav bar has hit the top of the window's viewport.
				if ( stickyNav.siteHeaderOffset <= stickyNav.scrollTop ) {

					// On '.floating-nav-bar' add a class of stick.
					$('.floating-nav-bar').addClass('sticky').removeClass('no-stick');

				// If the siteHeaderOffset variable is greater than the scrollTop variable's value.
				// So, if the nav bar is below the top of the window's viewport.
				} else if ( stickyNav.siteHeaderOffset > stickyNav.scrollTop ) {

					// On '.floating-nav-bar' remove the class of stick if it's there.
					$('.floating-nav-bar').addClass('no-stick').removeClass('sticky');

				}
			}
		});
	},

	bindUIActions: function() {
		StickyNav.WindowInteractions();
		StickyNav.ScrollingActions();
	},

	init: function() {
		stickyNav = this.settings;
		this.bindUIActions();
		// console.log('StickyNav functionality loaded!');
	},
};
