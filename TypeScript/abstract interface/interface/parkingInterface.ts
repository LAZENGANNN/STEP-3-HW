import { Vehicle } from "../abstract/vehicle";

// 3. Создайте интерфейс "Стоянка" с методами 
// "припарковать транспортное средство" и "уехать с парковки"


interface ParkingInterface {
  parkVehicle(v:Vehicle): void;

  unparkVehicle(v:Vehicle): void;
}

export { ParkingInterface };
