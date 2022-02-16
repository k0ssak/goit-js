// ==================================================================
// Properties and attributes

/**
 * elementy to tak naprawdę obiekty które mają swoje właściwości i metody
 */

const $input = document.querySelector("input");
// const $p = document.querySelector("p");
// wartość pola
// console.log($p);
// console.log($p.value);
// console.log($input.value);
// console.log($input.type);

const $checkbox = document.querySelector('input[type="checkbox"]');
// // // stan pola wyboru
// console.log($checkbox);
// console.log($checkbox.checked);
// console.log($checkbox.value);

// $checkbox.checked = false;

// // // nazwa pola
// console.log($input.name);
// console.log($checkbox.name);

// const $img = document.querySelector("img");
// // // wartośc atrybutu src
// console.log($img.src);

// $input.value = "Python";
// $img.src = "http://onet.pl/obrazek.jpg";

// /**
//  * wartości właściwośc można zmieniac!
//  */

// // ==================================================================
// // textContent

// /**
//  * zawartość tekstowa elementu
//  */

// const $p = document.querySelector("p");
// console.log($p.textContent);
// $p.textContent = "new content";

// // ==================================================================
// // classList

// /**
//  * metody do pracy z klasami elementu
//  */

// const $elWithClasses = document.querySelector(".with-classes");
// console.log($elWithClasses);

// console.log($elWithClasses.classList.contains("super-class"));
// console.log($elWithClasses.classList.add("btn", "btn-super"));
// $elWithClasses.classList.remove("btn-super");
// $elWithClasses.classList.toggle("link");
// $elWithClasses.classList.replace("btn", "super-btn");

// console.log($elWithClasses.classList);

// /**
//  * style property
//  * el.style
//  */

// const $styleElement = document.querySelector(".with-style");
// console.log($styleElement.style);
// $styleElement.style.fontSize = "24px";
// $styleElement.style.display = "flex";
// $styleElement.style.borderRadius = "5px";

// /**
//  * wlasciwosc zapisane jako camelCase
//  * CSSStyleDeclaration - style wbudowane elementu
//  * uzywane gdy chcemy nadać dynamiczne style
//  */

// // ==================================================================
// // Attributes

const $attrEl = document.querySelector(".attr-el");

// console.log($attrEl.hasAttribute("id"));
// console.log($attrEl.getAttribute("alt"));
// console.log($attrEl.setAttribute("class", "new-btn"));
// $attrEl.removeAttribute("id");
// console.log($attrEl.attributes);

console.log($attrEl.getAttribute("data-add-to-cart"));

// // ==================================================================
// // data-* i dataset

// const $addToCart = document.querySelector("[data-add-to-cart]");

console.log($attrEl.dataset);
