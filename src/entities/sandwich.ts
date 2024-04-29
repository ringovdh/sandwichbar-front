import Product from "./product";

class Sandwich extends Product{

    constructor(id: number, name: string, price: number, productId: string) {
        super(id, name, price, productId);
    }
}

export default Sandwich;