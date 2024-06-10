import axios from "axios";
import CreateOrderRequest from "../entities/request/createOrderRequest";

class OrderService {

    async getOrders() {
        return await axios.get('http://localhost:8080/orders/users', {withCredentials: true})
    }

    async getAllOrders() {
        return await axios.get('http://localhost:8080/orders/', {withCredentials: true})
    }

    async createOrder(order: CreateOrderRequest) {
        return await axios.post('http://localhost:8080/orders',
            order,
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    }
}

const service =  new OrderService();

export default service;