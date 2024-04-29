import "./Cart.css"
import {currencyFormatter} from "../../utils/formatting";


interface CartItemProps {
    name: string,
    price: number,
    quantity: number,
    up: () => void,
    down: () => void
}

export default function CartItem(props: CartItemProps) {

    return (
        <li className="cart-item">
            <p>{props.name} ({currencyFormatter.format(props.quantity * props.price)})</p>
            <p className="cart-item-actions">
                <button onClick={props.down}>-</button>
                <span>{props.quantity}</span>
                <button onClick={props.up}>+</button>
            </p>
        </li>
    );
}