import Address from "../address";

class CreateOrderRequest {
    items: {quantity: number, productId: number}[];
    deliveryAddress: Address;

    constructor(items: {quantity: number, productId: number}[],
                deliveryAddress: Address) {
        this.items = items;
        this.deliveryAddress = deliveryAddress;
    }
}

export default CreateOrderRequest;