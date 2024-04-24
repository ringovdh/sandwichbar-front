import axios from "axios";

class AuthenticationService {

    async registerUser(name: string, email: string, password: string) {
        return await axios.post('http://localhost:8080/authenticate/register',
            {name, email, password}
        );
    }

    async loginUser(email: string, password: string) {
        return await axios.post('http://localhost:8080/authenticate/login',
            {email, password},
        );
    }
}

export default new AuthenticationService();