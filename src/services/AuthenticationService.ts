import axios from "axios";
import UpdateUserRequest from "../entities/request/updateUserRequest";

class AuthenticationService {

    async getUser() {
        return await axios.get('http://localhost:8080/userInfo', { withCredentials: true });
    }

    async updateUser(updateUserRequest: UpdateUserRequest) {
        return await axios.put('http://localhost:8080/userInfo',
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