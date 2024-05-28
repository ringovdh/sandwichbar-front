import axios from "axios";
import UpdateUserRequest from "../entities/request/updateUserRequest";

class AuthenticationService {

    async getUser() {
        return await axios.get('http://localhost:8080/users', { withCredentials: true });
    }

    async updateUser(updateUserRequest: UpdateUserRequest) {
        return await axios.post('http://localhost:8080/users/account',
            updateUserRequest,
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    }
}

const service =  new AuthenticationService();

export default service;