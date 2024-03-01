import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Products from './Components/Products/Products';
import { ProductObj } from "./Components/Products/ProductsObj";
import React, { useState } from "react";

function App() {
  const[myCart, setMyCart]= useState([]);
  return (
      <>
        <Nav myCart= {myCart}/>
        <Products productObj={ProductObj} cartValues = {setMyCart}/>
        <Footer />
      </>
  );
}

export default App;
