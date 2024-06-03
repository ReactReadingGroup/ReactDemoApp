import React, { useState, useEffect } from 'react';
import uploadImg from "../../../assets/upload.png";
import newProdImg from "../../../assets/HANS Women Sweat Shirt.jpg";
import styles from "./ControlledFormComponent.module.css";
import { productCategories, sellers } from '../../../const';
import ProductCard from '../../ProductCard/ProductCard';
import { validateForm } from '../../../utils';

function ControlledFormComponent() {
  const initialFormValue = {
    title: "",
    price: "",
    description: "",
    category: "",
    seller: "",
    expressDelivery: false,
    instock: true,
    image: newProdImg,
  };
 const [productFormData, setProductFormData] = useState(initialFormValue);
 const [errors, setErrors] = useState({});
 const [isSubmitBtnDisabled, setIsSubmitBtnDisabled] = useState(true);

  const [, setProductImg] = useState("");
  const [productImgName, setProductImgName] = useState("");
  const [newProductList, setNewProductList] = useState([]);

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [newProductList]);

  useEffect(() => {
    if (productFormData.price && productFormData.title && productFormData.category && productFormData.seller && !errors) {
      setIsSubmitBtnDisabled(false);
    } else {
      setIsSubmitBtnDisabled(true);
    }
  }, [productFormData, errors])

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setProductImg(file);
    setProductImgName(file.name);
  };

  const handleChange = (event) => {
    if (event.target.name !== "expressDelivery") {
      setProductFormData({ ...productFormData, [event.target.name]: event.target.value });
    } else {
      setProductFormData({ ...productFormData, [event.target.name]: event.target.checked });
    }
    setErrors(validateForm(event.target.name, event.target.value));
  };

  const resetForm = () => {
    setProductFormData(initialFormValue);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Value", productFormData);
    let formData = newProductList;
    formData.push(productFormData);
    setNewProductList([...formData]);
    resetForm();
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.productForm}>
          <div className={styles.heading}>
            <h3>Add Product</h3>
          </div>
          <div className={styles.fieldWrapper}>
            <label htmlFor="title">Product Name*</label>
            <input type="text" name="title" value={productFormData.title} onChange={handleChange} />
            {errors && errors.hasOwnProperty("title") && errors.title && 
              <p className={styles.error}>
                {errors.title}
              </p>
            }
          </div>

          <div className={styles.fieldWrapper}>
            <label htmlFor="price">Product Price*</label>
            <input type="text" name="price" value={productFormData.price} onChange={handleChange} />
            {errors && errors.hasOwnProperty("price") && errors.price && 
              <p className={styles.error}>
                {errors.price}
              </p>
            }
          </div>

          <div className={styles.fieldWrapper}>
            <label htmlFor="category">Product Category*</label>
            <select name="category" className={styles.dropdown} value={productFormData.category} onChange={handleChange}>
              {productCategories.map((category) => 
                <option key={category.value} value={category.name}>{category.name}</option>
              )}
            </select>
            {errors && errors.hasOwnProperty("category") && errors.category && 
              <p className={styles.error}>
                {errors.category}
              </p>
            }
          </div>

          <div className={styles.fieldWrapper}>
            <label htmlFor="seller">Select Seller*</label>
            <select name="seller" className={styles.dropdown} value={productFormData.seller} onChange={handleChange}>
              {sellers.map((seller) => 
                  <option key={seller.name} value={seller.value}>{seller.name}</option>
              )}
            </select>
            {errors && errors.hasOwnProperty("seller") && errors.seller && 
              <p className={styles.error}>
                {errors.seller}
              </p>
            }
          </div>

          <div className={`${styles.fieldWrapper} ${styles.checkBoxWrapper}`}>
            <label className={styles.checkboxLabel} htmlFor="expressDelivery">Express Delivery Support</label>
            <input type="checkbox" name="expressDelivery" checked={productFormData.expressDelivery} onChange={handleChange} />
          </div>

          <div className={styles.fieldWrapper}>
            <label htmlFor="description">Product Description</label>
            <textarea id="description" name="description" value={productFormData.description} onChange={handleChange} />
          </div>

          <div className={styles.fileUpload}>
            <img src={uploadImg} className={styles.uploadImg} alt="upload" />
            <h4>{productImgName || "Upload product image"}</h4>
            <p>Maximun file size 10MB</p>
            <input type="file" onChange={handleFileChange} />
          </div>
          
          <div className={styles.submitBtnWrapper}>
            <button className={styles.submitBtn} type="submit" disabled={isSubmitBtnDisabled}>Submit</button>
          </div>
      </form>

      {newProductList && newProductList.length > 0 &&
        <div className={`container ${styles.newProductWrapper}`}>
          <div className={styles.newProdHeader}>
            <div className={styles.heading}>
                <h3>Newly Added Products</h3>
            </div>
            <div className={styles.newProdBtnGrp}>
              <button className={`${styles.actionBtns} ${styles.deleteBtn}`}>Delete</button>
              <button className={`${styles.actionBtns} ${styles.publishBtn}`}>Publish</button>
            </div>
          </div>
          <div className="row">
            {newProductList.map((product, index) => (
              <ProductCard product={product} index={index} isAdminPage={true} />
            ))}
          </div>
        </div>
      }
    </>
  )
}

export default ControlledFormComponent