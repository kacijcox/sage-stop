import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes from react-router-dom
import React from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Incense from './components/categories/Incense';
import Herbs from './components/categories/Herbs';
import Candles from './components/categories/Candles'
import Decor from './components/categories/Decor';
import FrequentlyPurchased from './components/FrequentlyPurchased';
import All from './components/categories/All';


const App = () => {
  return (
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
      </Routes>
    </Router>
  );
};

export default App;
