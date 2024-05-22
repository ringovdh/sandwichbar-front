import {createContext, useState} from 'react';
import userService from "../services/AuthenticationService";

const UserContext = createContext({
    userId: '',
    userName: '',
    errorMessage: '',
    getUser: () => {
    }
});

// @ts-ignore
export function UserContextProvider({children}) {

    const [userId, setUserId] = useState('')
    const [userName, setUserName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const getUser = () => {
        userService.getUser()
            .then((response) => {
                setUserId(response.data.userId);
                setUserName(response.data.username);
            })
            .catch((error) => {
                if (error.response) {
                    setErrorMessage(error.response.data.message + ', please try again')
                }
            });
    }

    const ctxValue = {
        userId: userId,
        userName: userName,
        errorMessage: errorMessage,
        getUser: getUser
    }

    return (
        <UserContext.Provider value={ctxValue}>
            {children}
        </UserContext.Provider>);
}

export default UserContext;