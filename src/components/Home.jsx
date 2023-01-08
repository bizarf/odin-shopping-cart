import { Link } from "react-router-dom";
import pointingImage from "../assets/john-schnobrich-FlPc9_VocJ4-unsplash.jpg";

const Home = () => {
    return (
        <div className="homePage">
            <h1>Welcome to Computer World!</h1>
            <h3>We sell the best computer products at the best prices!</h3>
            <img
                src={pointingImage}
                alt="Photo of people pointing at a laptop monitor"
                className="homePageImage"
            />
            <Link to={"/shop"}>
                <button className="homePageShopBtn">
                    Have a look at our shop!
                </button>
            </Link>
        </div>
    );
};

export default Home;
