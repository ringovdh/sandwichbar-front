import "./Menucard.css";
import {useEffect, useState} from "react";
import sandwichService from "../../services/SandwichService";
import SandwichItem from "./sandwich/SandwichItem";
import MenuItem from "./menuItem/MenuItem";
import Sandwich from "../../entities/sandwich";
import Drink from "../../entities/drink";
import drinkService from "../../services/DrinkService";
import DrinkItem from "./drink/DrinkItem";

const Menucard = () => {

    const [sandwiches, setSandwiches] = useState([] as Sandwich[]);
    const [drinks, setDrinks] = useState([] as Drink[])

    useEffect(() => {
        async function loadSandwiches() {
            sandwichService.getSandwiches()
                .then((response) => {
                    setSandwiches(response.data.sandwiches);
                });
        }
        async function loadDrinks() {
            drinkService.getDrinks()
                .then((response) => {
                    setDrinks(response.data.drinks);
                });
        }

        loadSandwiches();
        loadDrinks();
    }, []);

    return (
        <div id="menucard">
            <h1>Menucard</h1>
            <MenuItem title={"Sandwiches"}>
                { sandwiches.map(s =>
                    <SandwichItem sandwich= {s}/>
                )}
            </MenuItem>

            <MenuItem title={"Drinks"}>
                { drinks.map(d => <DrinkItem drink= {d}/>
                    )    }
            </MenuItem>
        </div>
    );
}

export default Menucard