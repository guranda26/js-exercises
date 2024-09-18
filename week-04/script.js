// Task 1
function isPalindrome(str) {
  let stringToLower = "";
  let compareStr = "";
  for (let i = 0; i < str.length; i++) {
    compareStr += str[str.length - 1 - i].toLowerCase();
    stringToLower += str[i].toLowerCase();
  }
  if (compareStr === stringToLower) {
    console.log("ინფუთი არის პალიდრომი");
  } else {
    console.log("არ არის პალინდრომი");
  }
}

isPalindrome("abc");
isPalindrome("Anna");
isPalindrome("level");

// Task 2
function cutFromArray() {
  const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
  return fruits.splice(1, 2);
}

console.log(cutFromArray());

// Task 3
function sortFruitsInArray() {
  const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
  fruits.sort();
  return fruits;
}

console.log(sortFruitsInArray());

// Task 4

const calcAverage = (game1, game2, game3) => {
  const average = (game1 + game2 + game3) / 3;
  return average;
};

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins > avgKoalas * 2) {
    console.log(`avgDolphins win ${avgDolphins} vs ${avgKoalas}`);
  } else if (avgDolphins < avgKoalas * 2) {
    console.log(`avgKoalas win ${avgKoalas} vs ${avgDolphins}`);
  } else {
    console.log("No team wins...");
  }
};

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

checkWinner(scoreDolphins, scoreKoalas);

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas);
