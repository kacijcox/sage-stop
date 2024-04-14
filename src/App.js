import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Categories from './pages/Categories';
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
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />

        <Route path="categories" element={<Categories />}>
          <Route path="all" element={<All />} />
          <Route exact path="/categories/incense" element={<Incense />} />
          <Route exact path="/categories/herbs" element={<Herbs />} />
          <Route exact path="/categories/candles" element={<Candles />} />
          <Route exact path="/categories/decor" element={<Decor />} />
        </Route>
        <Route path="/categories/product/:id" element={<ProductPage />} />
      </Routes>
    </CartContext.Provider>
  );
};

export default App;
