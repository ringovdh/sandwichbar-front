import {Outlet} from "react-router-dom";
import Header from "../header/Header";
import React from "react";
import {UserContextProvider} from "../../store/UserContext";
import {CartContextProvider} from "../../store/CartContext";
import {OrderProgressContextProvider} from "../../store/OrderProgressContext";
import Cart from "../cart/Cart";
import Checkout from "../cart/Checkout";

const RootLayout = () => {
    return (
        <UserContextProvider>
            <OrderProgressContextProvider>
                <CartContextProvider>
                    < Header/>
                    <div className="container mt-3">
                        <Cart />
                        <Checkout />
                        <Outlet/>
                    </div>
                </CartContextProvider>
            </OrderProgressContextProvider>
        </UserContextProvider>
    );
}

export default RootLayout;