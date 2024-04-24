import {createContext, useState} from "react";

const OrderProgressContext = createContext({
    progress: '',
    showCart: () => {},
    hideCart: () => {},
    showCheckout: () => {},
    hideCheckout: () => {}
});

// @ts-ignore
export function OrderProgressContextProvider({children}) {
    const [orderProgress, setOrderProgress] = useState('')

    function showCart() {
        setOrderProgress('CART');
    }

    function hideCart() {
        setOrderProgress('');
    }

    function showCheckout() {
        setOrderProgress('CHECKOUT');
    }

    function hideCheckout() {
        setOrderProgress('');
    }

    const ctxValue = {
        progress: orderProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    };
    return (
        <OrderProgressContext.Provider value={ctxValue}>{children}</OrderProgressContext.Provider>
    );

}

export default OrderProgressContext;