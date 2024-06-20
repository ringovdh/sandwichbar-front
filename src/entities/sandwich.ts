import Product from "./product";
import Ingredient from "./ingredient";

class Sandwich extends Product{

    ingredients: Ingredient[];

    constructor(id: number, name: string, productRef: string, price: number, ingredients: Ingredient[]) {
        super(id, name, productRef, price, "SANDWICH");
        this.ingredients = ingredients
    }
}

export default Sandwich;