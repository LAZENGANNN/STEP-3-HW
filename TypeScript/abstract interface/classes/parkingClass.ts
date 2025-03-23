import { Vehicle } from "../abstract/vehicle";
import { ParkingInterface } from "../interface/parkingInterface";
import { Bike } from "./bike";
import { Car } from "./car";

// 4. Создайте класс "Парковка", который имплементирует интерфейс "Стоянка"

class ParkingClass implements ParkingInterface {
  protected _lots: number;

  protected _vehicleArr: Vehicle[] = [];

  constructor(lots: number) {
    this._lots = lots;
  }

  parkVehicle(v: Vehicle) {
    this._vehicleArr.push(v);
  }

  unparkVehicle(v: Vehicle) {
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

  public getFreeLots(): number {
    return this._lots - this._vehicleArr.length;
  }
  public getVehiclesList(): Vehicle[] {
    return this._vehicleArr;
  }

  public getCarsByType(type: string): Car[] {
    let arr: Car[] = [];

    this._vehicleArr.map((el) => {
      if ((el as Car).bodyType === type) {
        arr.push(el as Car);
      }
    });

    return arr;
  }

  public getCarsBySeats(seats: number): Car[] {
    let arr: Car[] = [];

    this._vehicleArr.map((el) => {
      if ((el as Car).seats === seats) {
        arr.push(el as Car);
      }
    });

    return arr;
  }

  public getCarsByMark(mark: string): Car[] {
    let arr: Car[] = [];

    this._vehicleArr.map((el) => {
      if ((el as Car).mark === mark) {
        arr.push(el as Car);
      }
    });

    return arr;
  }

  //  2. Добавьте в класс "Парковка" метод "получить список припаркованных мотоциклов"
  //   для вывода информации о припаркованных мотоциклах.

  public getBikesList(): void {
    let arr: Bike[] = [];

    this._vehicleArr.map((el) => {
      if (el.type === "bike") {
        arr.push(el as Bike);
      }
    });

    console.log(arr);
  }
}

export { ParkingClass };
