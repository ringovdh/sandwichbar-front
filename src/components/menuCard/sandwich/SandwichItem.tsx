import { currencyFormatter} from "../../../utils/formatting";
import Button from "../../ui/button/Button";
import {useContext} from "react";
import CartContext from "../../../store/CartContext";
import Sandwich from "../../../entities/sandwich";

interface SandwichProps {
    sandwich : Sandwich;
}

const SandwichItem = (props: SandwichProps) => {

    const sandwich = props.sandwich;
    const cartCtx = useContext(CartContext);

    function handleSandwichToCart() {
        cartCtx.addProduct(
            sandwich
        );
    }

    return (
        <li className="product">
            <article>
                <div>
                    <h3>{sandwich.name}</h3>
                    <p className="product-price">{currencyFormatter.format(sandwich.price)}</p>
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
}

export default SandwichItem;