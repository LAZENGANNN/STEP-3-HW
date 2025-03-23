"use strict";
//task 0
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ElectronicP_1 = require("./classes/ElectronicP");
const FoodP_1 = require("./classes/FoodP");
const randomtron_1 = __importDefault(require("./randomtron"));
const p1 = new FoodP_1.FoodProduct(randomtron_1.default.getRandomSymbols(10), //name
randomtron_1.default.getRandomInt(1, 5), //price
randomtron_1.default.getRandomInt(100, 1234), //quanitity
randomtron_1.default.getRandomInt(10, 30) //ex date
);
const e1 = new ElectronicP_1.ElectronicProduct(randomtron_1.default.getRandomSymbols(10), //name
randomtron_1.default.getRandomInt(1, 5), //price
randomtron_1.default.getRandomInt(100, 1234), //quanitity
randomtron_1.default.getRandomInt(10, 30) //warranty
);
p1.displayProductInfo();
e1.displayProductInfo();
console.log(p1.calculateTotalPrice());
console.log(e1.calculateTotalPrice());
// 5. Создайте массив "products", используя абстрактный класс и добавьте
//  в него созданные объекты двух классов-наследников
const products = [];
for (let i = 0; i <= 8; i++) {
    //первые 4 food, другие 4 эдекторника
    if (i <= 4) {
        products.push(new FoodP_1.FoodProduct(randomtron_1.default.getRandomSymbols(10), randomtron_1.default.getRandomInt(1, 5), randomtron_1.default.getRandomInt(100, 1234), randomtron_1.default.getRandomInt(10, 30)));
    }
    else {
        products.push(new ElectronicP_1.ElectronicProduct(randomtron_1.default.getRandomSymbols(10), randomtron_1.default.getRandomInt(1, 5), randomtron_1.default.getRandomInt(100, 1234), randomtron_1.default.getRandomInt(10, 30)));
    }
}
// console.log(products)
// 6. Пройдитесь по массиву "products" и для каждого продукта
//  вызовите методы "calculateTotalPrice" и "displayProductInfo".
products.map((el) => {
    console.log(`------------------`);
    console.log(el.calculateTotalPrice());
    el.displayProductInfo();
});
// 7. Выведите общую стоимость всех продуктов в магазине
let fullPrice = 0;
products.map((el) => {
    fullPrice += el.calculateTotalPrice();
});
console.log(fullPrice);
//task 1
