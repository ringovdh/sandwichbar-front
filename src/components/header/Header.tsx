import {Link} from "react-router-dom";
import React, {useContext} from "react";
import logoImg from '../../assets/header-logo.png'
import './Header.css'
import Button from "../ui/button/Button";
import CartContext from "../../store/CartContext";
import OrderProgressContext from "../../store/OrderProgressContext";

const Header = () => {

    const cartCtx = useContext(CartContext);
    const orderProgressCtx = useContext(OrderProgressContext);

    const totalCartItems = cartCtx.items.reduce((totalItems, item: any) => {
        return totalItems + item.quantity;
    }, 0);

    function handleShowCart() {
        orderProgressCtx.showCart();
    }

    return (
        <div className='header'>
            <nav className="navbar navbar-expand-lg navbar-dark  bg-dark p-2">
                <div className="container-fluid">
                    <img className="header-logo" src={logoImg} alt="SandwichItem"/>
                    <h1 className="navbar-brand">
                        <Link to={"/"} className="nav-link">
                            Faros SandwichItem-bar
                        </Link>
                    </h1>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={"/"} className="nav-link">
                                    Menucard
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/orders/my-orders"} className="nav-link">
                                    My orders
                                </Link>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to={"/login"} className="nav-link">
                                        Login
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Button textOnly
                                    className="nav-link"
                                    onClick={ handleShowCart }>Cart ({totalCartItems})</Button>
                                </li>
                            </ul>
                        </span>
                    </div>
                    <div id="modal"></div>
                </div>
            </nav>
        </div>
    );
}

export default Header;