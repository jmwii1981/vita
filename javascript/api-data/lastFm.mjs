/*
	ABOUT
*/
import { urlBaseFactory } from '../factories/urlBase.mjs';
import { urlAssimilationFactory } from '../factories/urlAssimilation.mjs';
import { apiFetchFactory } from '../factories/apiFetch.mjs';

// REFACTOR NOT DONE YET
// REFACTOR NOT DONE YET
// REFACTOR NOT DONE YET
// REFACTOR NOT DONE YET
// REFACTOR NOT DONE YET
// REFACTOR NOT DONE YET
// REFACTOR NOT DONE YET
// REFACTOR NOT DONE YET
// REFACTOR NOT DONE YET
// REFACTOR NOT DONE YET
// REFACTOR NOT DONE YET
// REFACTOR NOT DONE YET
// REFACTOR NOT DONE YET
// REFACTOR NOT DONE YET
// REFACTOR NOT DONE YET
// REFACTOR NOT DONE YET
// REFACTOR NOT DONE YET

let checkForTrack = async function() {
	// If interval, clear out ...
	clearInterval(intervalID);

	// Vars to be declared ...
	const spotifySearchURL = `https://open.spotify.com/search`;
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
			const myTracks = await response.json();
			// console.log(myTracks);
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
	const spotifyTrackURL = new URL(`${spotifySearchURL}/${trackName} by ${trackArtist}`).toString();
	const spotifyArtistURL = new URL(`${spotifySearchURL}/${trackArtist}`).toString();

	// ------------ below is temporary until refactor ----

	const myResponseArtistLinkAttribs2 = {
		classes: [ // Could potentially change
			`link`,
			`link--x-small`,
			`link--light`,
			`link--weight-900`,
		],
		href: `${spotifyArtistURL}`,
		target: `_blank`,
	}
	const myResponseTrackLinkAttribs2 = {
		classes: [ // Could potentially change
			`link`,
			`link--x-small`,
			`link--light`,
			`link--weight-900`,
		],
		href: `${spotifyTrackURL}`,
		target: `_blank`,
	}
	const myResponseArtistLink2 = document.createElement('a');
		myResponseArtistLink2.id = `myArtist`;
		myResponseArtistLink2.href = myResponseArtistLinkAttribs2.href;
		myResponseArtistLink2.target = myResponseArtistLinkAttribs2.target;
	const responseTrackArtistClasses2 = Object.values(myResponseArtistLinkAttribs2.classes);
		responseTrackArtistClasses2.forEach(classes => myResponseArtistLink2.classList.add(classes));
	const myResponseTrackLink2 = document.createElement('a');
		myResponseTrackLink2.id = `myTrack`;
		myResponseTrackLink2.href = myResponseTrackLinkAttribs2.href;
		myResponseTrackLink2.target = myResponseTrackLinkAttribs2.target;
	const responseTrackLinkClasses2 = Object.values(myResponseTrackLinkAttribs2.classes);
		responseTrackLinkClasses2.forEach(classes => myResponseTrackLink2.classList.add(classes));

	const myResponse2Track = `"${trackName}"`;
	const whatDoing = ` vibing to `;
	const whoDoneIt = ` by `;
	const myResponse2Artist = `${trackArtist}`;
	const myResponse2 =`${myResponse2Track} by ${myResponse2Artist}`;
	const myMusicEl = document.getElementById(`last-fm-track-output`);
	const janTrackerEl = document.getElementById(`janTracker`);


	if (document.getElementById(`myTrack`) || document.getElementById(`myArtist`)) {
		if ((document.getElementById(`myTrack`).textContent.toString() != myResponse2Track.toString()) || (document.getElementById(`myArtist`).textContent.toString() != myResponse2Artist.toString())) {
			// replace element or just create an object to generate sentence with later ...
			// myResponseTrackLink2.innerHTML = myResponse2Track;
			// myResponseArtistLink2.innerHTML = myResponse2Artist;
			// myMusicEl.appendChild(myResponseTrackLink2);
			// myMusicEl.append(whoDoneIt);
			// myMusicEl.appendChild(myResponseArtistLink2);
		}
	} else {
		myResponseTrackLink2.innerHTML = myResponse2Track;
		myResponseArtistLink2.innerHTML = myResponse2Artist;
		// myMusicEl.appendChild(myResponseTrackLink2);
		// myMusicEl.append(whoDoneIt);
		// myMusicEl.appendChild(myResponseArtistLink2);
	}

	// Let's do it all again!
	//checkAgain();
}
const checkAgain = function() {
	intervalID();
}
const intervalID = function() {
	setInterval(
		checkForTrack,
		60000
	);
}

// Get the ball rolling ...
checkForTrack();
const thing3 = console.log(`lastFm`);
export { thing3 };