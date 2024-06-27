import {createContext, useState} from 'react';
import userService from "../services/AuthenticationService";
import Address from "../entities/address";

const UserContext = createContext({
    userRef: '',
    userEmail: '',
    userName: '',
    fullName: '',
    address: new Address("", "", 0, ""),
    isUser: false,
    isAdmin: false,
    errorMessage: '',
    getUser: () => {},

});

// @ts-ignore
export function UserContextProvider({children}) {

    const [userRef, setUserRef] = useState('')
    const [userName, setUserName] = useState('');
    const [fullName, setFullName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [address, setAddress] = useState(new Address("", "", 0, ""));
    const [isUser, setIsUser] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const getUser = () => {
        userService.getUser()
            .then((response) => {
                setUserRef(response.data.userRef);
                setUserEmail(response.data.userEmail);
                setUserName(response.data.username);
                setFullName(response.data.fullName);
                setAddress(response.data.address);
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
        userRef: userRef,
        userName: userName,
        fullName: fullName,
        userEmail: userEmail,
        address: address,
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