"use strict";
// 1. Реализуйте класс "Мотоцикл", который наследуется от абстрактного класса
//  "Транспортное средство". Добавьте атрибуты "тип двигателя" и "максимальная скорость". 
//  Переопределите метод "получить информацию о транспортном средстве" для вывода информации о мотоцикле. 
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bike = void 0;
const vehicle_1 = require("../abstract/vehicle");
class Bike extends vehicle_1.Vehicle {
    constructor(_mark, _model, _stateNum, _enigeType, _maxSpeed, _type = "bike") {
        super();
        this._mark = _mark;
        this._model = _model;
        this._stateNum = _stateNum;
        this._enigeType = _enigeType;
        this._maxSpeed = _maxSpeed;
        this._type = _type;
    }
    getVehicleInfo() {
        return `${this._mark} ${this._model} ${this._stateNum} ${this._enigeType} ${this._maxSpeed}`;
    }
    getVehicleType() {
        return `тип:${this._type}.`;
    }
}
exports.Bike = Bike;
