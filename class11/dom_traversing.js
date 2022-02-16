// ==================================================================
// DOM Traversing

/**
 * window.document / document
 * ancestor, descendant, parent, child, sibling
 * root node
 * tylko jeden rodzic
 * dowolna ilość dzieci
 * sasiadujace elementy
 * dzieci vs potomkowie
 */

const $ul = document.querySelector("ul");

console.log($ul);

// // element rodzica
console.log($ul.parentNode);

// // wszystkie  potomne (wraz z tekstowymi)
console.log($ul.childNodes);

// // wszystkie elementywezly potomne odpowiadajace znacznikom
console.log($ul.children);

// // pierwszy węzeł potomny
console.log($ul.firstChild);

// // pierwszy element potomny
console.log($ul.firstElementChild);

// // osatni węzeł potomny
console.log($ul.lastChild);

// // ostatni element potomny
console.log($ul.lastElementChild);

// // element sasiadujacy po lewej stronie
console.log($ul.previousElementSibling);

// // element sasiadujacy po prawej stronie
console.log($ul.nextElementSibling);

/**
 * kolekcje DOM są psuedotablicami!
 * Array.from
 * [...]
 */
