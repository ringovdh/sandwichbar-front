import OrderItem from "../OrderItem";
import Address from "../Address";

class CreateOrderRequest {
    userId: number;
    items: OrderItem[];
    deliveryAddress: Address;

    constructor(userId: number,
                items: OrderItem[],
                deliveryAddress: Address) {
        this.userId = userId;
        this.items = items;
        this.deliveryAddress = deliveryAddress;
    }
}

export default CreateOrderRequest;