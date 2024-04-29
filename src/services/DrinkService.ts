import axios from "axios";

class DrinkService {

    async getDrinks() {
        return await axios.get('http://localhost:8080/drinks')
    }
}

export default new DrinkService()