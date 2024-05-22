import axios from "axios";

class ProductService {

    async getProducts() {
        return await axios.get('http://localhost:8080/products')
    }
}

const service = new ProductService();
export default service;