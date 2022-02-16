// ==================================================================
// DOM Selectors

/**
 * element.querySelector(selector);
 * zwraca pierwszy znaleziony element lub null
 * selector - to selektor ktory znamy juz z cssa
 */

const $ul = document.querySelector("ul");

// console.log($list.children[1]);
// // console.log($li);

/**
 * element.querySelectorAll(selector);
 * zwraca wszystkie znalezione elementy (psuedotabilica) lub pustą psuedotablice
 * selector - to selektor ktory znamy juz z cssa
 */

// const $lis = document.querySelectorAll("ul.list.big-list");

// console.log([...$lis]);

// /**
//  * old selector methods
//  */

// document.getElementById;
// document.getElementsByClassName;
// document.getElementsByName;
// document.getElementsByTagName('a');

// /**
//  * difference between them
//  */

const $diffLis = document.querySelectorAll("li");
const $diffSameLis = document.getElementsByTagName("li");

console.log($diffLis);
console.log($diffSameLis);

const s = document.createElement("li");
$ul.append(s);

console.log($diffLis);
console.log($diffSameLis);
