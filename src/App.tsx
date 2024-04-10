import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Routes, Route} from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import UserContextProvider from "./store/user-context";

function App() {
    return (
        <UserContextProvider>
            < Header />
            <div className="container mt-3">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </UserContextProvider>
    );
}

export default App;
