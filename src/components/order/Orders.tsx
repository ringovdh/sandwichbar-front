import orderService from "../../services/OrderService";
import {useContext, useEffect, useState} from "react";


import UserContext from "../../store/UserContext";

const Orders = () => {
    const userCtx = useContext(UserContext);
    const [orders, setOrders] = useState([{id: 0, price: 0.0}]);

    useEffect(() => {
        async function loadOrders() {
            orderService.getOrders(userCtx.userId)
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
                            <td>b</td>
                        </tr>)
                    }</tbody> }
                </table>}

                {!orders && <p>No orders available.</p>}
            </div>
        </div>

    )
        ;
}

export default Orders;