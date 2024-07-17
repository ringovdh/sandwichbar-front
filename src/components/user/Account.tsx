import React, {useContext, useState} from "react";
import { useForm } from "react-hook-form"
import Button from "../ui/button/Button";
import "./Account.css";
import authenticationService from "../../services/AuthenticationService";
import UpdateUserRequest from "../../entities/request/updateUserRequest";
import UserContext from "../../store/UserContext";
import Address from "../../entities/address";
import AddressForm from "../form/AddressForm";

interface FormData { username: string; fullName: string; street: string; number: string; postcode: number; city: string }

const Account = () => {

    const userCtx = useContext(UserContext);

    const { register, handleSubmit} = useForm<FormData>();

    function onSubmit(data: any) {
        const updateUserRequest = new UpdateUserRequest(
            data.username,
            data.fullName,
            new Address(data.street, data.number, data.postcode, data.city));

        authenticationService.updateUser(updateUserRequest)
    }

    return (
        <div id="account-page-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2> My Account settings </h2>
                <p className="control">
                    <label htmlFor="fullName">Full name</label>
                    <input { ...register("fullName") }
                           value={userCtx.fullName}
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
                    <input { ...register("username") }
                           value={userCtx.userName}
                           required/>
                </p>
                <h3>Delivery Address:</h3>
                <AddressForm register = { register }></AddressForm>
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
