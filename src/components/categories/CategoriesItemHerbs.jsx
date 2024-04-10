import { Link } from "react-router-dom";
import { items } from "../AllData";
import "./ProductPage.css";

function CategoriesItemHerbs() {
    const filteredItems = items.filter((item) => item.category === "herbs");
    return (
        <>
            <div className="category-container">
                <div className="container">
                    <div className="products-grid">
                        {filteredItems.map((item) => (
                            <div key={item.id} className="product normal">
                                <Link to={`/categories/incense/${item.id}`}>
                                    <div className="product-header">
                                        <img src={item.img} alt="product1" />
                                    </div>
                                    <div className="product-details">
                                        <p>{item.description}</p>
                                        <p className="item-price">${item.price}.00</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CategoriesItemHerbs;
