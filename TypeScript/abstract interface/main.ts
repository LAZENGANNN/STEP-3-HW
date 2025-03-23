//task 0

import { Product } from "./abstract/product";
import { ElectronicProduct } from "./classes/ElectronicP";
import { FoodProduct } from "./classes/FoodP";
import randomtron from "./randomtron";

const p1: FoodProduct = new FoodProduct(
  randomtron.getRandomSymbols(10), //name
  randomtron.getRandomInt(1, 5), //price
  randomtron.getRandomInt(100, 1234), //quanitity
  randomtron.getRandomInt(10, 30) //ex date
);

const e1: ElectronicProduct = new ElectronicProduct(
  randomtron.getRandomSymbols(10), //name
  randomtron.getRandomInt(1, 5), //price
  randomtron.getRandomInt(100, 1234), //quanitity
  randomtron.getRandomInt(10, 30) //warranty
);

p1.displayProductInfo();
e1.displayProductInfo();

console.log(p1.calculateTotalPrice());
console.log(e1.calculateTotalPrice());

// 5. Создайте массив "products", используя абстрактный класс и добавьте
//  в него созданные объекты двух классов-наследников
const products: Product[] = [];

for (let i: number = 0; i <= 8; i++) {
  //первые 4 food, другие 4 эдекторника

  if (i <= 4) {
    products.push(
      new FoodProduct(
        randomtron.getRandomSymbols(10),
        randomtron.getRandomInt(1, 5),
        randomtron.getRandomInt(100, 1234),
        randomtron.getRandomInt(10, 30)
      )
    );
  } else {
    products.push(
      new ElectronicProduct(
        randomtron.getRandomSymbols(10),
        randomtron.getRandomInt(1, 5),
        randomtron.getRandomInt(100, 1234),
        randomtron.getRandomInt(10, 30)
      )
    );
  }
}

// console.log(products)

// 6. Пройдитесь по массиву "products" и для каждого продукта
//  вызовите методы "calculateTotalPrice" и "displayProductInfo".

products.map((el) => {
  console.log(`------------------`)
  console.log(el.calculateTotalPrice());
  el.displayProductInfo();
});

// 7. Выведите общую стоимость всех продуктов в магазине
let fullPrice: number = 0;
products.map((el) => {
  fullPrice += el.calculateTotalPrice();
});

console.log(fullPrice);

//task 1
