import { Product } from "../abstract/product";

class FoodProduct extends Product {
  constructor(
    protected _name: string,
    protected _price: number,
    protected _quantity: number,
    protected _expirationDate: number
  ) {
    super();
  }

  public get name(): string {
    return this._name;
  }
  public set name(n: string) {
    this._name = n;
  }

  public get price(): number {
    return this._price;
  }
  public set price(p: number) {
    this._price = p;
  }

  public get quantity(): number {
    return this._quantity;
  }
  public set quantity(q: number) {
    this._quantity = q;
  }

  public get expirationDate(): number {
    return this._expirationDate;
  }
  public set expirationDate(ed: number) {
    this._expirationDate = ed;
  }

  public displayProductInfo(): void {
    console.log(
      `${this._name}, ${this._price}, ${this._quantity}, ${this._expirationDate}`
    );
  }
}

export { FoodProduct };
