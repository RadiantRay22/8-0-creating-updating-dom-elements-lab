const firstSection = document.querySelector('section');
firstSection.setAttribute("class", "featured");
/* this Add a class of "featured" to the first `section` element on the page.
document.querySelector selects an element on the dom 
then you use the variable name firstSection.setAttribute, then name class and feature
WHAT does class mean, a feature a group of elements can have*/


const articles = document.createElement('article')
const img = document.createElement('img')
    img.classList.add('src')
    img.classList.add('alt')
    img.setAttribute('src', './images/paul-gilmore-unsplash.jpg')
    img.setAttribute('alt', 'Image of a mountain in front of a lake.')
const h3 = document.createElement('h3')
    h3.textContent = 'Stop Planning'
const paragraph1 = document.createElement('p')
    paragraph1.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
const paragraph2 = document.createElement('p')
const aside = document.createElement('aside')
const strong = document.createElement('strong')
    strong.textContent = 'Read Time:'
const span = document.createElement('span')
    span.textContent = ' 4 Minutes'
const a = document.createElement('a')
    a.classList.add('href')
    a.setAttribute('href', '#')
    a.textContent = 'Read more...'

// *Add New Post & append to section post
const sectionPost = document.querySelector("section.posts");
let article = document.createElement("article");
sectionPost.append(article);

/*.prepend() is a method that can be called on elements to add a new element before all other elements.

Other methods can be used to place elements where you like:

.append() will place an element as the last one in a list of nodes.
.before() will place an element directly before the element that is calling the method.
.after() will place an element directory after the element that is calling the method. */


/* create img element (gonna be empty)

What to create
what do I need to give 
where is it going?

attributes go within tag
*/



const endPost = document.querySelector('section.posts') /*what goes here?*/
endPost.append(addArticle) /*why isn't this one with quotations?
Create the following `article` element with JavaScript 
and add at the end of the `section.posts` (inside of javascript & Css
    class is represented by (.) ..... id is represented by (#) element
    query selector takes in argument that is a string rep the element we are 
    looking for*/

/* id can only belong to one element, class (group of elements)*/