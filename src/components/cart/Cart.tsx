import Modal from "../ui/modal/Modal";
import {useContext} from "react";
import CartContext from "../../store/CartContext";
import {currencyFormatter} from "../../utils/formatting";
import Button from "../ui/button/Button";
import OrderProgressContext from "../../store/OrderProgressContext";
import CartItem from "./CartItem";
import OrderItem from "../../entities/OrderItem";

export default function Cart() {

    const cartCtx = useContext(CartContext);
    const orderProgressCtx = useContext(OrderProgressContext);
    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item: {id: number, price: number, quantity: number}) => totalPrice + item.quantity * item.price
        , 0);

    function handleCloseCart() {
        orderProgressCtx.hideCart()
    }

    function handleCheckout() {
        orderProgressCtx.showCheckout()
    }


    return (
      <Modal
          open={orderProgressCtx.progress === 'CART'}
          onClose={orderProgressCtx.progress === 'CART' ? handleCloseCart : null}>
          <h2>Cart</h2>
          <ul>
              {cartCtx.items.map((item: {id: number, name: string, price:number, quantity: number}) => (
               <CartItem key={item.id}
                         id={item.id}
                         name={item.name}
                         price={item.price}
                         quantity={item.quantity}
                         up={() => cartCtx.addSandwich(item)}
                         down={() => cartCtx.removeItem(item.id)}/>
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
      </Modal>
    );
}