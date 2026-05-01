import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import { useState } from "react";
import Home from "../pages/Home";

import Cart from "../pages/Cart.jsx";
import Navbar from "../components/Navbar";
import Product from "../pages/product";


const Approuter = () => {
  const[carts,setCarts]=useState([])
  const addcarts = (pro) => {
  setCarts(prev => {
    const updated = [...prev, pro];
    console.log(updated);
    return updated;
  });
};
const removecart = (id) => {
  setCarts(prev => prev.filter(item => item.id !== id));
};
  return (
   <Router>
    
    <Routes>
        <Route path="/" element={<Home addcarts={addcarts} carts={carts}/>} />
        <Route path="/product" element={<Product/>}/>
        <Route path="/cart" element={<Cart carts={carts} removecart={removecart}/>}/>
       
    </Routes>
   </Router>
  )
}
export default Approuter;
