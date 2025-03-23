// 1. Создайте абстрактный класс "Транспортное средство"

abstract class Vehicle {
  protected abstract _mark: string;
  protected abstract _model: string;
  protected abstract _stateNum: number;
  protected abstract _type: string

  public get mark(): string {
    return this._mark;
  }

  public set mark(m: string) {
    this._mark = m;
  }

  public get model(): string {
    return this._model;
  }
  public set model(m: string) {
    this._model = m;
  }

  public get stateNum(): number {
    return this._stateNum;
  }
  public set stateNum(s: number) {
    this._stateNum = s;
  }
  public get type(): string {
    return this.type;
  }
  public set type(s: string) {
    this.type = s;
  }

  public abstract getVehicleInfo(): string;

  public abstract getVehicleType(): string;
}

export { Vehicle };
