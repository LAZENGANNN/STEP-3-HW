"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectronicProduct = void 0;
const product_1 = require("../abstract/product");
class ElectronicProduct extends product_1.Product {
    constructor(_name, _price, _quantity, _warrantyPeriod) {
        super();
        this._name = _name;
        this._price = _price;
        this._quantity = _quantity;
        this._warrantyPeriod = _warrantyPeriod;
    }
    get name() {
        return this._name;
    }
    set name(n) {
        this._name = n;
    }
    get price() {
        return this._price;
    }
    set price(p) {
        this._price = p;
    }
    get quantity() {
        return this._quantity;
    }
    set quantity(q) {
        this._quantity = q;
    }
    get expirationDate() {
        return this._warrantyPeriod;
    }
    set expirationDate(ed) {
        this._warrantyPeriod = ed;
    }
    displayProductInfo() {
        console.log(`${this._name}, ${this._price}, ${this._quantity}, ${this._warrantyPeriod}`);
    }
}
exports.ElectronicProduct = ElectronicProduct;
