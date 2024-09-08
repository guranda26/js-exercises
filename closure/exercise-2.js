function createVendingMachine() {
  const stock = ["Cola", "Chips", "Chocolate", "Juice", "Nuts"];
  let coins = 0;
  return function add25() {
    coins += 25;
    if (coins >= 100) {
      console.log(
        `You got some ${stock[Math.floor(Math.random() * stock.length)]}`
      );
      coins = 0;
    } else {
      console.log(`Insert ${100 - coins} more coins`);
    }
  };
}

const vendingMachine = createVendingMachine();
vendingMachine();
vendingMachine();
vendingMachine();
vendingMachine();
vendingMachine();
vendingMachine();
