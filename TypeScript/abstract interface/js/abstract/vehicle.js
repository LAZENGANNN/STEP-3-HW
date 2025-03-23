"use strict";
// 1. Создайте абстрактный класс "Транспортное средство"
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
class Vehicle {
    get mark() {
        return this._mark;
    }
    set mark(m) {
        this._mark = m;
    }
    get model() {
        return this._model;
    }
    set model(m) {
        this._model = m;
    }
    get stateNum() {
        return this._stateNum;
    }
    set stateNum(s) {
        this._stateNum = s;
    }
    get type() {
        return this.type;
    }
    set type(s) {
        this.type = s;
    }
}
exports.Vehicle = Vehicle;
