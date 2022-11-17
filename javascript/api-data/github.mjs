/*
    The Github API for 'Listing Commits' (https://docs.github.com/en/rest/commits/commits)
    instructs us that it provides the per_page parameter which allow us to only display a
    given number of commits per page.
    
    For instance, setting the 'per_page' parameter to 1 will only list 1 commit per page.
    Therefore, 'page' parameter returns a numerical value of pages. If we have '192' commits
    and list 1 commit per page, it's expected we'll have a value of '192' pages.

    The goal of this program is to grab the value of the 'page' parameter in a given
    Github API provided URL and its endpoints to understand how many commits have been
    pushed to a given repo. That value will then be used to display this data on a web page.
*/
import { urlBaseFactory } from '../factories/urlBase.mjs';
import { urlAssimilationFactory } from '../factories/urlAssimilation.mjs';
import { apiFetchFactory } from '../factories/apiFetch.mjs';

// Var declarations for linking out to commits page
// const myAPIURL = `https://api.github.com`;
// const myURL = `https://github.com`;
// const myUsername = `jmwii1981`;
// const myRepo = `vita`;
// const myBranch = `main`;
// const myCommitsEl = document.getElementById(`myCommits`);
// const myResponseLinkAttribs = {
//     classes: [ // Could potentially change
//         `link`,
//         `link--x-small`,
//         `link--light`,
//         `link--weight-900`
//     ],
//     href: `${myURL}/${myUsername}/${myRepo}/commits/${myBranch}`,
//     target: `_blank`,
// }
// const responseLinkClasses = Object.values(myResponseLinkAttribs.classes);
// const myResponseLink = document.createElement('a');


// GH API URL (NEW)
let apiUrl = {
    base: {
        protocol: undefined,
        tertiaryDomain: `api`,
        secondaryDomain: `github`,
        topDomain: `com`,
    },
    paths: [
        `repos`,
        `jmwii1981`,
        `vita`,
        `commits`,
    ],
    params: {
        per_page: `1`,
    },
};
apiUrl.base = Object.values(apiUrl.base);
const apiUrlBase = urlBaseFactory(...apiUrl.base);
const apiUrlFull = urlAssimilationFactory(apiUrlBase, apiUrl.paths, apiUrl.params);


let result = await apiFetchFactory(apiUrlFull);
result = result.apiHeaders.link;

// Clean up the link value like so ...
result = result.split(`, `).pop().replace(/<|>|;|rel=|"|last/gi, ``).trim().toString();

// Parse URL
result = new URL(result);

// Grab the 'page' parameter's value
result = result.searchParams.get(`page`);

// Store resulting value in 'myResponse'
result = document.createTextNode(`${result} commits`);

export { result };