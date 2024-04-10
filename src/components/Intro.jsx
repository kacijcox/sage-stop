import "./Intro.css";
import { Link } from "react-router-dom";
import Intro1 from "../img/home/incense.png";
import Intro2 from "../img/home/herbs.jpeg";
import Intro3 from "../img/home/decor.jpeg";
import Intro4 from "../img/home/candles.png";


const Intro = () => {
    return (
        <>
         <div className="home-container">
            <div className="container">
                <div className="grid-container">
                    <div className="featured grid-one">
                        <Link to="/categories/incense">
                            <div id="img1" className="intro-overlay"></div>
                            <img src={Intro1} alt="img1" />
                            <p className="main-description">Unwind with our incense</p>
                            </Link>
                        </div>
                        <div className="featured grid-two">
                            <Link to="/categories/herbs">
                                <div id="img2" className="intro-overlay"></div>
                                <img src={Intro2} alt="img2" />
                                <p className="main-description">Herbs</p>
                            </Link>
                        </div>
                        <div className="featured grid-three">
                            <Link to="/categories/decor">
                                <div id="img3" className="intro-overlay"></div>
                                <img src={Intro3} alt="img3" />
                                <p className="main-description">Decor</p>
                            </Link>
                        </div>
                        <div className="featured grid-four">
                            <Link to="/categories/candles">
                                <div id="img4" className="intro-overlay"></div>
                                <img src={Intro4} alt="img4" />
                                <p className="main-description">Candles</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Intro;
