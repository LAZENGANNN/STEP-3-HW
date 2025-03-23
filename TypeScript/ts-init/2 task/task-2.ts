// 1. Генератор случайного целого числа в заданном диапазоне
const randomInt = (min: number, max: number): number => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

console.log(randomInt(1, 4));

// 2. Генератор случайного дробного числа в заданном диапазоне
const randomDouble = (min: number, max: number): number => {
  return min + Math.random() * (max + 1 - min);
};

console.log(randomDouble(505, 777));

//   3. Генератор массива с заданным кол-вом чисел и диа
//   пазоном от/до генерации

const randArr = (min: number, max: number, arrLength: number): number[] => {
  let arr: number[] = [];
  for (let i: number = 0; i <= arrLength; i++) {
    let num: number = randomInt(min, max);
    arr.push(num);
  }
  return arr
};

console.log( randArr(9, 11, 99))
