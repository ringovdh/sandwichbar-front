import {createContext, useState} from 'react';
import userService from "../services/AuthenticationService";

const UserContext = createContext({
    userId: '',
    userEmail: '',
    userName: '',
    isUser: false,
    isAdmin: false,
    errorMessage: '',
    getUser: () => {},

});

// @ts-ignore
export function UserContextProvider({children}) {

    const [userId, setUserId] = useState('')
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [isUser, setIsUser] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const getUser = () => {
        userService.getUser()
            .then((response) => {
                console.log(response.data)
                setUserId(response.data.userId);
                setUserEmail(response.data.userEmail);
                setUserName(response.data.username);
                setIsUser(checkRole('ROLE_USER', response.data.roles));
                setIsAdmin(checkRole('ROLE_ADMIN', response.data.roles));
            })
            .catch((error) => {
                if (error.response) {
                    setErrorMessage(error.response.data.message + ', please try again');
                }
            });
    }

    function checkRole(role: string, roles: string | string[]){
        return roles.includes(role);
    }

    const ctxValue = {
        userId: userId,
        userName: userName,
        userEmail: userEmail,
        isUser: isUser,
        isAdmin: isAdmin,
        errorMessage: errorMessage,
        getUser: getUser
    }

    return (
        <UserContext.Provider value={ctxValue}>
            {children}
        </UserContext.Provider>);
}

export default UserContext;