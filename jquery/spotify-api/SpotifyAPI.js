var lastFMAPI,
LastFMAPI = {
	settings: {
		window: $(window),
		getJSON: $.getJSON,
		resultsContainer: $("#lastFM-results"),
	},
	onWindowLoad: function() {
		lastFMAPI.window.on('load', function () {

			var params = {
				"limit": "1",
				"user": "jmwii1981",
				"api_key": "3f05be6c065c84dffd06fc4306e60ef4",


				// "url": "http://ws.audioscrobbler.com/2.0/",
				// "method": "user.getrecenttracks",
				// "format": "json",
			};
			lastFMAPI.getJSON(params).done(function (response) {
				lastFMAPI.resultsContainer.html(response);
			});
		});
	},
	bindUIActions: function() {
		LastFMAPI.onWindowLoad();
	},
	init: function() {
		lastFMAPI = this.settings;
		this.bindUIActions();
		console.log( 'LastFMAPI loaded!' );
	},
};
