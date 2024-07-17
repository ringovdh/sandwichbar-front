import Modal from "../ui/modal/Modal";
import React, {useContext} from "react";
import { useForm } from "react-hook-form"
import CartContext from "../../store/CartContext";
import OrderProgressContext from "../../store/OrderProgressContext";
import {currencyFormatter} from "../../utils/formatting";
import Button from "../ui/button/Button";
import orderService from "../../services/OrderService";
import CreateOrderRequest from "../../entities/request/createOrderRequest";
import Address from "../../entities/address";
import OrderItem from "../../entities/orderItem";
import UserContext from "../../store/UserContext";
import AddressForm from "../form/AddressForm";

interface FormData { street: string; number: string; postcode: number; city: string }

export default function Checkout() {
    const cartCtx = useContext(CartContext);
    const userCtx = useContext(UserContext);
    const orderProgressCtx = useContext(OrderProgressContext);
    const cartTotal = cartCtx.calculateCartTotal();

    function handleCloseCheckout() {
        orderProgressCtx.hideCheckout()
    }

    const { register, handleSubmit} = useForm<FormData>();

    function onSubmit(data: any) {

       const address = new Address(data.street, data.number, data.postcode, data.city);
        console.log('address', address)

        const orderItems = cartCtx.items.map(i => {
            return new OrderItem(i.quantity, i.product);
        });

        const createOrderRequest = new CreateOrderRequest(orderItems, address);
        orderService.createOrder(createOrderRequest)
            .then((response) => {
                cartCtx.clearCart();
                orderProgressCtx.hideCheckout();
            }
        );
    }

    return (
        <Modal open={orderProgressCtx.progress === 'CHECKOUT'} onClose={handleCloseCheckout}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2> Checkout </h2>
                <p>Total: {currencyFormatter.format(cartTotal)}</p>
                <p className="control">
                    <label htmlFor="user-name">Username</label>
                    <input type="text"
                           id="user-name"
                           name="user-name"
                           value={userCtx.userName}
                           disabled={true}/>
                </p>
                <p className="control">
                    <label htmlFor="user-email">Email</label>
                    <input type="email"
                           id="user-email"
                           name="user-email"
                           value={userCtx.userEmail}
                           disabled={true}/>
                </p>
                <AddressForm register = { register }></AddressForm>
                <p className="modal-actions">
                    <Button
                        type="button"
                        textOnly={true}
                        className=""
                        onClick={handleCloseCheckout}>
                        Close
                    </Button>
                    {cartCtx.items.length > 0 && <Button
                        textOnly={false}
                        className="">
                        Submit
                    </Button>}
                </p>
            </form>
        </Modal>
    );
}
