function User({ name, email }) {
  this.name = name;
  this.email = email;

  this.showMyName = function () {
    console.log(this.name);
  };
}

const piotr = new User({ name: "piotr", email: "gdfgd@wp.pl" });
const jan = new User({ name: "piotr", email: "gdfgd@wp.pl" });
piotr.showMyName();
console.log(piotr);

User.prototype.showEmail = function () {
  console.log(`my email is: ${this.email}`);
};

jan.showEmail();

// function SuperUser({ name, email }) {
//   User.call(this, name, email);

//   this.permissiong = "superUser";
// }

// Object.setPrototypeOf(SuperUser.prototype, User.prototype);
