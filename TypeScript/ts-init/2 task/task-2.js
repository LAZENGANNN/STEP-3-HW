"use strict";
// 1. Генератор случайного целого числа в заданном диапазоне
const randomInt = (min, max) => {
    return Math.floor(min + Math.random() * (max + 1 - min));
};
console.log(randomInt(1, 4));
// 2. Генератор случайного дробного числа в заданном диапазоне
const randomDouble = (min, max) => {
    return min + Math.random() * (max + 1 - min);
};
console.log(randomDouble(505, 777));
//   3. Генератор массива с заданным кол-вом чисел и диа
//   пазоном от/до генерации
const randArr = (min, max, arrLength) => {
    let arr = [];
    for (let i = 0; i <= arrLength; i++) {
        let num = randomInt(min, max);
        arr.push(num);
    }
    return arr;
};
console.log(randArr(9, 11, 99));
