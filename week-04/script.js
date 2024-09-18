// Task 1

function sortStringAlphabetically(str) {
  return str.split("").sort().join("");
}

console.log(sortStringAlphabetically("webmaster"));

// Task 2

function generateUseID(idLength) {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charLength = characters.length;

  for (let i = 0; i < idLength; i++) {
    result += characters.charAt(Math.round(Math.random() * charLength));
  }

  return result;
}

const useID = generateUseID(20);
console.log(useID);

// Task 3

function isPerfectNum(perfectNum) {
  let number = 0;
  for (let i = 0; i <= perfectNum; i++) {
    if (perfectNum % i === 0) {
      number += i;
    }
  }
  if (number / 2 === perfectNum) {
    console.log(`${perfectNum} is a perfect number`);
  } else {
    console.log(`${perfectNum} is not a perfect number`);
  }
}

isPerfectNum(6);
isPerfectNum(12);
isPerfectNum(10);
isPerfectNum(5);
isPerfectNum(2);
isPerfectNum(28);

// Task 4

function js_style() {
  const text = document.getElementById("text");
  const btn = document.getElementById("jsstyle");
  text.style.backgroundColor = "purple";
  text.style.color = "#fff";
  text.style.padding = "20px 10px";
  text.style.textAlign = "center";
  btn.style.backgroundColor = "rgb(170, 100, 300)";
  btn.style.color = "#fff";
  btn.style.border = "none";
  btn.style.padding = "5px 7px";
  btn.style.borderRadius = "4px";
}

function changeSelectColor() {
  const selectEl = document.getElementById("colorSelect");
  selectEl.style.color = selectEl.value;

  document
    .getElementById("colorSelect")
    .addEventListener("change", changeSelectColor);
}

function removeColor() {
  const selectElement = document.getElementById("colorSelect");
  const elementIndex = selectElement.selectedIndex;
  const selectEachElement = selectElement.options[elementIndex];
  selectEachElement && selectElement.remove(elementIndex);
}
