const fs = require("fs");
const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
});

// app.get("/", (req, res) => {
//     res.send("Hello Express!");
// });

app.get("/express", (req, res) => {
    res.send("Creating routes with Express is simple!");
});

app.get("/user", (req, res) => {
    res.send("Recieved a GET request for user!");
});

app.post("/user", (req, res) => {
    res.send("Received a POST request for user!");
});

app.get("/ab?cd", (req, res) => {
    res.send("ab?cd");
});

app.get("/ab+cd", (req, res) => {
    res.send("ab(how many b's?)cd");
});


app.get("/ab*cd", (req, res) => {
    res.send("ab(something here)cd");
});

app.get("/ab(cd)?e", (req, res) => {
    res.send("ab(maybe cd)e");
});

app.get(/.*fly$/, (req, res) => {
    res.send("Any route that ends in fly?");
});

app.get(/a/, (req, res) => {
    res.send("any route with an 'a'?");
});

app.get("/users/:userID/profile/:profileID", (req, res) => {
    res.send(`userID: ${req.params.userID} and profileID: ${req.params.profileID} are route params. Cool Beans!`);
});

//Route chaining
app.route('/leaner')
.get((req, res) => {
    res.send("You are now looking a the leaners.");
})
.post((req, res) => {
    res.send("You have now added a user!");
}).put((req, res) => {
    res.send("You have updated the learner!");
});

//Middleware
// const logReq = function (req, res, next) {
//     console.log("Request Recieved!");
//     next();
// };

// app.get("/", (req, res) => {
//     res.send("Keeping it Simple.")
// });

// app.use(logReq);

//Error-Handling Middleware
const cookieParser = require("cookie-parser");

async function validateCookies(req, res, next) {
  await cookieValidator(req.cookies);
  next();
}

async function cookieValidator(cookies) {
  console.log(cookies);
  return true;
}

app.use(cookieParser());

app.use(validateCookies);

// error handler
app.use((err, req, res, next) => {
  res.status(400).send(err.message);
});

app.get("/", (req, res) => {
  res.send("Keeping it simple.");
});

// const http = Noderequire("http");

// http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/html");
//     res.write("Hello World");
//     res.end();
// }).listen(3000, () => {
//     console.log(`Server running.`);
// });

// const http = require('http');
// // const hostname = '127.0.0.1';
// // const port = 3000;


// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.write(`<body style="background-color: black"></body>`);
//     res.write(`<h1 style="color: green">Hello World!</h1>`);
//     res.write(`<p style="color: white">Looks like I can write whatever I want to the page, huh?!</p>`);
//     res.write(`<h2 style="color: blue"> Cool Beans! </h2>`)
//     res.end(`<p style="color: white"> So I can put whatever here?</p>`);
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

// const adventure = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//         name: "Leo",
//         type: "Cat",
//         companion: {
//             name: "Frank",
//             type: "Flea",
//             inventory: ["small hat", "sunglasses"]
//         }
//     },
//     roll (mod = 0) {
//         const result = Math.floor(Math.random() * 20) + 1 + mod;
//         console.log(`${this.name} rolled a ${result}.`)
//     }
// }

// console.log(`Adventurer's name: ${adventure.name}
// Adventurer's health: ${adventure.health}`);

// let inventory = "Adventurer's inventory: "
// adventure.inventory.forEach((item) => {
//     inventory += item + " "
// });
// console.log(inventory);

// let companion = adventure.companion;

// console.log(`Adventurer's companion Name: ${companion.name}
// Adventurer's companion Type: ${companion.type}`);

// let companionsCompanion = companion.companion

// console.log(`Companion's companion Name: ${companionsCompanion.name}
// Companion's companion Type: ${companionsCompanion.type}
// Companion's companion inventory: ${companionsCompanion.inventory}`);

// adventure.roll();

// class Character {
//   static MAX_HEALTH = 100;
//   constructor(name) {
//     this.name = name;
//     this.health = 100;
//     this.inventory = [];
//   }
//   roll(mod = 0) {
//     const result = Math.floor(Math.random() * 20) + 1 + mod;
//     // console.log(`${this.name} rolled a ${result}`);
//     return result;
//   }
// }

// class Adventurer extends Character {
//   static ROLES = ["Fighter", "Healer", "Wizard"];
//   constructor(name, role) {
//     super(name);
//     this.role = role;
//     if (!Adventurer.ROLES.includes(role)) {
//       console.log(`A role must be declared: "Fighter", "Healer", or "Wizard"`);
//     }
//     this.inventory.push("bedroll", "50 gold coins");
//   }
//   scout() {
//     console.log(`${this.name} is scouting ahead...`);
//     super.roll();
//   }
//   duel(opponent) {
//     if (!(opponent instanceof Character)) {
//         console.log(`Please enter an opponent to duel`);
//         return;
//     }

//     while(this.health > 50 || opponent.health > 50){
//         const adventurer = this.roll();
//         const Opponent = opponent.roll();
//         if(adventurer > Opponent) {
//             opponent.health -= 1
//             console.log(`${this.name} rolled ${adventurer} while ${opponent.name} rolled ${Opponent}: ${opponent.name} loses 1 health ${opponent.health}`);
//         } else if (adventurer < Opponent) {
//             this.health -= 1
//             console.log(`${opponent.name} rolled ${Opponent} while ${adventurer} rolled ${adventurer}: ${this.name} loses 1 health ${this.health}`);
//         } else {
//             console.log(`${this.name} and ${opponent.name} rolled the same result ${adventurer}`);
//         }
//     }
//     if(this.health > opponent.health){
//         console.log (`Winner of the duel is ${this.name}`);
//     } else {
//         console.log(`Winner of the deul is ${opponent.name}`)
//     }
//   }
// }

// class Companion extends Character {
//   constructor(name, type) {
//     super(name);
//     this.inventory.push("small health potion", "small hat");
//     this.type = type;
//   }
//   speak() {
//     console.log(`You can't understand your companion`);
//   }
// }

// const robin = new Adventurer("Robin", "Fighter");
// const tess = new Adventurer("Tess", "Healer");
// robin.inventory = ["sword", "potion", "artifact"];
// // robin.scout();
// robin.duel(tess);

// robin.companion = new Companion("Leo", "Cat");

// robin.companion.companion = new Companion("Frank", "Flea");
// robin.companion.companion.inventory = ["small hat", "sunglasses"];


// import {add, subtract, multiply, divide} from "./utils.js";

// let num1 = 6;
// let num2 = 15;

// console.log(`The sum of ${num1} and ${num2} is: ${add(num1, num2)}`);

// console.log(`The subtraction of ${num1} and ${num2} is: ${subtract(num1, num2)}`);

// console.log(`The product of ${num1} and ${num2} is: ${multiply(num1, num2)}`);

// console.log(`The division of ${num1} and ${num2} is: ${divide(num1, num2)}`);

// const canYouSeeMe = true;
// function functionBaby () {
//     return new Promise((resolve, reject) => {
//         if(canYouSeeMe){
//             resolve(`Yes! I can see you`);
//         } else {
//             reject(`Unfortunately, no. I can't see you`);
//         }
//     });
// };

// async function testing () {
//     try {
//         const wellCanYou = await functionBaby();
//         console.log(wellCanYou);
//     } catch (err) {
//         console.error(err);
//     } finally {
//         console.log("Testing if I run");
//     }
// };

// testing();
// console.log("Does this run first then");


// const request = new XMLHttpRequest();
// request.open("GET", "http://www.example.com/myFile.json", true);

// request.setRequestHeader(
//     "Content-Type",
//     "my-MIME-type-here"
// );
// request.send();

// function handleResponse() {
//     if (request.readyState === XMLHttpRequest.DONE) {
//         // request is complete; do tasks.
//     } else {
//         // request is not complete.
//     }
// }

// request.onreadystatechange = handleResponse;