import Modal from "../ui/modal/Modal";
import {useContext} from "react";
import CartContext from "../../store/CartContext";
import UserContext from "../../store/UserContext";
import {currencyFormatter} from "../../utils/formatting";
import Button from "../ui/button/Button";
import OrderProgressContext from "../../store/OrderProgressContext";
import CartItem from "./CartItem";
import {useNavigate} from "react-router-dom";

export default function Cart() {
    const cartCtx = useContext(CartContext);
    const userCtx = useContext(UserContext);
    const orderProgressCtx = useContext(OrderProgressContext);
    const cartTotal = cartCtx.calculateCartTotal();
    const navigate = useNavigate();

    function handleCloseCart() {
        orderProgressCtx.hideCart()
    }

    function handleCheckout() {
        if (userCtx.userId !== undefined && userCtx.userId!== '') {
            orderProgressCtx.showCheckout()
        } else {
            handleCloseCart()
            navigate('/login');
        }
    }

    return (
        <Modal
            open={orderProgressCtx.progress === 'CART'}
            onClose={orderProgressCtx.progress === 'CART' ? handleCloseCart : null}>
            <div id="cart-container">
                <h2>Cart</h2>
                <ul>
                    {cartCtx.items.map((item) => (
                        <CartItem key={item.product.id}
                                  name={item.product.name}
                                  price={item.product.price}
                                  quantity={item.quantity}
                                  up={() => cartCtx.addProduct(item.product)}
                                  down={() => cartCtx.removeProduct(item.product)}/>
                    ))}
                </ul>
                <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
                <p className="modal-actions">
                    <Button
                        textOnly={true}
                        className=""
                        onClick={handleCloseCart}>
                        Close
                    </Button>
                    {cartCtx.items.length > 0 && <Button
                        textOnly={false}
                        className=""
                        onClick={handleCheckout}>
                        Checkout
                    </Button>}
                </p>
            </div>
        </Modal>
    );
}