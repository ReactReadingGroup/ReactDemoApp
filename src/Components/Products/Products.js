import React from "react";
import { ProductObj } from "./ProductsObj";

const Products = () => {
    const productData = ProductObj;

    function truncateDescription(description, maxLength) {
        if (description.length <= maxLength) {
            return description;
        }
        return description.substring(0, maxLength) + '...';
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className="col-md-4 productList">
                        <div className="card h-100 mb-4 shadow-sm">
                            <br />
                            <img
                                src={productData[0].image}
                                alt={productData[0].title}
                                width="50%"
                                style={{ objectFit: 'contain', aspectRatio: 3 / 2 }}
                                aria-label="Placeholder: Thumbnail"
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{productData[0].title}</h5>
                                <p className="card-text flex-grow-1">
                                    {truncateDescription(productData[0].description, 100)}
                                </p>
                                <p className="card-text"><strong>Category:</strong> {productData[0].category}</p>
                                <p className="card-text"><strong>Rating:</strong> {productData[0].rating.rate}  &nbsp;
                                    ({productData[0].rating.count} reviews)</p>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">
                                            View
                                        </button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">
                                            Add to Cart
                                        </button>
                                    </div>
                                    <small className="text-muted">${productData[0].price}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 productList">
                        <div className="card h-100 mb-4 shadow-sm">
                            <br />
                            <img
                                src={productData[2].image}
                                alt={productData[2].title}
                                width="50%"
                                style={{ objectFit: 'contain', aspectRatio: 3 / 2 }}
                                aria-label="Placeholder: Thumbnail"
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{productData[2].title}</h5>
                                <p className="card-text flex-grow-1">
                                    {truncateDescription(productData[2].description, 100)}
                                </p>
                                <p className="card-text"><strong>Category:</strong> {productData[2].category}</p>
                                <p className="card-text"><strong>Rating:</strong> {productData[2].rating.rate}  &nbsp;
                                    ({productData[2].rating.count} reviews)</p>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">
                                            View
                                        </button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">
                                            Add to Cart
                                        </button>
                                    </div>
                                    <small className="text-muted">${productData[2].price}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Products;