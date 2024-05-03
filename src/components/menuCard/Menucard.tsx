import "./Menucard.css";
import {useEffect, useState} from "react";
import productService from "../../services/ProductService";
import SandwichItem from "./sandwich/SandwichItem";
import MenuItem from "./menuItem/MenuItem";
import Sandwich from "../../entities/sandwich";
import Drink from "../../entities/drink";
import DrinkItem from "./drink/DrinkItem";
import Product from "../../entities/product";

const Menucard = () => {

    const [sandwiches, setSandwiches] = useState([] as Sandwich[]);
    const [drinks, setDrinks] = useState([] as Drink[])

    useEffect(() => {
        async function loadProducts() {
            productService.getProducts()
                .then((response) => {
                    console.log('resp ', response)
                    setSandwiches(response.data.products.filter((p: Product) => p.productType === 'SANDWICH'));
                    setDrinks(response.data.products.filter((p: Product) => p.productType === 'DRINK'));
                });
        }

        loadProducts();

    }, []);

    return (
        <div id="menucard">
            <h1>Menucard</h1>
            <MenuItem title={"Sandwiches"}>
                {sandwiches.map(s =>
                    <SandwichItem sandwich={s}/>
                )}
            </MenuItem>

            <MenuItem title={"Drinks"}>
                {drinks.map(d =>
                    <DrinkItem drink={d}/>
                )}
            </MenuItem>
        </div>
    );
}

export default Menucard