import React, {useContext, useEffect, useRef, useState} from "react";
import Button from "../ui/button/Button";
import "./Account.css";
import authenticationService from "../../services/AuthenticationService";
import UpdateUserRequest from "../../entities/request/updateUserRequest";
import UserContext from "../../store/UserContext";

const Account = () => {
    const userCtx = useContext(UserContext);
    const [username, setUsername] = useState<string>(userCtx.userName)
    const usernameTextInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (usernameTextInputRef.current) {
            usernameTextInputRef.current.focus()
        }
    }, [])
    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        const updateUserRequest = new UpdateUserRequest(username);

        authenticationService.updateUser(updateUserRequest)
    }

    return (
        <div id="account-page-container">
            <form onSubmit={handleSubmit}>
                <h2> My Account settings </h2>
                <p className="control">
                    <label htmlFor="user-email">Email</label>
                    <input type="email"
                           id="user-email"
                           value={userCtx.userEmail}
                           disabled={true}/>
                </p>
                <p className="control">
                    <label htmlFor="user-name">User name *</label>
                    <input type="text"
                           id="user-name"
                           value={username}
                           onChange={event => setUsername(event.target.value)}
                           required/>
                </p>

                <p className="account-actions">
                    <Button textOnly={false}
                            className="">
                        Save
                    </Button>
                </p>
            </form>
        </div>
    );
}

export default Account