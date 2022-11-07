/*
	ABOUT
*/
let checkForTrack = async function() {

	// Vars to be declared ...
	const spotifySearchURL = `https://open.spotify.com/search/`;
	const lfmRequest = {
		root: `https://ws.audioscrobbler.com/2.0/`,
		params: {
			default: {
				user: `jmwii1981`,
				apiKey: `3f05be6c065c84dffd06fc4306e60ef4`,
				format: `json`,
			},
			track: {
				method: `user.getrecenttracks`,
				limit: `1`,
			},
			user: {
				method: `user.getinfo`,
			},
		},
	};
	const requestRoot = `${lfmRequest.root}?user=${lfmRequest.params.default.user}&api_key=${lfmRequest.params.default.apiKey}&format=${lfmRequest.params.default.format}`;
	const requestTrack = `${requestRoot}&method=${lfmRequest.params.track.method}&limit=${lfmRequest.params.track.limit}`;
	const requestUser = `${requestRoot}&method=${lfmRequest.params.user.method}`;

	let getTrackInfo = async function() {
		try {
			const response = await fetch(requestTrack);

			if (!response.ok) {
				return;
				throw new Error(``);
			}
			const myTracks = await response.json();
			return myTracks;
		} catch (err) {
			return;
			console.log(err);
		}
	}
	const tracksResults = await getTrackInfo();
	const recentTrack = tracksResults.recenttracks.track[0];
	const trackName = recentTrack.name;
	const trackURL = new URL(recentTrack.url).toString();
	const trackArtist = recentTrack.artist["#text"];
	const spotifyTrackURL = new URL(`${spotifySearchURL}${trackName} by ${trackArtist}`).toString();

	// ------------ below is temporary until refactor ----

	const myResponseLinkAttribs2 = {
		classes: [ // Could potentially change
			`link`,
			`link--x-small`,
			`link--dark`,
			`link--weight-500`
		],
		href: `${spotifyTrackURL}`,
		target: `_blank`,
	}
	const myResponseLink2 = document.createElement('a');
		myResponseLink2.id = `myTrack`;
		myResponseLink2.href = myResponseLinkAttribs2.href;
		myResponseLink2.target = myResponseLinkAttribs2.target;
	const responseLinkClasses2 = Object.values(myResponseLinkAttribs2.classes);
		responseLinkClasses2.forEach(classes => myResponseLink2.classList.add(classes));

	const myResponse2 = `${trackName} by ${trackArtist}`;
	const myMusicEl = document.getElementById(`last-fm-track-output`);


	if (document.getElementById(`myTrack`)) {
		if (document.getElementById(`myTrack`).textContent.toString() != myResponse2.toString()) {
			document.getElementById(`myTrack`).remove();
			myResponseLink2.textContent = myResponse2;
			myMusicEl.appendChild(myResponseLink2);
		}
	} else {
		myResponseLink2.textContent = myResponse2;
		myMusicEl.appendChild(myResponseLink2);
	}



}
checkForTrack();
const getNewResults = function() {
	checkForTrack();
	// console.log('tried again');
}

setInterval(getNewResults, 10000);