import axios from "axios";
import {getAuthToken} from "../utils/authenticate";
import CreateOrderRequest from "../entities/request/createOrderRequest";

class OrderService {

    async getOrders(userId: number) {
        return await axios.get('http://localhost:8080/orders/users/' + userId ,{
            headers: {'Authorization': 'Bearer ' + getAuthToken()}
        })
    }

    async createOrder(order: CreateOrderRequest) {
        return await axios.post('http://localhost:8080/orders',
            order,
            {
                headers: {
                    'Authorization': 'Bearer ' + getAuthToken(),
                    'Content-Type': 'application/json'}
                }
            );
    }
}

export default new OrderService()