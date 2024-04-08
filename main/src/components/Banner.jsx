import { Link } from "react-router-dom";
import "./Banner.css";

function Banner({ title, text, img}) {
    return(
        <div className="banner">
            <div className="container">
                <div className="banner-container">
                <div className="text-side">
                    <div className="text">
                        <h2>{ title }</h2>
                        <p>{ text }</p>
                        <button>Explore all products</button>
                    </div>
                </div>
                <div className="img-side">
                    <img src={img} alt="banner" />
                </div>
            </div>
        </div>
    </div>
    );
}

export default Banner;