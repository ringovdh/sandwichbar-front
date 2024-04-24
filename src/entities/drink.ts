class Drink {
    id: number;
    name?: string;
    price?: string;

    constructor(id: number, name: string, price: string) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

export default Drink;