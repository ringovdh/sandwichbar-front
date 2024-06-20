import {createContext, PropsWithChildren, ReactNode, useReducer} from "react";
import OrderItem from "../entities/orderItem";
import Product from "../entities/product";
import product from "../entities/product";

const ADD_PRODUCT = 'ADD_PRODUCT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
const CLEAR_CART = 'CLEAR_CART'

const CartContext = createContext({
    items: [] as OrderItem[],
    addProduct: (product: Product) => {},
    removeProduct: (product: Product) => {},
    calculateCartTotal: () => { return 0 as number},
    clearCart: () => {}
});


function cartReducer( state: { items: OrderItem[]; }, action: {type: string, product?: Product} ) {
    if (action.type === ADD_PRODUCT) {

        const existingCartItemIndex = state.items.findIndex(
            (item) => item.product.productRef === action.product!.productRef
        );
        const updatedItems = [...state.items];

        if (existingCartItemIndex > -1) {
            const existingItem = state.items[existingCartItemIndex];
            updatedItems[existingCartItemIndex] = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            };
        } else {
            const orderItem = new OrderItem(1, action.product!)
            updatedItems.push(orderItem);
        }
        console.log('items', updatedItems)
        return {...state, items: updatedItems};
    }

    if (action.type === REMOVE_PRODUCT) {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.product.productRef === action.product?.productRef
        );
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedItems = [...state.items];

        if (existingCartItem.quantity === 1) {
            updatedItems.splice(existingCartItemIndex, 1);
        } else {
            updatedItems[existingCartItemIndex] = {
                ...existingCartItem,
                quantity: existingCartItem.quantity - 1
            };
        }
        return {...state, items: updatedItems};
    }

    if (action.type === CLEAR_CART) {
        const updatedItems: OrderItem[] = [];
        return {...state, items: updatedItems};
    }

    return state;
}

interface CartContextProviderProps {
    children: ReactNode
}

export function CartContextProvider(props: PropsWithChildren<CartContextProviderProps>) {

    const [cart, dispatchCartAction] = useReducer(cartReducer, {items: [] as OrderItem[]});

    function addProduct(product: Product) {
        dispatchCartAction({ type: ADD_PRODUCT, product: product });
    }

    function removeProduct(product: Product) {
        dispatchCartAction({type: REMOVE_PRODUCT, product: product});
    }

    function calculateCartTotal() {
        return cart.items.reduce(
            (totalPrice, item) =>
                totalPrice + item.quantity * item.product.price
            , 0);
    }

    function clearCart() {
        dispatchCartAction({ type: CLEAR_CART  });
    }

    const ctxValue = {
        items: cart.items,
        addProduct,
        removeProduct,
        calculateCartTotal,
        clearCart
    };

    return (
        <CartContext.Provider value={ctxValue}>
            {props.children}
        </CartContext.Provider>);
}

export default CartContext;