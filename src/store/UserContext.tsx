import {createContext, useState} from 'react';
import userService from "../services/AuthenticationService";
import {useNavigate} from "react-router-dom";

const UserContext = createContext({
    userId: 0,
    userName: '',
    errorMessage: '',
    registerUser: (name: string, email: string, password: string) => {
    },
    loginUser: (email: string, password: string) => {
    }
});

// @ts-ignore
export function UserContextProvider({children}) {

    const [userId, setUserId] = useState(0)
    const [userName, setUserName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    let navigate = useNavigate();
    const registerUser = async (name: string, email: string, password: string) => {
        setErrorMessage('');
        userService.registerUser(name, email, password)
            .then((response) => {
                setUserName(response.data.name);
                navigate('/login')
            })
            .catch((error) => {
                if (error.response) {
                    setErrorMessage(error.response.data.message)
                }
            });
    }

    const loginUser = (email: string, password: string) => {
        setErrorMessage('');
        userService.loginUser(email, password)
            .then((response) => {
                sessionStorage.setItem('token', response.data.token)
                setUserId(response.data.userId);
                setUserName(response.data.name);
                navigate('/')
            })
            .catch((error) => {
                if (error.response) {
                    setErrorMessage(error.response.data.message)
                }
            });
    }

    const ctxValue = {
        userId: userId,
        userName: userName,
        errorMessage: errorMessage,
        registerUser: registerUser,
        loginUser: loginUser
    }

    return (
        <UserContext.Provider value={ctxValue}>
            {children}
        </UserContext.Provider>);
}

export default UserContext;