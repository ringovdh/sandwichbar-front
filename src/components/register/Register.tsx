import React, {useContext, useState} from "react";
import UserContext from "../../store/UserContext";
import Warning from "../warning/Warning";


const Register = () => {

    const userCtx = useContext(UserContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const onButtonClick = async () => {
        setNameError('')
        setEmailError('')
        setPasswordError('')

        if ('' === name) {
            setNameError('Please enter a name')
        } else if ('' === email) {
            setEmailError('Please enter a valid email')
        } else if ('' === password) {
            setPasswordError('Please enter a strong password')
        } else {
            userCtx.registerUser(name, email, password);
        }
    }


    return (
        <>
            { userCtx.errorMessage && < Warning  message={userCtx.errorMessage} /> }
            <div className="login-container mx-auto">
                <div className={"titleContainer"}>
                    <div>Register</div>
                </div>
                <br/>
                <div className="inputContainer">
                    <div className="form-floating input-login mx-auto">
                        <input type="name"
                               className="form-control"
                               id="nameInput"
                               placeholder="name"
                               onChange={(ev) => setName(ev.target.value)}/>
                        <label htmlFor="nameInput">Name</label>
                    </div>
                    <label className="errorLabel">{nameError}</label>
                </div>
                <br/>
                <div className="inputContainer">
                    <div className="form-floating input-login mx-auto">
                        <input type="email"
                               className="form-control"
                               id="emailInput"
                               placeholder="name@example.com"
                               onChange={(ev) => setEmail(ev.target.value)}/>
                        <label htmlFor="emailInput">Email address</label>
                    </div>
                    <label className="errorLabel">{emailError}</label>
                </div>
                <br/>
                <div className="inputContainer">
                    <div className="form-floating input-login mx-auto">
                        <input type="password"
                               className="form-control"
                               id="PasswordInput"
                               placeholder="Password"
                               onChange={(ev) => setPassword(ev.target.value)}/>
                        <label htmlFor="PasswordInput">Password</label>
                    </div>
                    <label className="errorLabel">{passwordError}</label>
                </div>
                <br/>
                <div className={'inputContainer'}>
                    <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Register'}/>
                </div>
            </div>
        </>
    );

}

export default Register;