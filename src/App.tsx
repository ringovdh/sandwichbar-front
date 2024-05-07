import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Routes, Route} from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/login/register/Register';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Orders from "./components/order/Orders"
import {UserContextProvider} from "./store/UserContext";
import {CartContextProvider} from "./store/CartContext";
import {OrderProgressContextProvider} from "./store/OrderProgressContext";
import Cart from "./components/cart/Cart";
import Checkout from "./components/cart/Checkout";


function App() {

    return (
        <UserContextProvider>
            <OrderProgressContextProvider>
                <CartContextProvider>
                    < Header/>
                    <div className="container mt-3">
                        <Cart />
                        <Checkout />
                        <Routes>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/register" element={<Register/>}/>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/orders/orders" element={<Orders/>}/>
                        </Routes>
                    </div>
                </CartContextProvider>
            </OrderProgressContextProvider>
        </UserContextProvider>
    );
}

export default App;
