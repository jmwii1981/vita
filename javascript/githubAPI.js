/*
    == RESOURCES ==    

        Dev Docs: https://docs.github.com/en/rest/commits/commits#list-commits

        Auth Token : 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

    == WHAT IT DOES ==    

        Gets the number of commits I've made to the 'Vita' repository on Github

    == WHY THIS WORKS ==

        I've customized the response so that the 'per_page' parameter is passed a 
        value of 1 which according to Github's documentation, means that I will see
        one commit and its information listed per page. Thus, for example, if I receive
        back 192 pages, then that means I have 192 commits.

    == HOW IT'S DONE ==

        ... See below ...

*/
// Importing Github Octokit module
import { Octokit } from "https://cdn.skypack.dev/@octokit/core";

// Custom Vars declarations
let myResponse = [];
let myResponseList = [];

// Creating a new instance of Octokit that houses my auth token
const octokit = new Octokit({ auth: `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` });

// Grabbing info. from Github API
const response = await octokit.request('GET /repos/{owner}/{repo}/commits', {
    owner: 'jmwii1981',
    repo: 'vita',
    sha: 'main',
    since: '2021-12-09T00:00:00-05:00', // 2021-12-09THH:MM:SSZ
    per_page: '1',        
});

/* Pulling information relevant to my goal ...
        Stores the response and traverses to the link key and returns its value; two links
*/
myResponseList = myResponse.push(response.headers.link);
for (const item of myResponseList) {
    console.log(item);
}

console.log(`${myResponseList}`);

/* Cleans up the response by splitting the given info into an array
        Removes the last item in the array (the relevant one), and trashes the first rest of the items
        Strips out all of the junk from the response that I don't need
        Trims whitespace and ensures the remaining value is a string
*/
function cleanUpResponse(yourResponse) {
    myResponse = myResponse.split(', ').pop().replace(/<|>|;|rel=|"|last/gi, '').trim().toString();
}

cleanUpResponse(myResponse);



/* Parses the URL string
        Searches for the 'page' parameter
        Returns the numerical value that's assigned to the 'page' parameter
*/
myResponse = new URLSearchParams(myResponse).get('page');

// TEST
console.log(`${myResponse}`);