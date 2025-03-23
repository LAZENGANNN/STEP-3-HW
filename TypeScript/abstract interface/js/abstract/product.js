"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    calculateTotalPrice() {
        return this._quantity * this._price;
    }
}
exports.Product = Product;
