/*
    Dev Docs: https://openlibrary.org/developers/api

    HTTP Call from ... https://openlibrary.org/people/jmwii1981/books/currently-reading.json
*/

const myURL = {
    root: `https://openlibrary.org`,
    cat: `people`,
    username: `jmwii1981`,
    data_object: `books`,
    object_status: `currently-reading`,
    data_type: `json`,
};
const myQuery = `${myURL.root}/${myURL.cat}/${myURL.username}/${myURL.data_object}/${myURL.object_status}.${myURL.data_type}`

let checkForBook = async function() {
    try {
        const response = await fetch(myQuery);
        const myBook = await response.json();
        return myBook;
    } catch (err) {
        return;
    }
}
// -- Book object
const bookResult = await checkForBook();

// -- Book title
const bookTitle = bookResult.reading_log_entries[0].work.title;
const bookEndpoint = bookResult.reading_log_entries[0].work.key;
const bookEndpointSanitized = bookEndpoint.replace(/\//, ``).toString();
const bookLink = `${myURL.root}/${bookEndpointSanitized}`;

// - Book title and link to inject
const myBookEl = document.getElementById(`myBookEl`);
const myBookTitleAndLinkAttribs = {
    classes: [ // Could potentially change
        `link`,
        `link--x-small`,
        `link--light`,
        `link--weight-900`
    ],
    href: `${bookLink}`,
    target: `_blank`,
}
const myBookTitleAndLinkClasses = Object.values(myBookTitleAndLinkAttribs.classes);
const myBookResponseLink = document.createElement('a');
const myBookResponse = document.createTextNode(`${bookTitle}`);

// Build a link to recent commits, and insert it and the resulting value from above where it needs to go ...
myBookResponseLink.href = myBookTitleAndLinkAttribs.href;
myBookResponseLink.target = myBookTitleAndLinkAttribs.target;
myBookTitleAndLinkClasses.forEach(classes => myBookResponseLink.classList.add(classes));
myBookResponseLink.appendChild(myBookResponse);
myBookEl.appendChild(myBookResponseLink);





// -- Authors'
// Name
let bookAuthorNamesList = new Array();
const bookAuthorNames = bookResult.reading_log_entries[0].work.author_names; // returns object
for (let i = 0; i < bookAuthorNames.length; i++) {
    bookAuthorNamesList.push(bookAuthorNames[i]);
}
// Page link
let bookAuthorEndpointsList = new Array();
const bookAuthorsEndpoints = bookResult.reading_log_entries[0].work.author_keys; // returns object
for (let i = 0; i < bookAuthorsEndpoints.length; i++) {
    bookAuthorEndpointsList.push(bookAuthorsEndpoints[i]);
}
// List of names and links to inject
let bookAuthorNamesAndLinks = new Array();
if (bookAuthorNamesList.length == bookAuthorEndpointsList.length) {
    for (let i = 0; i < bookAuthorNamesList.length; i++) {
        let keys = bookAuthorNamesList[i];
        let values = bookAuthorEndpointsList[i];
        bookAuthorNamesAndLinks[keys] = `${myURL.root}${values}`;

        // - Author name(s) and link(s) to inject

        // make a list of authors wrapped in links to inject in footer ... 
    }
}