import {useEffect, useState} from "react";
import orderService from "../../services/OrderService";
import Order from "../../entities/order";

const AllOrders = () => {

    const [orders, setOrders] = useState([] as Order[]);

    useEffect(() => {
        async function loadOrders() {
            orderService.getAllOrders()
                .then((response) => {
                    setOrders(response.data.orders);
                });
        }

        loadOrders();
    }, []);

    return (
        <div id="orders-page-container">
            <h2>My Orders</h2>
            <div>
                <table id="orders-table" className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Items</th>
                        <th scope="col">Price</th>
                        <th scope="col">Client</th>
                        <th scope="col">State</th>
                    </tr>
                    </thead>
                    <tbody id="orders-table-body">
                    {
                        orders.map(order =>
                            <tr key={order.id}>
                                <th scope="row"> {order.id} </th>
                                <td>{order.items.length + 'items'}</td>
                                <td>{order.price}</td>
                                <td>{order.client}</td>
                                <td></td>
                            </tr>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AllOrders;