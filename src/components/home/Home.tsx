import {useContext} from "react";
import './Home.css';
import {UserContext} from "../../store/user-context";

const Home = () => {

    const userCtx = useContext(UserContext);

    return(
        <div className="home-page-container">
            <p>Welcome {userCtx.userName} in our sandwichbar!</p>

            <div className='sandwich'></div>
        </div>
    );

}

export default Home;