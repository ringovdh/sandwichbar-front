import React, {useRef} from "react";

const AddressForm = () => {

    const streetTextInputRef = useRef<HTMLInputElement>(null);
    const houseNumberTextInputRef = useRef<HTMLInputElement>(null);
    const postcodeTextInputRef = useRef<HTMLInputElement>(null);
    const cityTextInputRef = useRef<HTMLInputElement>(null);

    return (
        <>
            <div className="control-row">
                <p className="control">
                    <label htmlFor="street">Street</label>
                    <input type="text"
                           id="street"
                           ref={streetTextInputRef}
                           required={true}/>
                </p>
                <p className="control">
                    <label htmlFor="number">Number</label>
                    <input type="text"
                           id="number"
                           ref={houseNumberTextInputRef}
                           required={true}/>
                </p>
            </div>
            <div className="control-row">
                <p className="control">
                    <label htmlFor="postcode">Postcode</label>
                    <input type="number"
                           id="postcode"
                           ref={postcodeTextInputRef}
                           required={true}/>
                </p>
                <p className="control">
                    <label htmlFor="city">City</label>
                    <input type="text"
                           id="city"
                           ref={cityTextInputRef}
                           required={true}/>
                </p>
            </div>
        </>
    );
}

export default AddressForm;