'use strict';
alert("Welcome to my page!");

const usersName = prompt("What is your name?");
console.log(usersName);

document.write("Hi " + usersName + " welcome to my page!");

if (usersName == "Jonathon"){
  alert("Hey bossman");
} else if (usersName == "Kassie"){
  alert("Hey teach");
} else {
  alert("Glad to have you here!");
}
