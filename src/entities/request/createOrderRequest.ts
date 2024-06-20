import Address from "../address";
import OrderItem from "../orderItem";

class CreateOrderRequest {
    items: OrderItem[];
    deliveryAddress: Address;

    constructor(items: OrderItem[],
                deliveryAddress: Address) {
        this.items = items;
        this.deliveryAddress = deliveryAddress;
    }
}

export default CreateOrderRequest;