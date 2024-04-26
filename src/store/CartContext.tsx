import {createContext, useReducer} from "react";
import Sandwich from "../entities/sandwich";

const CartContext = createContext({
    items: [],
    addSandwich: (item: Sandwich) => {},
    removeItem: (id: any) => {},
});

// @ts-ignore
function cartReducer( state, action ) {
    if (action.type === 'ADD_ITEM') {
        const existingCartItemIndex = state.items.findIndex(
            (item: any) => item.id === action.item.id
        );
        const updatedItems = [...state.items];

        if (existingCartItemIndex > -1) {
            const existingItem = state.items[existingCartItemIndex];
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems.push({...action.item, quantity: 1});
        }

        return {...state, items: updatedItems};
    }
    if (action.type === 'REMOVE_ITEM') {
        const existingCartItemIndex = state.items.findIndex(
            (item: any) => item.id === action.id
        );
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedItems = [...state.items];

        if (existingCartItem.quantity === 1) {
            updatedItems.splice(existingCartItemIndex, 1);
        } else {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity - 1
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {...state, items: updatedItems};
    }

    return state;
}

// @ts-ignore
export function CartContextProvider({children}) {

    const [cart, dispatchCartAction] = useReducer(cartReducer, {items: []});

    function addSandwich(item: any) {
        dispatchCartAction({ type: 'ADD_ITEM', item });
    }

    function removeItem(id: number) {
        dispatchCartAction({type: 'REMOVE_ITEM', id});
    }

    const ctxValue = {
        items: cart.items,
        addSandwich,
        removeItem
    };

    return (
        <CartContext.Provider value={ctxValue}>
            {children}
        </CartContext.Provider>);
}

export default CartContext;