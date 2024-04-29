import Drink from "../../../entities/drink";
import {currencyFormatter} from "../../../utils/formatting";
import Button from "../../ui/button/Button";
import {useContext} from "react";
import CartContext from "../../../store/CartContext";

interface DrinkProps {
    drink: Drink;
}

const DrinkItem = (props: DrinkProps) => {

    const drink = props.drink;
    const cartCtx = useContext(CartContext);

    function handleProductToCart() {
        cartCtx.addProduct(
            drink
        );
    }

    return (
        <li className="product">
            <article>
                <div>
                    <h3>{drink.name}</h3>
                    <p className="product-price">{currencyFormatter.format(drink.price)}</p>
                </div>
                <p className="sandwich-actions">
                    <Button
                        textOnly={false}
                        className=""
                        onClick={handleProductToCart}>Add to Cart</Button>
                </p>
            </article>
        </li>
    );
}

export default DrinkItem;