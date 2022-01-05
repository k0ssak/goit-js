// ==================================================================
// switch
switch (value) {
  case value:
    instrukcja;
    break;

  case value:
    instrukcja;
    break;

  default:
    instrukcje;
}

// ==================================================================
// switch example 1
let discount;
let deliveryCost;
const basketSum = 300;

switch (basketSum) {
  case basketSum > 100: {
    discount = 5;
    deliveryCost = 10;
    break;
  }

  case basketSum > 200: {
    discount = 10;
    deliveryCost = 0;
    break;
  }

  case basketSum > 400: {
    discount = 20;
    deliveryCost = 0;
    break;
  }

  default: {
    discount = 0;
    deliveryCost = 20;
  }
}

console.log(discount, deliveryCost);

// ==================================================================
// switch example 2

let userRole = "";
let permissions;

switch (userRole) {
  case "admin": {
    permissions = 2;
    break;
  }

  case "editor": {
    permissions = 1;
    break;
  }

  case "user": {
    permissions = 0;
    break;
  }
}

console.log(permissions);
