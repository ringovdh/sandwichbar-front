import {Link, NavLink} from "react-router-dom";
import React, {useContext} from "react";
import logoImg from '../../assets/header-logo.png';
import userIcon from '../../assets/user.png'
import './Header.css';
import Button from "../ui/button/Button";
import CartContext from "../../store/CartContext";
import OrderProgressContext from "../../store/OrderProgressContext";
import UserContext from "../../store/UserContext";

const Header = () => {

    const cartCtx = useContext(CartContext);
    const orderProgressCtx = useContext(OrderProgressContext);
    const userCtx = useContext(UserContext);

    const totalCartItems = cartCtx.items.reduce((totalItems, item: any) => {
        return totalItems + item.quantity;
    }, 0);

    function handleShowCart() {
        orderProgressCtx.showCart();
    }

    function toggleMenu() {
        let subMenu = document.getElementById("subMenu");
        subMenu!.classList.toggle("open-menu");
    }

    return (
        <div className='header'>
            <nav className="navbar navbar-expand-lg navbar-dark  bg-dark p-2">
                <div className="container-fluid">
                    <img className="header-logo" src={logoImg} alt="SandwichItem"/>
                    <h1 className="navbar-brand">
                        <Link to={"/"} className="nav-link">
                            Faros Sandwich-bar
                        </Link>
                    </h1>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to={"/"} className="nav-link">
                                    Menucard
                                </NavLink>
                            </li>
                            { userCtx.isUser && <li className="nav-item">
                                <NavLink id="orders-link"
                                      to={"/user/orders"}
                                      className="nav-link">
                                    My orders
                                </NavLink>
                            </li> }
                            { userCtx.isAdmin && <li className="nav-item">
                                <NavLink id="orders-link"
                                         to={"/admin/orders"}
                                         className="nav-link">
                                    All orders
                                </NavLink>
                            </li> }
                        </ul>
                        <span className="navbar-text">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {(userCtx.userRef === undefined || userCtx.userRef === '') &&
                                    <li className="nav-item" id="login-link">
                                        <a href="http://localhost:8080/oauth2/authorization/spring"
                                           className="nav-link">Login</a>
                                    </li>
                                }
                                {(userCtx.userRef !== undefined && userCtx.userRef !== '') &&
                                    <li className="nav-item">
                                        <div data-toggle="dropdown">
                                            <img src={userIcon} alt="user icon" className="user-icon" onClick={toggleMenu}/>
                                        </div>
                                        <div className="sub-menu-wrapper" id="subMenu">
                                            <div className="sub-menu">
                                                <div className="user-info">
                                                    <img src={userIcon} alt="user icon"/>
                                                    <h3>{userCtx.userName}</h3>
                                                </div>

                                            </div>
                                            <hr/>
                                            <li>
                                                <NavLink id="account-link"
                                                      to={"/user/account"}
                                                      className="nav-link sub-menu-link">
                                                    <p>My account</p>
                                                    <span> {'>'} </span>
                                                </NavLink>

                                            </li>
                                            <li>
                                                <a href="http://localhost:8080/logout"
                                                   className="nav-link sub-menu-link">
                                                    <p>Logout</p>
                                                    <span> {'>'} </span>
                                                </a>
                                            </li>
                                        </div>
                                    </li>
                                }
                                <li className="nav-item">
                                    <Button textOnly
                                            id="cart-link"
                                            className="nav-link"
                                            onClick={handleShowCart}>
                                        Cart ({totalCartItems})
                                    </Button>
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