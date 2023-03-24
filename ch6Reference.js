const body = document.body; // retruns node object for body
body.nodeType;
// 1	element
// 2	attribute
// 3	text
// 8	comment
// 9	body

body.nodeName; // returns name

// ways to get elements
const h1 = document.getElementById('title');
const listItems = document.getElementsByTagName('li');
const heroes = document.getElementsByClassName('hero');
const ul = document.querySelector('ul#roster');
const batman = ul.querySelector('li#bats')

heroes.children // note blank space apperes as the element " "
heroes.firstChild // be carefull of above
heroes.lastChild

const wonderWoman = document.querySelector('ul#roster li:last-child');
wonderWoman.parentNode
wonderWoman.nextSibling // null if last
wonderWoman.previousSibling // null if first

// getting text
const textNode = wonderWoman.firstChild;
textNode.nodeValue;
// or
wonderWoman.textContent;

// atributes
wonderWoman.getAttribute('class');
wonderWoman.setAttribute('class', 'villain');
wonderWoman.className; // = "new class" to set
wonderWoman.classList.add('warrior'); // douse not overwrite previous
wonderWoman.classList.toggle('hero'); // will remove the 'hero' class if present otherwise add it

// editing
const flash = document.createElement('li');
const flashText = document.createTextNode('Flash');
flash.appendChild(flashText); // this and above add list
//or
const flash2 = document.createElement('li');
flash2.textContent = 'Flash';

function createElement(tag, text) { // add element with function
    const el = document.createElement(tag);
    el.textContent = text;
    return el
}
const aquaman = createElement('li','Aquaman');

heroes.insertBefore(aquaman,wonderWoman); // add new element in specific place
heroes.appendChild(wonderWoman); // at end

heroes.removeChild(aquaman);

const h1_2 = document.getElementById('title');
const oldText = h1.firstChild;
const newText = document.createTextNode('Justice League of America');
h1_2.replaceChild(newText,oldText);

heroes.innerHTML // gets html (writable)
heroes.innerHTML = '<li>Harley Quinn</li><li>Deadshot</li><li>Killer Croc</li><li>Enchantress</li><li>Captain Boomerang</li><li>Katana</li><li>Slipknot</li>';

// live collections update

const superman = heroes.children[0];
superman.style.border = "red 2px solid";
superman.style.backgroundColor = 'blue';
//or
superman.style['background color'] = 'blue';
superman.style.display = 'none'; // hide element
getComputedStyle(superman);
getComputedStyle(superman).getPropertyCSSValue('color').cssText; // specific

// generaly better to change the class
