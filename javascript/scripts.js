/* 
    MAIN SCRIPTS
    ------------
        Here's where everything comes together.

*/

// Data
import { githubRepoUrlFull, githubCommitsUrlFull, numberOfCommits } from './data/github.mjs';
import { listOfAuthors, bookLink, bookTitle } from './data/openLibrary.mjs';
import { searchUrlFull, currentShoes, currentGear } from './data/openWeather.mjs';
import { spotifyTrackURL, spotifyArtistURL, trackName, trackArtist } from './data/lastFm.mjs';
import { checkDate } from './data/date.mjs';

// Factories
import { paragraphTagFactory } from './factories/paragraphTag.mjs';
import { anchorTagFactory } from './factories/anchorTag.mjs';
import { sentenceGrabberFactory } from './factories/sentenceGrabber.mjs';
import { sentenceDissectorFactory } from './factories/sentenceDissector.mjs';


// Type out big title at top of page with audio ...
const bigTitleElementSelector = `big-title`;
const bigTitle = sentenceGrabberFactory(bigTitleElementSelector);
const bigTitleList = sentenceDissectorFactory(bigTitle);

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function typeOutBigTitle (bigTitleElement, bigTitleContent) {
    const bigTitleContentSize = bigTitleContent.length;
    bigTitleContent = bigTitleContent.entries();
    const cursor = document.getElementById(`cursor`);
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))
    let waitTime = randomIntFromInterval(25, 250);
    
    
    const keyPressSound1 = new Audio('./audio/key_press1.wav');
    keyPressSound1.loop = false;
    

    cursor.classList.add('blink');
    const loop = async () => {
        cursor.classList.remove('blink');

        for (let [key, value] of bigTitleContent) {
            value = document.createTextNode(value);

            if (key < bigTitleContentSize - 1) {
                // // play random audio sound
                // var playPromise = keyPressSound1.play();
                document.getElementById(`big-title`).insertBefore(value, cursor);
                // hold up, wait a second
                waitTime = randomIntFromInterval(75, 100);
                await wait(waitTime);
            }
            if (key == bigTitleContentSize - 1) {
                // play loudest audio sound
                document.getElementById(`big-title`).insertBefore(value, cursor);
            }
        }
        cursor.classList.add('blink');
    }
    loop();
}
typeOutBigTitle(bigTitleElementSelector, bigTitleList);




// Create Objects for later use ...
const googleMapsLink = anchorTagFactory(`Louisville, KY`, undefined, `//www.google.com/maps/place/Louisville,+KY/@38.1884721,-85.9569664,10z/data=!3m1!4b1!4m6!3m5!1s0x88690b1ab35bd511:0xd4d3b4282071fd32!8m2!3d38.2526647!4d-85.7584557!16zL20vMGZfXzE`, undefined, undefined, undefined, undefined);
const myLinkedInLink = anchorTagFactory(`Jan Michael`, undefined, `//linkedin.com/in/jmwii1981`, undefined, undefined, undefined, undefined);
const myWeatherShoesLink =  anchorTagFactory(`${currentShoes}`, undefined, `${searchUrlFull}`, undefined, undefined, undefined, undefined);
const myWeatherGearLink =  anchorTagFactory(`${currentGear}`, undefined, `${searchUrlFull}`, undefined, undefined, undefined, undefined);
const myBookLink = anchorTagFactory(`${bookTitle}`, undefined, `${bookLink}`, undefined, undefined, undefined, undefined);
const myTrackLink = anchorTagFactory(`${trackName}`, undefined, `${spotifyTrackURL}`, undefined, undefined, undefined, undefined);
const myArtistLink = anchorTagFactory(`${trackArtist}`, undefined, `${spotifyArtistURL}`, undefined, undefined, undefined, undefined);
const myVitaLink = anchorTagFactory(`Vita`, undefined, `//github.com/jmwii1981/vita`, undefined, undefined, undefined, undefined);
const myCCLIcenseLink = anchorTagFactory(`Creative Commons license`, undefined, `//creativecommons.org/`, undefined, undefined, undefined, undefined);
const myCCLicensureLink = anchorTagFactory(`CC BY-NC 4.0`, undefined, `//creativecommons.org/licenses/by-nc/4.0/`, undefined, undefined, undefined, undefined);
const myGithubPagesLink = anchorTagFactory(`Github Pages`, undefined, `https://pages.github.com/`, undefined, undefined, undefined, undefined);
const myGithubCommitsLink = anchorTagFactory(`${numberOfCommits} commits`, undefined, `${githubCommitsUrlFull}`, undefined, undefined, undefined, undefined);
const updateStatus = ` Last updated just now.`;
const lastUpdated = document.createElement('span'); lastUpdated.setAttribute(`id`, `current-date-time`); lastUpdated.append(updateStatus);


// Content
const myOpening = [
    myLinkedInLink,
];
const myLocation = [
    ` was last seen in `,
    googleMapsLink,
    `, `,
];
const myWeather = [
    ` sporting his `,
    myWeatherShoesLink,
    ` and `,
    myWeatherGearLink,
    `, `,
];
const myReading = [
    ` reading `,
    myBookLink,
    ` by `,
    listOfAuthors,
];
const myMusic = [
    `, and vibing to `,
    myTrackLink,
    ` by `,
    myArtistLink,
    `. `,
];
const myVita = [
        myVitaLink,
        ` is built with `,
        myGithubCommitsLink,
        `. It is hosted with `,
        myGithubPagesLink,
        `, and boasts a `,
        myCCLIcenseLink,
        `: `,
        myCCLicensureLink,
        `.`
];
const lastUpdate = [
    lastUpdated,
];

// Put it all together ..
let fullSentence = [];
// fullSentence.push(myOpening, myLocation, myWeather, myReading, myMusic, myVita, lastUpdate);
fullSentence.push(myOpening, myLocation, myWeather, myReading, myMusic);
fullSentence = fullSentence.flat();

// Create p tag, flatten array, and append to p tag ...
let mySentence = paragraphTagFactory(``);
fullSentence.forEach(element => mySentence.append(element));

fullSentence = [];
fullSentence.push(lastUpdate);
fullSentence = fullSentence.flat();
let myLastUpdate = paragraphTagFactory(``,[`p`, `p--small p--dark`, `p--weight-400` , `p--line-height-small`, `p--align-left-mbl`]);
fullSentence.forEach(element => myLastUpdate.append(element));

// Append mySentence to footer-content div in document ...
const dataPointsContent = document.getElementById(`datapoints-content`);
dataPointsContent.append(mySentence);
dataPointsContent.append(myLastUpdate);

setInterval(function() {
    let rightNowTime = checkDate().rightNowTime;
    lastUpdated.innerText = ` Last updated today at ${rightNowTime}.`;
}, 1000);