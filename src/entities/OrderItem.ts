import Sandwich from "./sandwich";
import Drink from "./drink";

class OrderItem {
    id: number;
    quantity: number;
    sandwich?: Sandwich;
    drink?: Drink;

    constructor(id: number,
                quantity: number) {
        this.id = id;
        this.quantity = quantity;
    }

}

export default OrderItem;