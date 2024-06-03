import React, { useState, useEffect, useRef } from 'react';
import uploadImg from "../../../assets/upload.png";
import newProdImg from "../../../assets/HANS Women Sweat Shirt.jpg";
import styles from "../ControlledFormComponent/ControlledFormComponent.module.css";
import { productCategories, sellers } from '../../../const';
import ProductCard from '../../ProductCard/ProductCard';

function UnControlledFormComponent() {
  const productNameRef =  useRef();
  const productPriceRef =  useRef();	
  const expDeliveryCheckRef = useRef();
  const selectedSellerRef = useRef();
  const selectedCategoryRef = useRef();
  const productDescriptionRef =  useRef();

  const [, setProductImg] = useState("");
  const [productImgName, setProductImgName] = useState("");
  const [newProductList, setNewProductList] = useState([]);
  productNameRef.focus();

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [newProductList])

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setProductImg(file);
    setProductImgName(file.name);
  };

  const resetForm = () => {
    productNameRef.current.value = "";
    productPriceRef.current.value = "";
    selectedCategoryRef.current.value = "";
    selectedSellerRef.current.value = "";
    expDeliveryCheckRef.current.checked = false;
    productDescriptionRef.current.value = "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted!");
    let formData = newProductList;
    const productDetailsObj = {
        id: 1,
        title: productNameRef.current.value,
        price: productPriceRef.current.value,
        instock: true,
        description: productDescriptionRef.current.value,
        category: selectedCategoryRef.current.value,
        image: newProdImg,
    };
    formData.push(productDetailsObj);
    setNewProductList([...formData]);
    resetForm();
  };

  return (
    <>
        <form onSubmit={handleSubmit} className={styles.productForm}>
            <div className={styles.heading}>
                <h3>Add Product</h3>
            </div>
            
            <div className={styles.fieldWrapper}>
                <label htmlFor="productName">Product Name</label>
                <input id="productName" ref={productNameRef} type="text" name="productName" />
            </div>

            <div className={styles.fieldWrapper}>
                <label htmlFor="productPrice">Product Price</label>
                <input ref={productPriceRef} type="text" name="productPrice" />
            </div>

            <div className={styles.fieldWrapper}>
                <label htmlFor="category">Product Category</label>
                <select ref={selectedCategoryRef} name="category" className={styles.dropdown}>
                    {productCategories.map((category) => 
                        <option key={category.value} value={category.name}>{category.name}</option>
                    )}
                </select>
            </div>

            <div className={styles.fieldWrapper}>
                <label htmlFor="seller">Select Seller</label>
                <select ref={selectedSellerRef} name="seller" className={styles.dropdown}>
                    {sellers.map((seller) => 
                        <option key={seller.name} value={seller.value}>{seller.name}</option>
                    )}
                </select>
            </div>

            <div className={`${styles.fieldWrapper} ${styles.checkBoxWrapper}`}>
                <label className={styles.checkboxLabel} htmlFor="expDelivery">Express Delivery Support</label>
                <input ref={expDeliveryCheckRef} type="checkbox" name="expDelivery" />
            </div>

            <div className={styles.fieldWrapper}>
                <label htmlFor="description">Product Description</label>
                <textarea ref={productDescriptionRef} name="description" />
            </div>

            <div className={styles.fileUpload}>
                <img src={uploadImg} className={styles.uploadImg} alt="upload" />
                <h4>{productImgName || "Upload product image"}</h4>
                <p>Maximun file size 10MB</p>
                <input type="file" onChange={handleFileChange} />
            </div>
            
            <div className={styles.submitBtnWrapper}>
                <button className={styles.submitBtn} type="submit">Submit</button>
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

export default UnControlledFormComponent