import EmptyCartImg from "../img/cart/emptycart.png";

function EmptyCart({ openCart }) {
  return (
    <div className="empty-cart">
      <img src={EmptyCartImg} alt="empty-cart" />
      <p>Your cart is empty</p>
      <button onClick={openCart}>Keep Browsing</button>
    </div>
  );
}

export default EmptyCart;
