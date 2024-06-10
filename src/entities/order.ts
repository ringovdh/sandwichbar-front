import orderItem from "./orderItem";

class Order {
    id: number;
    items: orderItem[];
    price: number;
    client: string;

    constructor(id: number, items: orderItem[], price: number, client:string) {
        this.id = id;
        this.price = price;
        this.items = items;
        this.client = client;
    }
}

export default Order;