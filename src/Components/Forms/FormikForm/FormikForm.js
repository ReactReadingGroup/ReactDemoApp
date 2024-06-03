import React, {useState, useEffect} from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import uploadImg from "../../../assets/upload.png";
import newProdImg from "../../../assets/HANS Women Sweat Shirt.jpg";
import styles from "../ControlledFormComponent/ControlledFormComponent.module.css";
import { productCategories, sellers } from '../../../const';
import ProductCard from '../../ProductCard/ProductCard';

function FormikForm() {
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
  const [, setProductImg] = useState("");
  const [productImgName, setProductImgName] = useState("");
  const [newProductList, setNewProductList] = useState([]);

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [newProductList]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setProductImg(file);
    setProductImgName(file.name);
  };

  // const validateForm = (values) => {
  //   console.log("Form Values", values)
  //   const errors = {};
  //   if (!values.title) {
  //     errors.title = "Product name is required.";
  //   } else if (values.title.length < 15) {
  //     errors.title = "Product name must be minimum 15 characters or more.";
  //   }

  //   if (!values.price) {
  //     errors.price = 'Price of the product is required';
  //   } else if (!/^\d+(\.\d{1,2})?$/.test(values.price)) {
  //     errors.price = 'Please enter a valid price';
  //   }

  //   if (!values.category) {
  //     errors.category = 'Please select a category for the product';
  //   }

  //   if (!values.seller) {
  //     errors.seller = 'Please select a seller for the product';
  //   }

  //   return errors;
  // }

  const NewProductSchema = Yup.object({
    title: Yup.string()
      .min(15, 'Product name is too short')
      .required('Product name is required'),
    price: Yup.string()
      .matches(/^\d+(\.\d{1,2})?$/, 'Please enter a valid price')
      .required('Price of the product is required'),
    category: Yup.string().required('Please select a category for the product'),
    seller: Yup.string().required('Please select a seller for the product'),
  });
  
  return (
    <>
      <Formik 
        initialValues={initialFormValue} 
        // validate={validateForm} 
        validationSchema={NewProductSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form submitted");
          let formData = newProductList;
          formData.push(values);
          setNewProductList([...formData]);
          resetForm();
        }}
      >
        {formik => (
          <form onSubmit={formik.handleSubmit} className={styles.productForm}>
            <div className={styles.heading}>
              <h3>Add Product</h3>
            </div>
            <div className={styles.fieldWrapper}>
              <label htmlFor="title">Product Name*</label>
              <input id="title" name="title" type="text" {...formik.getFieldProps('title')} />
              {formik.touched.title && formik.errors.title ? (
                <div className={styles.error}>{formik.errors.title}</div>
              ) : null}
            </div>

            <div className={styles.fieldWrapper}>
              <label htmlFor="price">Product Price*</label>
              <input id="price" name="price" type="text" value={formik.values.price} onChange={formik.handleChange} {...formik.getFieldProps('price')} />
              {formik.touched.price && formik.errors.price ? (
                <div className={styles.error}>{formik.errors.price}</div>
              ) : null}
            </div>

            <div className={styles.fieldWrapper}>
              <label htmlFor="category">Product Category*</label>
              <select id="category" name="category" className={styles.dropdown} {...formik.getFieldProps('category')}>
                  {productCategories.map((category) => 
                    <option key={category.value} value={category.name}>{category.name}</option>
                  )}
              </select>
              {formik.touched.category && formik.errors.category ? (
                <div className={styles.error}>{formik.errors.category}</div>
              ) : null}
            </div>

            <div className={styles.fieldWrapper}>
              <label htmlFor="seller">Select Seller*</label>
              <select id="seller" name="seller" className={styles.dropdown} {...formik.getFieldProps('seller')}>
                {sellers.map((seller) => 
                  <option key={seller.name} value={seller.value}>{seller.name}</option>
                )}
              </select>
              {formik.touched.seller && formik.errors.seller ? (
                <div className={styles.error}>{formik.errors.seller}</div>
              ) : null}
            </div>

            <div className={`${styles.fieldWrapper} ${styles.checkBoxWrapper}`}>
              <label className={styles.checkboxLabel} htmlFor="expressDelivery">Express Delivery Support</label>
              <input type="checkbox" id="expressDelivery" name="expressDelivery" {...formik.getFieldProps('expressDelivery')} />
            </div>

            <div className={styles.fieldWrapper}>
              <label htmlFor="description">Product Description</label>
              <textarea name="description" id="description" {...formik.getFieldProps('description')} />
            </div>

            <div className={styles.fileUpload}>
              <img src={uploadImg} className={styles.uploadImg} alt="upload" />
              <h4>{productImgName || "Upload product image"}</h4>
              <p>Maximun file size 10MB</p>
              <input type="file" onChange={handleFileChange} />
            </div>

            <div className={styles.submitBtnWrapper}>
              <button type="submit" className={styles.submitBtn} disabled={!(formik.isValid && formik.dirty)}>Submit</button>
            </div>
          </form>
        )}
      </Formik>

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

export default FormikForm