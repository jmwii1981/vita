var lastFMAPI,
LastFMAPI = {
	settings: {
		window: $(window),
		ajax: $.get,
		apiRoot: "https://ws.audioscrobbler.com/2.0/?",
		defaultRequest: {
				user: "jmwii1981",
				api_key: "3f05be6c065c84dffd06fc4306e60ef4",
				format: "json",
			},
		trackRequest: {
				method: "user.getrecenttracks",
				limit: "1",
			},
		userRequest: {
				method: "user.getinfo",
			},
		callForTrack: undefined,
		callForUser: undefined,
		callResponse: undefined,
		track: undefined,
		trackName: undefined,
		trackURL: undefined,
		trackURL: undefined,
		trackArtist: undefined,
		responseOutput: undefined,
		userOutputContainer: $("#last-fm-user-output"),
		trackOutputContainer: "#last-fm-track-output",
	},
	getUserInfo: function() {
		var callForUser = lastFMAPI.apiRoot + $.param(lastFMAPI.defaultRequest) + "&" + $.param(lastFMAPI.userRequest);

		lastFMAPI.ajax(callForUser).done(function (callResponse) {
			// test call results
			console.log(callResponse);

			// test output
			// console.log(responseOutput);
			// lastFMAPI.userOutputContainer.html(responseOutput);
		});
	},
	getRecentTrack: function() {
		var callForTrack = lastFMAPI.apiRoot + $.param(lastFMAPI.defaultRequest) + "&" + $.param(lastFMAPI.trackRequest);

		lastFMAPI.ajax(callForTrack).done(function (callResponse) {
			// test call results
			// console.log(callResponse);

			track = callResponse.recenttracks.track[0],
			trackName = track.name,
			trackURL = track.url,
			trackURL = encodeURI(trackURL),
			trackArtist = track.artist["#text"],
			responseOutput = "Currently Vibing to <a class='link link--dark' href='" + trackURL + "' target='_blank'>\"" + trackArtist + "\"<\/a>";

			// test output
			console.log(responseOutput);

			$(lastFMAPI.trackOutputContainer).html(responseOutput);
		});
	},
	updateRecentTrack: function() {
		setInterval(function() {
			LastFMAPI.getRecentTrack();
		}, 30 * 1000); // 30 * 1000 milsec = 30 seconds
	},
	onWindowLoad: function() {
		LastFMAPI.getUserInfo();
		LastFMAPI.getRecentTrack();
		LastFMAPI.updateRecentTrack();
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
