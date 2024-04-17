import { items } from "./AllData";
import { Link } from "react-router-dom";
import "./FrequentlyPurchased.css";


function ProductItem() {
  const filteredItems = items.filter((item) => item.id <= 8);

  return (
    <>
      {filteredItems.map((item) => (
        <div key={item.id} className="product normal">
          <Link
            onClick={() => window.top(0, 0)}
            to={`/categories/product/${item.id}`}
          >
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
    </>
  );
}

export default ProductItem;
