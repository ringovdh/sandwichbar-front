import "./Menucard.css";
import {useEffect, useState} from "react";
import sandwichService from "../../services/SandwichService";
import SandwichItem from "./sandwich/SandwichItem";
import MenuItem from "./menuItem/MenuItem";
import Sandwich from "../../entities/sandwich";

const Menucard = () => {

    const [sandwiches, setSandwiches] = useState([] as Sandwich[]);
    useEffect(() => {
        async function loadSandwiches() {
            sandwichService.getSandwiches()
                .then((response) => {
                    setSandwiches(response.data.sandwiches);
                });
        }

        loadSandwiches();
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
                <p>Not available</p>
            </MenuItem>
        </div>);
}

export default Menucard