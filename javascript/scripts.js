/* 
    MAIN SCRIPTS
    ------------
        Here's where everything comes together.

*/

// Factories
import { bookTitle, bookLink, bookAuthorNamesAndLinks } from './api-data/openLibrary.mjs';
// import { sentenceBuilderFactory } from './factories/sentenceBuilder.mjs';   
// import { addToDocumentFactory } from './factories/addToDocument.mjs';   

// Content
// const myOpening = {
//     topic: `<a class="link link--x-small link--light link--weight-900" href="//linkedin.com/in/jmwii1981" target="_blank">
//                 Jan Michael
//             </a>`,
// }
// const myLocation = {
//     segue: ` was last seen in `,
//     topic: `<a class="link link--x-small link--light link--weight-900" href="//www.google.com/maps/place/Louisville,+KY/@38.1884721,-85.9569664,10z/data=!3m1!4b1!4m6!3m5!1s0x88690b1ab35bd511:0xd4d3b4282071fd32!8m2!3d38.2526647!4d-85.7584557!16zL20vMGZfXzE" target="_blank">
//                 Louisville, KY
//             </a>, `,
// }
// const myWeather = {
//     segue: `sporting his `,
//     topic: myWeatherShoesLink,
//     conjunction: ` and a `,
//     topic: myWeatherGearLink,
//     punctuation: `, `,
// }
const myReading = {
    segue: ` reading `,
    topic: `<a href="${bookLink}">${bookTitle}</a>`,
    seque: ` by `,
    topic: function() {
        i = Object.entries(bookAuthorNamesAndLinks).length;
        for (const [key, value] of Object.entries(bookAuthorNamesAndLinks)) {
            i = i -1;
            let authorLink = ``;
            if (i == 0) {
                authorLink = `<a href="${value}">${key}</a>`;
            } else {
                authorLink = `<a href="${value}">${key}</a>,`;
            }
            return authorLink;
        };
    },
}

// const myMusic = {
//     conjunction: `and, `,
//     segue: `vibing to `,
//     topic: `<a id="myTrack" href="https://open.spotify.com/search/Track" target="_blank" class="link link--x-small link--light link--weight-900">
//                 "Track"
//             </a>`,
//     thing: ` by `,
//     topic: `<a id="myArtist" href="https://open.spotify.com/search/Artist" target="_blank" class="link link--x-small link--light link--weight-900">
//                 Artist
//             </a>`,
//     punctuation: `.`,
// }
// const myClosing = {
//     closingPTag: `</p>`,
// }
// const fullSentence = []
// fullSentence.push(myOpening, myLocation, myWeather, myReading, myMusic, myClosing);

/*
    STATIC SENTENCE (BEGINNING)
    <p 
    class="p p--x-small p--light p--line-height-medium p--align-center-mbl">
        <a class="link link--x-small link--light link--weight-900" property="dct:title" rel="cc:attributionURL" href="//github.com/jmwii1981/vita" target="_blank">
            Vita
        </a>
        is currently built with
        <span id="myCommits">
        </span>.
        It is hosted with
        <a class="link link--x-small link--light link--weight-900" href="//pages.github.com/" target="_blank">Github Pages</a>, and boasts a <a class="link link--x-small link--light link--weight-900" href="//creativecommons.org/" target="_blank">
            Creative Commons license
        </a>:
        <a class="link link--x-small link--light link--weight-900" href="//creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="license noopener noreferrer">
            CC BY-NC 4.0
        </a>.
    </p>
*/
