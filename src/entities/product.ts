class Product {
    id: number;
    name: string;
    price: number;
    productId: string;

    constructor(id: number, name: string, price: number, productId: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.productId = productId;
    }
}

export default Product;