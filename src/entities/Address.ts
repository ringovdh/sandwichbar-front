class Address {
    street: string;
    houseNumber: string;
    postcode: number;
    city: string;

    constructor(street: string, houseNumber: string, postcode: number, city: string) {
        this.street = street;
        this.houseNumber = houseNumber;
        this.postcode = postcode;
        this.city = city;
    }
}

export default Address;