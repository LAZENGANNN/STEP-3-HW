"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingClass = void 0;
// 4. Создайте класс "Парковка", который имплементирует интерфейс "Стоянка"
class ParkingClass {
    constructor(lots) {
        this._vehicleArr = [];
        this._lots = lots;
    }
    parkVehicle(v) {
        this._vehicleArr.push(v);
    }
    unparkVehicle(v) {
        this._vehicleArr = this._vehicleArr.filter((el) => {
            el.stateNum != v.stateNum;
        });
    }
    //   5. Добавьте в класс "Парковка" методы "получить количество свободных
    //   мест на парковке" и "получить список припаркованных транспортных
    //   средств".
    // - Добавьте метод "получить список припаркованных автомобилей
    //   определенного типа" в класс "Парковка".
    // - Добавьте метод "получить
    //   список припаркованных автомобилей с определенным количеством мест
    //   " в класс "Парковка".
    //  - Добавьте метод "получить список
    //    припаркованных автомобилей определенной марки" в класс "Парковка".
    getFreeLots() {
        return this._lots - this._vehicleArr.length;
    }
    getVehiclesList() {
        return this._vehicleArr;
    }
    getCarsByType(type) {
        let arr = [];
        this._vehicleArr.map((el) => {
            if (el.bodyType === type) {
                arr.push(el);
            }
        });
        return arr;
    }
    getCarsBySeats(seats) {
        let arr = [];
        this._vehicleArr.map((el) => {
            if (el.seats === seats) {
                arr.push(el);
            }
        });
        return arr;
    }
    getCarsByMark(mark) {
        let arr = [];
        this._vehicleArr.map((el) => {
            if (el.mark === mark) {
                arr.push(el);
            }
        });
        return arr;
    }
    //  2. Добавьте в класс "Парковка" метод "получить список припаркованных мотоциклов"
    //   для вывода информации о припаркованных мотоциклах.
    getBikesList() {
        let arr = [];
        this._vehicleArr.map((el) => {
            if (el.type === "bike") {
                arr.push(el);
            }
        });
        console.log(arr);
    }
}
exports.ParkingClass = ParkingClass;
