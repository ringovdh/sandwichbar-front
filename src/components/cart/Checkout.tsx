import Modal from "../ui/modal/Modal";
import React, {useContext, useRef} from "react";
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

export default function Checkout() {
    const cartCtx = useContext(CartContext);
    const userCtx = useContext(UserContext);
    const orderProgressCtx = useContext(OrderProgressContext);
    const cartTotal = cartCtx.calculateCartTotal();

    function handleCloseCheckout() {
        orderProgressCtx.hideCheckout()
    }

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        const address = new Address(
            streetTextInputRef.current!.value,
            houseNumberTextInputRef.current!.value,
            +postcodeTextInputRef.current!.value,
            cityTextInputRef.current!.value);

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
            <form onSubmit={handleSubmit}>
                <h2> Checkout </h2>
                <p>Total: {currencyFormatter.format(cartTotal)}</p>
                <p className="control">
                    <label htmlFor="user-name">Username</label>
                    <input type="text"
                           id="user-name"
                           value={userCtx.userName}
                           disabled={true}/>
                </p>
                <p className="control">
                    <label htmlFor="user-email">Email</label>
                    <input type="email"
                           id="user-email"
                           value={userCtx.userEmail}
                           disabled={true}/>
                </p>
                <AddressForm></AddressForm>
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