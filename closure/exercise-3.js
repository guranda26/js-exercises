function createDatabase() {
  let storage = ["Apple", "Banana", "Carrot"];
  function addToDB(arg) {
    storage.push(arg);
    console.log(storage);
  }
  function clearDB() {
    storage.splice(0);
    console.log(storage);
  }
  return [addToDB, clearDB];
}

const [add, clear] = createDatabase();
add("Dragon fruit");
add("Eddo");
clear();
