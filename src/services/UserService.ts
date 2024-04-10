import axios from "axios";

class UserService {

    async registerUser(name: string, email: string, password: string) {
        return await axios.post('http://localhost:8080/users/register',
            {name, email, password}
        );
    }

    async loginUser(email: string, password: string) {
        return await axios.post('http://localhost:8080/users/login',
            {email, password}
        );
    }
}

export default new UserService();