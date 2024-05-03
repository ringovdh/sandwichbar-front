import Address from "../address";

class CreateOrderRequest {
    userId: number;
    items: {quantity: number, productId: number}[];
    deliveryAddress: Address;

    constructor(userId: number,
                items: {quantity: number, productId: number}[],
                deliveryAddress: Address) {
        this.userId = userId;
        this.items = items;
        this.deliveryAddress = deliveryAddress;
    }
}

export default CreateOrderRequest;