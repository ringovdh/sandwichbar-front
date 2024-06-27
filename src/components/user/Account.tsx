import React, {useContext, useState} from "react";
import Button from "../ui/button/Button";
import "./Account.css";
import authenticationService from "../../services/AuthenticationService";
import UpdateUserRequest from "../../entities/request/updateUserRequest";
import UserContext from "../../store/UserContext";
import Address from "../../entities/address";

const Account = () => {

    const userCtx = useContext(UserContext);
    const [username, setUsername] = useState<string>(userCtx.userName)
    const [fullName, setFullName] = useState<string>(userCtx.fullName)
    const [street, setStreet] = useState<string>(userCtx.address ? userCtx.address.street : "")
    const [number, setNumber] = useState<string>(userCtx.address ? userCtx.address.houseNumber : "")
    const [postcode, setPostcode] = useState<number>(userCtx.address ? userCtx.address.postcode : 0)
    const [city, setCity] = useState<string>(userCtx.address ? userCtx.address.city : "")


    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        const updateUserRequest = new UpdateUserRequest(username, fullName, new Address(street, number, postcode, city));

        authenticationService.updateUser(updateUserRequest)
    }

    return (
        <div id="account-page-container">
            <form onSubmit={handleSubmit}>
                <h2> My Account settings </h2>
                <p className="control">
                    <label htmlFor="fullName">Full name</label>
                    <input type="text"
                           id="fullName"
                           value={userCtx.fullName}
                           onChange={event => setFullName(event.target.value)}
                           required/>
                </p>
                <p className="control">
                    <label htmlFor="user-email">Email</label>
                    <input type="email"
                           id="user-email"
                           value={userCtx.userEmail}
                           disabled={true}/>
                </p>
                <p className="control">
                    <label htmlFor="user-name">Username *</label>
                    <input type="text"
                           id="user-name"
                           value={username}
                           onChange={event => setUsername(event.target.value)}
                           required/>
                </p>
                <h3>Delivery Address:</h3>
                <p className="control">
                    <label htmlFor="user-name">Street</label>
                    <input type="text"
                           id="street"
                           value={ street }
                           onChange={event => setStreet(event.target.value)}
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

export default Account;