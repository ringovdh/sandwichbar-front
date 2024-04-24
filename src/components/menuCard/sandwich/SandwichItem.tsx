import { currencyFormatter} from "../../../utils/formatting";
import Button from "../../ui/button/Button";
import {useContext} from "react";
import CartContext from "../../../store/CartContext";

// @ts-ignore
export default ( { sandwich }) => {

    const cartCtx = useContext(CartContext);

    function handleSandwichToCart() {
        cartCtx.addSandwich(
            sandwich
        );
    }

    return (
        <li className="sandwich">
            <article>
                <div>
                    <h3>{sandwich.name}</h3>
                    <p className="sandwich-price">{currencyFormatter.format(sandwich.price)}</p>
                    <p className="sandwich-ingredients">ingredients:</p>
                </div>
                <p className="sandwich-actions">
                    <Button
                        textOnly={false}
                        className=""
                        onClick={handleSandwichToCart}>Add to Cart</Button>
                </p>
            </article>
        </li>
    );
};
