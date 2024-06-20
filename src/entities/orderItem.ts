import Product from "./product";

class OrderItem {
    quantity: number;
    product: Product;

    constructor(
                quantity: number, product: Product) {
        this.quantity = quantity;
        this.product = product;
    }
}

export default OrderItem;