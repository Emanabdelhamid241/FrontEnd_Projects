"use strict";
class Game {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    getDiscount(val) {
        console.log(`The Discount Is ${val}`);
    }
}
let gameOne = new Game("Ys", 100);
let gameTwo = new Game(2064, 100);
console.log(gameOne.title);
console.log(gameOne.price);
gameOne.getDiscount("50");
console.log(gameTwo.title);
console.log(gameTwo.price);
gameTwo.getDiscount(80);
//# sourceMappingURL=index.js.map