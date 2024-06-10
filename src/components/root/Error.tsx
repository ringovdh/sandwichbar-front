import Header from "../header/Header";
import React from "react";
import errorImg from "../../assets/error.png"

const ErrorPage = () => {
    return (
        <>
            < Header/>
            <div className="container mt-3">
                <h1>Oopsie!</h1>
                <p>Something went wrong... </p>
                <img src={errorImg}
                     alt="sad sandwich"
                     className="errorImg"/>
            </div>
        </>
    );
}

export default ErrorPage;