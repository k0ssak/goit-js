// ==================================================================
// do...while loop
do {
  // code to execute
} while (condition);

// ==================================================================
// do...while loop example
let username = "";
do {
  //   if (username !== "" && username.length <= 2) {
  //     alert("Imie musi miec wiecej niz 2 znaki!");
  //   }

  username = prompt("Podaj imię");
} while (username.length <= 2);
