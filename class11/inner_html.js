// ==================================================================
// innerHTML

// console.log(document.body.innerHTML);
// document.body.innerHTML = "<p>Completely new content</p>";

// const $p = document.querySelector("p");

// $p.innerHTML = "<span>something stupid</span>";

/**
 * odczytywalna i zapisywalna (readable and writeable)
 * usuwa wszystkie eventy!
 * cala robote wykonuje przegladarka!
 * brak referencji do stworzonych elementów
 *
 */

// ==================================================================
// insertAdjacentHTML

/**
 * $element.insertAdjacentHTML(position, html)
 * beforebegin - przed $elementem (element musi istniec w DOMie)
 * afterbegin - wewnatrz $elementu przed dziecmi
 * beforeend - wewnatrz $elementu po dzieciach
 * afterend - po $elemencie (element musi istniec w DOMie)
 */

const $ul = document.querySelector("ul");

// console.log($ul);
$ul.insertAdjacentHTML("beforebegin", "<h2>Lista</h2>");
$ul.insertAdjacentHTML("afterbegin", "<li>Nowy pierwszy element listy</li>");
$ul.insertAdjacentHTML("afterbegin", "<li>Nowy ostatni element listy</li>");
$ul.insertAdjacentHTML("afterend", "<footer>Stopka</footer>");
