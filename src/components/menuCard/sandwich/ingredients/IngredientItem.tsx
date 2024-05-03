import Ingredient from "../../../../entities/ingredient";

interface IngredientProps {
    ingredient: Ingredient;
}

const IngredientItem = (props: IngredientProps) => {
    const ingredient = props.ingredient;
    return(
        <li>{ingredient.name}</li>
    );
}

export default IngredientItem;
