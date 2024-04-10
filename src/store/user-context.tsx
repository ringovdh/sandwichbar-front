import {createContext, useState} from 'react';
import userService from "../services/UserService";
import {useNavigate} from "react-router-dom";

export const UserContext = createContext({
    userName: '',
    registerUser: (name: string, email: string, password: string) => {},
    loginUser: (email: string, password: string) => {}
});

// @ts-ignore
export default function UserContextProvider({children}) {

    const [userName, setUserName] = useState('');
    let navigate = useNavigate();
    const registerUser = (name: string, email: string, password: string) => {
         userService.registerUser(name, email, password)
            .then((response) => {
                setUserName(response.data.name);
                navigate('/')
            });
    }

    const loginUser = (email: string, password: string) => {
        userService.loginUser(email, password)
            .then((response) => {
                setUserName(response.data.name);
                navigate('/')
        });
    }

    const ctxValue = {
        userName: userName,
        registerUser: registerUser,
        loginUser: loginUser
    }


    return (<UserContext.Provider value={ctxValue}>
        {children}
    </UserContext.Provider>)
}