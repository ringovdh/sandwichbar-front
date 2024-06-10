import orderService from "../../services/OrderService";
import {useEffect, useState} from "react";
import Order from "../../entities/order";

const Orders = () => {

    const [orders, setOrders] = useState([] as Order[]);

    useEffect(() => {
        async function loadOrders() {
            orderService.getOrders()
                .then((response) => {
                    if (response) {
                        setOrders(response.data.orders);
                    }
                });
        }

        loadOrders();
    }, []);

    return (
        <div id="orders-page-container">
            <h2>My Orders</h2>
            <div>
                {orders.length >= 0 && <table id="orders-table" className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Price</th>
                        <th scope="col">State</th>
                    </tr>
                    </thead>
                    { <tbody id="orders-table-body">{orders.map(order =>
                        <tr key={order.id}>
                            <th scope="row"> {order.id} </th>
                            <td>{order.price}</td>
                            <td></td>
                        </tr>)
                    }</tbody> }
                </table>}

                {!orders && <p>No orders available.</p>}
            </div>
        </div>

    );
}

export default Orders;