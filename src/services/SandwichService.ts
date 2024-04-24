import axios from "axios";

class SandwichService {

    async getSandwiches() {
        return await axios.get('http://localhost:8080/sandwiches')
    }
}

export default new SandwichService()