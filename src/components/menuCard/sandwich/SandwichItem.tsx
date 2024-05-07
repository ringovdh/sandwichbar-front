import { currencyFormatter} from "../../../utils/formatting";
import Button from "../../ui/button/Button";
import {useContext} from "react";
import CartContext from "../../../store/CartContext";
import Sandwich from "../../../entities/sandwich";
import IngredientItem from "./ingredients/IngredientItem";

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
        <li key={sandwich.id} className="product">
            <article>
                <div>
                    <h3>{sandwich.name}</h3>
                </div>
                <div>
                    <p className="product-price">{currencyFormatter.format(sandwich.price)}</p>
                </div>
                    <div id="ingredients-container">
                        { sandwich.ingredients
                            .map(i =>
                                <IngredientItem ingredient={i}/>
                            )}
                    </div>

                <p className="sandwich-actions">
                    <Button
                        id={'add-to-cart-button-' + sandwich.id}
                        textOnly={false}
                        className=""
                        onClick={handleSandwichToCart}>Add to Cart</Button>
                </p>
            </article>
        </li>
    );
}

export default SandwichItem;