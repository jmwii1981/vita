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

// Var declarations
const myAPIURL = `https://api.github.com`;
const myURL = `https://github.com`;
const myUsername = `jmwii1981`;
const myRepo = `vita`;
const myBranch = `main`;

const myCommitsEl = document.getElementById(`myCommits`);
const myResponseLinkAttribs = {
    classes: [ // Could potentially change
        `link`,
        `link--x-small`,
        `link--dark`,
        `link--weight-500`
    ],
    href: `${myURL}/${myUsername}/${myRepo}/commits/${myBranch}`,
    target: `_blank`,
}
const responseLinkClasses = Object.values(myResponseLinkAttribs.classes);
const myResponseLink = document.createElement('a');

// Fx definitions
const getData = async function(givenURL, givenOwner, givenRepo) {

    // Build out the URL to fetch so that we get my commits within my repo
    givenURL = `${givenURL}/repos/${givenOwner}/${givenRepo}/commits?per_page=1`;

    // Get a response for the built out URL to fetch
    let myResponse = await fetch(givenURL)
        .then((githubResponse) => {
            return githubResponse.headers;
    });
 
    // Build new empty Map object
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

    // Store resulting value in 'myResponse'
    myResponse = document.createTextNode(`${myResponse} commits`);

    // Build a link to recent commits, and insert it and the resulting value from above where it needs to go ...
    myResponseLink.href = myResponseLinkAttribs.href;
    myResponseLink.target = myResponseLinkAttribs.target;
    responseLinkClasses.forEach(classes => myResponseLink.classList.add(classes));
    myResponseLink.appendChild(myResponse);
    myCommitsEl.appendChild(myResponseLink);
}

// Fx executions
getData(myAPIURL, myUsername, myRepo);