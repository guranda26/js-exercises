function createCounter() {
  let counter = 0;
  function incrementCounter() {
    counter += 2;
    console.log(counter);
  }
  return incrementCounter;
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
