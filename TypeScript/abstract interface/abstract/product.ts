abstract class Product {
  protected abstract _name: string;
  protected abstract _price: number;
  protected abstract _quantity: number;

  public abstract displayProductInfo(): void;

  public calculateTotalPrice(): number {
    return this._quantity * this._price;
  }
}

export { Product };
