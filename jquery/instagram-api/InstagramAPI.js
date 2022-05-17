var instagramAPI,
InstagramAPI = {
	settings: {
		window: $(window),
		ajax: $.get,
		resultsContainer: $("#medium-output"),
	},
	onWindowLoad: function() {
		var apiRoot = "https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token={long-lived-access-token}",
		request = {
			grant_type: "ig_exchange_token",
			access_token: "jmwii1981",
		},
		call = apiRoot + $.param(request);

		var call = ";

		instagramAPI.ajax(call).done(function (callResponse) {
			console.log(callResponse);
		});
	},
	bindUIActions: function() {
		InstagramAPI.onWindowLoad();
	},
	init: function() {
		instagramAPI = this.settings;
		this.bindUIActions();
		console.log( 'InstagramAPI loaded!' );
	},
};
