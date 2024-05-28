import React, {useContext, useRef} from "react";
import Button from "../ui/button/Button";
import "./Account.css";
import authenticationService from "../../services/AuthenticationService";
import UpdateUserRequest from "../../entities/request/updateUserRequest";
import UserContext from "../../store/UserContext";

const Account = () => {

    const userCtx = useContext(UserContext);
    const usernameTextInputRef = useRef<HTMLInputElement>(null);

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        const updateUserRequest = new UpdateUserRequest(userCtx.userName);

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
                           value={userCtx.userEmail} disabled={true}/>
                </p>
                <p className="control">
                        <label htmlFor="user-name">User name</label>
                        <input type="text" id="user-name" value={userCtx.userName}/>
                    </p>

                    <p className="account-actions">
                        <Button
                            textOnly={false}
                            className="">
                            Save
                        </Button>
                    </p>
            </form>
        </div>
    );
}

export default Account