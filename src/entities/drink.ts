import Product from "./product";

class Drink extends Product{

    constructor(id: number, name: string, price: number) {
        super(id, name, price, 'DRINK');
    }
}

export default Drink;