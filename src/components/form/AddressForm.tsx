import React from "react";

// @ts-ignore
const AddressForm = ( {register} ) => {

    return (
        <>
            <div className="control-row">
                <p className="control">
                    <label htmlFor="street">Street</label>
                    <input { ...register("street") }
                        required/>
                </p>
                <p className="control">
                    <label htmlFor="number">Number</label>
                    <input { ...register("number") }
                        required/>
                </p>
            </div>
            <div className="control-row">
                <p className="control">
                    <label htmlFor="postcode">Postcode</label>
                    <input {...register("postcode")}
                           required/>
                </p>
                <p className="control">
                    <label htmlFor="city">City</label>
                    <input {...register("city")}
                           required/>
                </p>
            </div>
        </>
    );
}

export default AddressForm;
