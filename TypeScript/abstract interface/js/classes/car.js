"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const vehicle_1 = require("../abstract/vehicle");
// 2. Создайте класс "Автомобиль"
class Car extends vehicle_1.Vehicle {
    constructor(_mark, _model, _stateNum, _type = 'car', _bodyType, _seats) {
        super();
        this._mark = _mark;
        this._model = _model;
        this._stateNum = _stateNum;
        this._type = _type;
        this._bodyType = _bodyType;
        this._seats = _seats;
    }
    getVehicleInfo() {
        return `${this._mark} ${this._model} ${this._stateNum} ${this._type} ${this._seats}`;
    }
    getVehicleType() {
        return `тип:${this._type}.`;
    }
    get seats() {
        return this._seats;
    }
    get bodyType() {
        return this._bodyType;
    }
}
exports.Car = Car;
