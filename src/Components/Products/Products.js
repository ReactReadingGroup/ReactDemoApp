import React, { useEffect, useState } from "react";
import { ProductObj } from "./ProductsObj";
import ProductCard from "../ProductCard/ProductCard";


const Products = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [, setCart] = useState([]);
  const [productData, setProductData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [allCats, setAllCats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //call api to get the data 
    setIsLoading(true);
    console.log("setting product data")
    //some process which is taking time to load 
    setTimeout(() => {
      console.log('Hello, World!');
      setProductData(ProductObj);
      setIsLoading(false)
    }, 2000);
  }, [])

  useEffect(() => {
    // Filtered product list based on selected category
    setFilteredProducts(selectedCategory
      ? productData.filter((product) => product.category === selectedCategory)
      : productData);

    setAllCats([...new Set(productData.map((data) => data.category))]);
    console.log(allCats);
  }, [productData, selectedCategory])

  // Function to handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const addToCart = (product, index, button) => {
    if (button.current[index].innerText !== "Added") {
      setCart(prev => [...prev, product]);
      props.cartValues(prev => [...prev, product]);
      console.log("button", button.current)
      button.current[index].className = "btn btn-sm btn-success";
      button.current[index].innerText = "Added";
    }
  }
  if (isLoading) {
    return (
      <div className="App-header">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <>
      {/* Category filter */}

      <div className="row">
        <span><br></br></span>
        <div className="col-md-9 "></div>
        {/* <div className="col-md-1">Filter:</div> */}
        <div className="col-md-2 ">
          <select
            className="form-control"
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            {/* <select className='form-control'> */}
            <option value="">All Categories</option>
            {/* Assuming productData contains all possible categories */}
            {console.log("inside Div: " + allCats)}
            {allCats.map((filteredcat) => (
              <option key={filteredcat} value={filteredcat}>
                {filteredcat}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {/* {productData.map((product, index) => ( */}
          {filteredProducts.map((product, index) => (
            <ProductCard product={product} index={index} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Products;