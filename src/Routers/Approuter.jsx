import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import { useState } from "react";
import Home from "../pages/Home";
import Products from "../pages/product";
import Cart from "../pages/cart";
import Login from "../pages/Login";
import Register from "../pages/Register";


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
        <Route path="/product" element={<Products/>}/>
        <Route path="/cart" element={<Cart carts={carts} removecart={removecart}/>}/>
        <Route path="/Login" element={<Login/>} />
        <Route path="/Register" element={<Register/>}/>
    </Routes>
   </Router>
  )
}
export default Approuter;
