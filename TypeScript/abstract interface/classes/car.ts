import { Vehicle } from "../abstract/vehicle";

// 2. Создайте класс "Автомобиль"

class Car extends Vehicle {
  constructor(
    protected _mark: string,
    protected _model: string,
    protected _stateNum: number,
    protected _type: string = 'car',
    protected _bodyType:string,
    protected _seats: number
  ) {
    super();
  }

  public getVehicleInfo(): string {
    return `${this._mark} ${this._model} ${this._stateNum} ${this._type} ${this._seats}`;
  }

  public getVehicleType(): string {
    return `тип:${this._type}.`;
  }

  public get seats():number{
    return this._seats
  }
  public get bodyType():string{
    return this._bodyType
  }

}

export { Car };
