import Modal from "../ui/modal/Modal";
import React, {useContext, useRef} from "react";
import CartContext from "../../store/CartContext";
import OrderProgressContext from "../../store/OrderProgressContext";
import {currencyFormatter} from "../../utils/formatting";
import Input from "../ui/input/Input";
import Button from "../ui/button/Button";
import orderService from "../../services/OrderService";
import UserContext from "../../store/UserContext";
import CreateOrderRequest from "../../entities/request/createOrderRequest";
import Address from "../../entities/Address";
import OrderItem from "../../entities/OrderItem";
import Sandwich from "../../entities/sandwich";
import Drink from "../../entities/drink";

export default function Checkout() {
    const cartCtx = useContext(CartContext);
    const userCtx = useContext(UserContext);
    const orderProgressCtx = useContext(OrderProgressContext);
    const streetTextInputRef = useRef<HTMLInputElement>(null);
    const houseNumberTextInputRef = useRef<HTMLInputElement>(null);
    const postcodeTextInputRef = useRef<HTMLInputElement>(null);
    const cityTextInputRef = useRef<HTMLInputElement>(null);

    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item: { id: number, price: number, quantity: number }) => totalPrice + item.quantity * item.price
        , 0);

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

        const orderItems = cartCtx.items.map((i: OrderItem) => {
            const item = new OrderItem(0, i.quantity);
            item.sandwich = i.sandwich;
            return item;

        });


        const createOrderRequest = new CreateOrderRequest(userCtx.userId, orderItems, address);

        const response = orderService.createOrder(createOrderRequest);
        orderProgressCtx.hideCheckout()
    }


    // @ts-ignore
    return (
        <Modal open={orderProgressCtx.progress === 'CHECKOUT'} onClose={handleCloseCheckout}>
            <form onSubmit={handleSubmit}>
                <h2> Checkout </h2>
                <p>Total: {currencyFormatter.format(cartTotal)}</p>
                <Input label="User name" type="text" id="user-name" />
                <Input label="Email" type="email" id="email" />
                <div className="control-row">
                    <p className="control">
                        <label htmlFor="street">Street</label>
                        <input type="text" id="street" ref={streetTextInputRef}/>
                    </p>
                    <p className="control">
                        <label htmlFor="number">Street</label>
                        <input type="text" id="number" ref={houseNumberTextInputRef}/>
                    </p>
                </div>
                <div className="control-row">
                    <p className="control">
                        <label htmlFor="postcode">Postcode</label>
                        <input type="number" id="postcode" ref={postcodeTextInputRef}/>
                    </p>
                    <p className="control">
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" ref={cityTextInputRef}/>
                    </p>
                </div>
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