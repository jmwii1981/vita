var lastFMAPI,
LastFMAPI = {
	settings: {
		window: $(window),
		ajax: $.get,
		resultsContainer: $("#last-fm-output"),
	},
	onWindowLoad: function() {
		lastFMAPI.window.on('load', function () {

			var apiRoot = "https://ws.audioscrobbler.com/2.0/?",
			request = {
				method: "user.getrecenttracks",
				user: "jmwii1981",
				api_key: "3f05be6c065c84dffd06fc4306e60ef4",
				limit: "1",
				format: "json",
			},
			call = apiRoot + $.param(request);

			lastFMAPI.ajax(call).done(function (callResponse) {
				// console.log(callResponse);
				var track = callResponse.recenttracks.track[0],
					trackName = track.name,
					trackURL = track.url,
					trackURL = encodeURI(trackURL),
					trackArtist = track.artist["#text"],
					responseOutput = "Currently Vibing to: <a class='link link--dark' href='" + trackURL + "'>\"" + trackName + "\"<\/a> by " + trackArtist;

					$("#last-fm-output").append(responseOutput);
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
