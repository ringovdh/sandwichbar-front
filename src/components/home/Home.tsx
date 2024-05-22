import {useContext, useEffect} from "react";
import './Home.css';
import UserContext from "../../store/UserContext";
import Menucard from "../menuCard/Menucard";

const Home = () => {

    const userCtx = useContext(UserContext);

    useEffect(() => {
        const initState = () => {
            userCtx.getUser()
        }
        initState();
    }, [])

    return(
        <div id="home-page-container"
             className="home-page-container">
            <p>Welcome <b>{userCtx.userName}</b> in our sandwichbar!</p>
            <Menucard></Menucard>
            <div className='sandwichbar-background'></div>
        </div>
    );

}

export default Home;