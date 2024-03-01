import React, { useState } from "react";
// import { ProductObj } from "./ProductsObj";

const Products = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [cart, setCart] = useState([]);
  const productData = props.productObj;

  console.log("productData: "+productData);
  console.log("cartData: "+JSON.stringify(cart));

  // Function to handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Filtered product list based on selected category
  const filteredProducts = selectedCategory
    ? productData.filter((product) => product.category === selectedCategory)
    : productData;

  var AllCats = productData.map((data) => data.category);
  AllCats = [...new Set(AllCats)];
  console.log(AllCats);
  
  function truncateDescription(description, maxLength) {
    if (description.length <= maxLength) {
      return description;
    }
    return description.substring(0, maxLength) + "...";
  }

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
    props.cartValues(cart);    
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
            {console.log("inside Div: " + AllCats)}
            {AllCats.map((filteredcat) => (
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
            <div className="col-md-4 productList" key={index}>
              <div className="card h-100 mb-4 shadow-sm">
                <br />
                <img
                  src={product.image}
                  alt={product.title}
                  width="50%"
                  style={{ objectFit: "contain", aspectRatio: 3 / 2 }}
                  aria-label="Placeholder: Thumbnail"
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text flex-grow-1">
                    {truncateDescription(product.description, 100)}
                  </p>
                  <p className="card-text">
                    <strong>Category:</strong> {product.category}
                  </p>
                  <p className="card-text">
                    <strong>Rating:</strong> {product.rating.rate} &nbsp; (
                    {product.rating.count} reviews)
                  </p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                    <small className="text-muted">${product.price}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Products;