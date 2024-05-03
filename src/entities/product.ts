class Product {
    id: number;
    name: string;
    price: number;
    productType: string;

    constructor(id: number, name: string, price: number, productType: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.productType = productType;
    }
}

export default Product;