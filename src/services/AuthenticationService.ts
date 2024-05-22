import axios from "axios";

class AuthenticationService {

    async getUser() {
        return await axios.get('http://localhost:8080/user', { withCredentials: true });
    }

}

const service =  new AuthenticationService();

export default service;