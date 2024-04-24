import "./Menucard.css";
import {useEffect, useState} from "react";
import sandwichService from "../../services/SandwichService";
import SandwichItem from "./sandwich/SandwichItem";
import Sandwich from "../../entities/sandwich";

export default function Menucard() {

    const [sandwiches, setSandwiches] = useState([Sandwich]);
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
            <div className="sandwiches-container">
                <ul id="sandwiches">
                    {sandwiches.map(s =>
                        <SandwichItem sandwich= {s} />
                    )}
                </ul>
            </div>
        </div>);

}
