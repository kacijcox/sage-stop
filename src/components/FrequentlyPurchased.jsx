import ProductItem from "./ProductItem";
import "./ProductItem.css";

function FrequentlyPurchased() {
  return (
    <div className="frequent-container">
      <h2 className="frequent-h2">Frequently Purchased</h2>
      <div className="container">
        <div className="products-grid">
          <ProductItem />
        </div>
      </div>
    </div>
  );
}

export default FrequentlyPurchased;