import Address from "../address";


class UpdateUserRequest {
    username: string;
    fullName: string;
    address: Address;

    constructor(username: string, fullName: string, address: Address) {
        this.username = username;
        this.fullName = fullName;
        this.address = address;
    }
}

export default UpdateUserRequest