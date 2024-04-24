import orderService from "../../services/OrderService";
import {useContext, useEffect, useState} from "react";
import UserContext from "../../store/UserContext";

const MyOrders = () => {
    const userCtx = useContext(UserContext);
    const [orders, setOrders] = useState([{id:0, price:0.0}]);

    useEffect(() => {
        async function myOrders() {
            orderService.getOrders(userCtx.userId)
                .then((response) => {
                    setOrders(response.data.orders);
                });
        }
        myOrders();
    }, []);

    return (
        <>
        <h2>My Orders</h2>
        <div>
            {orders.length > 1 && <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Price</th>
                    <th scope="col">State</th>
                </tr>
                </thead>
                {<tbody>{orders.map(order =>
                    <tr key={order.id}>
                        <th scope="row"> {order.id} </th>
                        <td>{order.price}</td>
                        <td>b</td>
                    </tr>)
                }</tbody>}
            </table>}

            {!orders && <p>No orders available.</p>}
        </div>
</>
)
    ;
}

export default MyOrders;