// 1) Сгенерировать 3 числа и отобразить результат выполнения между ними хотя бы 3 операций, которые только вы вспоминаете

const num1: number = Math.floor(Math.random() * 10);
const num2: number = Math.floor(Math.random() * 10);
const num3: number = Math.floor(Math.random() * 10);

console.log("1)", num1 * num2 - num3 + num1);

// 2) Ввести с клавиатуры число/сгенерировать случ образом, которое будет обозначать ваш возраст.
// Определить, сколько суток вы прожили.
// Определить, сколько вы бы заработали, если бы вам за каждые прожитые сутки выдавали по 5BYN.
// Определить, сколько вы бы смогли купить себе кенгулонов, если один стоит 1313$. Курс доллара 3BYN.

const age: number = Math.floor(Math.random() * 17);

console.log(
  "2)",
  `
${age} лет
${age * 365} суток
${age * 365 * 5} BYN
${Math.floor((age * 365 * 5) / 3 / 1313)} кенгулонов
`
);

// Реализуйте программу, которая случайным образом генерирует размеры трёх особей кенгулонов. Числа должны быть целыми в промежутке от 5 до 13.
// После этого программу генерирует случайный символ. В зависимости от него происходит одно из трёх действий:
// 0) Отображается максимальный из размеров трёх кенгулонов.
// 1) Отображается средний размер всех трёх кенгулонов
// 2) Отображается разность между размером самого маленького кенгулона и самого большого
// Не забываем про использование switch(); if() else if() и просто if()

const k1: number = Math.floor(5 + Math.random() * (13 + 1 - 5));
const k2: number = Math.floor(5 + Math.random() * (13 + 1 - 5));
const k3: number = Math.floor(5 + Math.random() * (13 + 1 - 5));

const symbol: string = `${Math.floor(1 + Math.random() * (3 + 1 - 1))}`;

console.log("======a======");
switch (symbol) {
  case "1":
    console.log("max: ", Math.max(k1, k2, k3));
    break;
  case "2":
    let sum: number = 0;
    const arr: number[] = [k1, k2, k3];
    for (let i: number = 0; i <= 2; i++) {
      sum += arr[i];
    }
    console.log("average: ", Math.floor(sum / 3));
    break;
  case "3":
    console.log("max - min: ", Math.max(k1, k2, k3) - Math.min(k1, k2, k3));
    break;
}

// c.

// С клавиатуры/рандом вводится возраст (в годах).
// Оределить в нём количество:
// фемтосекунд;
// часов
// Также определить, сколько бы вы смогли купить слонов на свой следующий день рождения,
//  если стоимость одного слоника 3000$, а вам за каждую прожитую секунду жизни выдавали по одному центу.

console.log("======c======");

console.log("фемтосекунды: ", age * 365 * 24 * 60 * 60 * Math.pow(10, 15));

console.log("часы", age * 365 * 24);

const dollars: number = (age + 1) * 365 * 24 * 60 * 60 * 0.01;
console.log("cлонов: ", Math.floor(dollars / 3000));

// f.
// Зарандомить два массива случайного размера (от 5 до 17) со случайными значениями (от -13 до 13).
// Отобразить на экране.
// Реализовать процесс суммирования двух массивов. В ходе работы программы больший по количеству элементов массив должен
// поглотить меньший, т.е. в бОльший по кол-ву эл-тов массив необходимо прибавить значения по соответствующим индексам мЕньшего массива.

console.log(`======f======`);
const size1: number = Math.floor(5 + Math.random() * (17 + 1 - 5));
const size2: number = Math.floor(5 + Math.random() * (17 + 1 - 5));

const arr1: number[] = [];
const arr2: number[] = [];

for (let i: number = size1; i >= 0; i--) {
  arr1.push(Math.floor(-13 + Math.random() * (13 + 1 - -13)));
}
console.log("arr1)", arr1, "length - ", arr1.length);

for (let i: number = size2; i >= 0; i--) {
  arr2.push(Math.floor(-13 + Math.random() * (13 + 1 - -13)));
}
console.log("arr2)", arr2, "length - ", arr2.length);

if (arr1.length >= arr2.length) {
  let counter: number = 0;
  for (let i: number = arr2.length - 1; i >= 0; i--) {
    // console.log(counter);
    // console.log(`${arr1[counter]} + ${arr2[counter]}`);
    arr1[counter] = arr1[counter] + arr2[counter];
    // console.log(arr1[counter])

    counter++;
  }
  console.log(arr1);
} else {
  let counter: number = 0;
  for (let i: number = arr1.length - 1; i >= 0; i--) {
    arr2[counter] = arr2[counter] + arr1[counter];

    counter++;
  }
  console.log(arr2);
}
