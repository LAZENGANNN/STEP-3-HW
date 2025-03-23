"use strict";
let arr = [];
for (let i = Math.floor(5 + Math.random() * (13 + 1 - 5)); i >= 0; i--) {
    let obj;
    const symbol = `${Math.floor(1 + Math.random() * (3 + 1 - 1))}`;
    switch (symbol) {
        case "1":
            obj = {
                age: Math.floor(18 + Math.random() * (133 + 1 - 18)),
                money: Math.floor(-5479 + Math.random() * (9865 + 1 - -5478)),
                sex: "М",
            };
            arr.push(obj);
            break;
        case "2":
            obj = {
                age: Math.floor(18 + Math.random() * (133 + 1 - 18)),
                money: Math.floor(-5479 + Math.random() * (9865 + 1 - -5478)),
                sex: "Ж",
            };
            arr.push(obj);
            break;
        case "3":
            obj = {
                age: Math.floor(18 + Math.random() * (133 + 1 - 18)),
                money: Math.floor(-5479 + Math.random() * (9865 + 1 - -5478)),
                sex: "X",
            };
            arr.push(obj);
            break;
    }
}
console.log(arr);
// A. Отобразить свойства одного человека в строку
// через символ точки с запятой по переданной позиции.
function funcA(index) {
    const obj = arr[index];
    console.log(`A) ${obj.age}; ${obj.money}; ${obj.sex};`);
}
funcA(Math.floor(0 + Math.random() * (arr.length - 1 + 1 - 0)));
// C. Поиска самого богатого и возврат индекса,
//  под которым он находится
function funcB() {
    let finded = 0;
    let counter = 0;
    arr.forEach((el) => {
        if (el.money >= arr[finded].money) {
            finded = counter;
        }
        counter++;
    });
    console.log(`C)${finded}`);
}
funcB();
// E. Сумма всех активов (денег) данных людей
function funcE() {
    let sum = 0;
    arr.forEach((el) => {
        sum += el.money;
    });
    console.log(`E) ${sum}`);
}
funcE();
// F. Средний возраст среди всех людей
function funcF() {
    let sum = 0;
    arr.forEach((el) => {
        sum += el.age;
    });
    console.log(`F) ${Math.floor(sum / arr.length)}`);
}
funcF();
// H. *Найти самый часто встречающийся пол
function funcH() {
    let ManCounter = 0;
    let WomanCounter = 0;
    let AttackHelicopterCounter = 0;
    arr.forEach((el) => {
        switch (el.sex) {
            case "М":
                ManCounter++;
                break;
            case "Ж":
                WomanCounter++;
                break;
            case "X":
                AttackHelicopterCounter++;
                break;
        }
    });
    const max = Math.max(ManCounter, WomanCounter, AttackHelicopterCounter);
    switch (max) {
        case ManCounter:
            console.log(`H) M`);
            break;
        case WomanCounter:
            console.log(`H) Ж`);
            break;
        case AttackHelicopterCounter:
            console.log(`H) X`);
            break;
    }
}
funcH();
