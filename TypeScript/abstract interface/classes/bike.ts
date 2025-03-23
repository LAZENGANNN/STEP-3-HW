// 1. Реализуйте класс "Мотоцикл", который наследуется от абстрактного класса
//  "Транспортное средство". Добавьте атрибуты "тип двигателя" и "максимальная скорость". 
//  Переопределите метод "получить информацию о транспортном средстве" для вывода информации о мотоцикле. 


import { Vehicle } from "../abstract/vehicle";

class Bike extends Vehicle{
    constructor(
        protected _mark: string,
        protected _model: string,
        protected _stateNum: number,
        protected _enigeType: string,
        protected _maxSpeed: number,
        protected _type: string = "bike",
      ) {
        super();
      }

      public getVehicleInfo(): string {
        return `${this._mark} ${this._model} ${this._stateNum} ${this._enigeType} ${this._maxSpeed}`;
      }

      public getVehicleType(): string {
        return `тип:${this._type}.`;
      }

}

export{Bike}