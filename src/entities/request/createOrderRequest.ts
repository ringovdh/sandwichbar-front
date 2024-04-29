import Address from "../address";

class CreateOrderRequest {
    userId: number;
    items: { quantity: number, product: {productId: string }}[];
    deliveryAddress: Address;

    constructor(userId: number,
                items: { quantity: number, product: {productId: string }}[],
                deliveryAddress: Address) {
        this.userId = userId;
        this.items = items;
        this.deliveryAddress = deliveryAddress;
    }
}

export default CreateOrderRequest;