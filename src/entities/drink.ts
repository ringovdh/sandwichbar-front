import Product from "./product";

class Drink extends Product{
    stock: number;
    constructor(id: number, name: string, price: number, stock: number, productId: string) {
        super(id, name, price, productId);
        this.stock = stock;
    }
}

export default Drink;