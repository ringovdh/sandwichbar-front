import React from "react";
import errorImg from "../../assets/error.png"

const ErrorPage = () => {
    return (
        <>
            <div className="container mt-3">
                <h1>Oopsie!</h1>
                <p>You are not allowed to see this page</p>
                <img src={errorImg}
                     alt="sad sandwich"
                     className="errorImg"/>
            </div>
        </>
    );
}

export default ErrorPage;