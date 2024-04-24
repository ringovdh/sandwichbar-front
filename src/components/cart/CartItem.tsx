import "./Cart.css"
import {currencyFormatter} from "../../utils/formatting";

// @ts-ignore
interface CartItemProps {
    id?: number,
    name: string,
    price: number,
    quantity: number,
    up: () => void,
    down: () => void
}

export default function CartItem({id, name, price, quantity, up, down}: CartItemProps) {

    return (
        <li className="cart-item">
            <p>{name} - {currencyFormatter.format(quantity * price)}</p>
            <p className="cart-item-actions">
                <button onClick={down}>-</button>
                <span>{quantity}</span>
                <button onClick={up}>+</button>
            </p>
        </li>
    );
}