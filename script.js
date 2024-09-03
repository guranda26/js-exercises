"use strict";

// Ex 1

// solution 1
function reverseStudents() {
  let students = ["Nino", "Giorgi", "Elene", "Mary", "Dato"];
  const reverseStudents = students.reverse();
  return reverseStudents;
}

console.log("Exercise 1", reverseStudents());

// Ex 2
function reverseAndFilter() {
  let studentsArr = ["Ana", "Bacho", "Demetre", "Eka", "Giorgi"];
  let newStudentsArr = [];
  for (let i = studentsArr.length - 1; i >= 0; i--) {
    newStudentsArr.push(studentsArr[i]);
  }
  return function filterStudents() {
    const filtered = newStudentsArr.filter((student) => student.includes("a"));
    return filtered;
  };
}

console.log("Exercise 2", reverseAndFilter()());

// Ex 3

function isPersonHere() {
  let persons = ["David", "Elene", "Teona", "Giorgi"];
  let personName = "Elene";
  let hasElene = persons.includes(personName);
  if (hasElene) {
    return `${personName} is in the persons array`;
  } else {
    return `${personName} is not in the persons array`;
  }
}

console.log("exercise 3", isPersonHere());

// Ex 4

function sortArray() {
  let array = [1, 7, 35, 15, 30];
  let sortArray = array.sort((a, b) => a - b);
  return sortArray;
}

console.log("exercise 4: Sorted array", sortArray());

// Ex 5

function hasCredentials() {
  let user = "admin";
  let passCode = "12345";

  let usernamePrompt = prompt("Please, enter your name");
  let passwordPromp = prompt("Please, enter your password");

  console.log(usernamePrompt, passwordPromp);

  if (usernamePrompt == user && passwordPromp == passCode) {
    return "Login successful. Welcome!";
  } else if (usernamePrompt == user || passwordPromp == passCode) {
    if (usernamePrompt != user) {
      return "Incorrect username";
    } else if (passwordPromp != passCode) {
      return "Incorrect password";
    }
  } else {
    return "Login failed. Please try again.";
  }
}

console.log("Exercise 5:", hasCredentials());

// Ex 6

function toUpper(fruit) {
  let favoriteFruitToUpper = fruit.split("");
  favoriteFruitToUpper[0] = favoriteFruitToUpper[0].toUpperCase();
  favoriteFruitToUpper = favoriteFruitToUpper.join("");
  return favoriteFruitToUpper;
}
function chooseFruitQuestionnaire() {
  let favoriteFruit = prompt(
    "What is your favorite fruit? (apple, banana, orange)"
  );
  let favoriteFruitToUppercase = toUpper(favoriteFruit);
  let favoriteFruitToLowerCase = favoriteFruit.toLowerCase();

  if (favoriteFruitToLowerCase == "apple") {
    return `${favoriteFruitToUppercase}s are great for a quick snack!!`;
  } else if (favoriteFruitToLowerCase == "banana") {
    return `${favoriteFruitToUppercase}s are full of potassium!`;
  } else if (favoriteFruitToLowerCase == "orange") {
    return `${favoriteFruitToUppercase}s are a great source of vitamin C!`;
  } else {
    return "That's an interesting choice! I don't know much about that fruit.";
  }
}

console.log("Exercise 6:", chooseFruitQuestionnaire());
