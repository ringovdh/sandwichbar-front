import Product from "./product";

class Drink extends Product{

    constructor(id: number, name: string, productRef: string, price: number) {
        super(id, name, productRef, price, 'DRINK');
    }
}

export default Drink;