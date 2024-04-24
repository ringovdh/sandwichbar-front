import {useContext} from "react";
import './Home.css';
import UserContext from "../../store/UserContext";
import Menucard from "../menuCard/Menucard";

const Home = () => {

    const userCtx = useContext(UserContext);

    return(
        <div className="home-page-container">
            <p>Welcome {userCtx.userName} in our sandwichbar!</p>
            <Menucard></Menucard>
            <div className='sandwichbar-background'></div>
        </div>
    );

}

export default Home;