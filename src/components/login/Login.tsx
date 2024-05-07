import React, {useContext, useState} from "react";
import './Login.css';
import {Link} from "react-router-dom";
import UserContext from "../../store/UserContext";
import Warning from "../warning/Warning";

const Login = () => {
    const userCtx = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const onButtonClick = () => {
        setEmailError('')
        setPasswordError('')

        if ('' === email) {
            setEmailError('Please enter a valid email')
        } else if ('' === password) {
            setPasswordError('Please enter a strong password')
        } else {
            userCtx.loginUser(email, password);
        }
    }

    return (
        <>
            <div className="login-container mx-auto">
                {userCtx.errorMessage && <Warning message={userCtx.errorMessage}/>}
                <div className={"titleContainer"}>
                    <div>Login</div>
                </div>
                <br/>
                <div className="inputContainer">
                    <div className="form-floating input-login mx-auto">
                        <input type="email"
                               className="form-control"
                               id="email-input"
                               placeholder="name@example.com"
                               onChange={(ev) => setEmail(ev.target.value)}/>
                        <label htmlFor="email-input">Email address</label>
                    </div>
                    <label id="email-error-message"
                           className="errorLabel">{emailError}</label>
                </div>
                <br/>
                <div className="inputContainer">
                    <div className="form-floating input-login mx-auto">
                        <input type="password"
                               className="form-control"
                               id="password-input"
                               placeholder="Password"
                               onChange={(ev) => setPassword(ev.target.value)}/>
                        <label htmlFor="password-input">Password</label>
                    </div>
                    <label id="password-error-message"
                           className="errorLabel">{passwordError}</label>
                </div>
                <br/>
                <div>
                    <p>New user?</p>
                    <Link to={"/register"}>Please register first.</Link>
                </div>
                <br/>
                <div className={'inputContainer'}>
                    <input id='logInButton'
                           className={'inputButton'}
                           type="button"
                           onClick={onButtonClick}
                           value={'Log in'}/>
                </div>
            </div>
        </>
    )
}

export default Login