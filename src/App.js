import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Incense from './components/categories/Incense';
import Herbs from './components/categories/Herbs';
import Candles from './components/categories/Candles';
import Decor from './components/categories/Decor';
import FrequentlyPurchased from './components/FrequentlyPurchased';
import All from './components/categories/All';
import CartItem from './components/CartItem';
import CartWithItems from './components/CartWithItems';
import EmptyCart from './components/EmptyCart';
import ProductPage, { CartContext } from "./pages/ProductPage";

function App() {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (item) => {
    setCartItem([...cartItem, item]);
  };

  // local storage
  useEffect(() => {
    const json = localStorage.getItem("cartItem");
    const savedCart = JSON.parse(json);
    if (savedCart) {
      setCartItem(savedCart);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(cartItem);
    localStorage.setItem("cartItem", json);
  }, [cartItem]);


  return (
    <CartContext.Provider value={{ cartItem, addToCart, setCartItem }}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/categories/incense" element={<Incense />} />
          <Route exact path="/categories/herbs" element={<Herbs />} />
          <Route exact path="/categories/candles" element={<Candles />} />
          <Route exact path="/categories/decor" element={<Decor />} />
          <Route exact path="/components/FrequentlyPurchased" element={<FrequentlyPurchased />} />
          <Route exact path="/categories/all" element={<All />} />
          <Route exact path="/components/CartItem" element={<CartItem />} />
          <Route exact path="/components/CartWithItems" element={<CartWithItems />} />
          <Route exact path="/components/EmptyCart" element={<EmptyCart />} />
          <Route path="/categories/product/:id" element={<ProductPage />} />
        </Routes>
      </Router>
    </CartContext.Provider>
  );
};

export default App;
