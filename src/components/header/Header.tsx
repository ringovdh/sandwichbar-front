import {Link} from "react-router-dom";
import React from "react";
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav className="navbar navbar-expand navbar-dark bg-dark p-2">
                <a href="/" className="navbar-brand">
                    Sandwich-bar
                </a>
                <div className="navbar-nav mr-auto">
                    <div className="navbar-nav login-links">
                        <li className="nav-item">
                            <Link to={"/login"} className="nav-link">
                                Login
                            </Link>
                        </li>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;