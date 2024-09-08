function stringBuilder() {
  let result = "";
  const add = (characters) => {
    result += `I am char ${characters}`;
    return result;
  };
  return add;
}

const builder = stringBuilder();

builder("Hello ");
builder("Mrs ");
let text = builder("Guranda");
console.log(text);
