/* 
    PARAGRAPH TAG FACTORY
    ------------------
    OPTIONS
        • paragraphTagText
            no defaults
        • paragraphTagClasses
            defaults: [`p`, `p--x-small p--light`, `p--line-height-medium`, `p--align-center-mbl`]
*/
const paragraphTagFactory = function(paragraphTagText, paragraphTagClasses = [`p`, `p--x-small p--light`, `p--line-height-medium`, `p--align-center-mbl`]) {
    const paragraphTag = document.createElement('p');
        paragraphTag.setAttribute(`class`, paragraphTagClasses.join(` `));
        paragraphTag.append(paragraphTagText);
    return paragraphTag;
}
export { paragraphTagFactory };