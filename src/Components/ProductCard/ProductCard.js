import React, { useRef } from 'react'
import { truncateDescription } from '../../utils'

function ProductCard({ product, index, addToCart = () => {}, isAdminPage = false }) {
    const button = useRef([])

    return (
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
            {!isAdminPage && <p className="card-text">
            <strong>Rating:</strong> {product.rating.rate} &nbsp; (
            {product.rating.count} reviews)
            </p>}
            {product.instock == false &&
            <p className="card-text text-danger">
                <strong>Out of stock</strong>
            </p>
            }
            <div className="d-flex justify-content-between align-items-center mt-3">
            {!isAdminPage && <div className="btn-group">
                <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                >
                View
                </button>
                <button
                key={product.id}
                ref={(ref) => (button.current[index] = ref)}
                //ref={button[index]}
                type="button"
                disabled={product.instock == false ? true : false}
                className="btn btn-sm btn-outline-secondary"
                onClick={() => addToCart(product, index, button)}
                >
                Add to Cart
                </button>
            </div>}
            <small className="text-muted">${product.price}</small>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ProductCard