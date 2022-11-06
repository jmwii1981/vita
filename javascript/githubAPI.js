/*
    The Github API for 'Listing Commits' provides the per_page parameter which allow us to 
    only display a given number of commits per page up to '100'. For instance, setting the
    'per_page' parameter to 1 will only list 1 commit per page. Therefor, 'page' parameter
    returns a numerical value of pages. If we have '192' commits and list 1 commit per page,
    it's expected that if we have '192' commits, then we'll have a value of '192' pages.

    The goal of this program is to grab the value of the 'page' parameter in a given
    Github API provided URL to understand how many commits have been pushed to a given
    repo. That value will then be used to display this data on a web page.
*/

// Var declarations
const myURL = `https://api.github.com`;
const myUsername = `jmwii1981`;
const myRepo = `vita`;
const myCommitsEl = document.getElementById(`myCommits`);

// Fx definitions
async function getData(givenURL, givenOwner, givenRepo) {
    // Build out the URL to fetch so that we get my commits within my repo
    givenURL = `${givenURL}/repos/${givenOwner}/${givenRepo}/commits?per_page=1`;

    // Get a response for the built out URL to fetch
    let myResponse = await fetch(givenURL)
        .then((githubResponse) => {
            return githubResponse.headers;
    });
 
    // Build new empthy Map object
    let myResponseMap = new Map();
 
    // Store key-value pairs from URL to fetch response data in new Map object
    for (let [key, value] of myResponse) {
        myResponseMap = myResponseMap.set(key, value);
    }

    // Return the Map object and get the value of the key 'link'
    myResponse = myResponseMap.get(`link`);

    // Clean up the link value like so ...
    myResponse = myResponse.split(`, `).pop().replace(/<|>|;|rel=|"|last/gi, ``).trim().toString();
    
    // Parse URL
    myResponse = new URL(myResponse);

    // Grab the 'page' parameter's value
    myResponse = myResponse.searchParams.get(`page`);

    // Inject the resulting value where it needs to go ...
    myResponse = document.createTextNode(`${myResponse}`);
    myCommitsEl.appendChild(myResponse);
}
getData(myURL, myUsername, myRepo);