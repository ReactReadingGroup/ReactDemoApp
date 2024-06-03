import { validationRules } from "./const";

export const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) {
      return description;
    }
    return description.substring(0, maxLength) + "...";
}

// Validation function
export const validateForm = (fieldName, fieldValue) => {
  let errors = {};
  const rules = validationRules.hasOwnProperty(fieldName) ? validationRules[fieldName] : null;
  if (!rules) return; // If no validation rules found, exit

  if (!fieldValue.length) {
    errors[fieldName] = rules.emptyError;
  } else if (rules.minLength && fieldValue.length < rules.minLength) {
    errors[fieldName] = rules.lengthError;
  } else if (rules.regex && !rules.regex.test(fieldValue)) {
    errors[fieldName] = rules.invalidError;
  } else {
    delete errors[fieldName];
    return;
  }

  return errors;
}

// export const validateForm = (fieldName, fieldValue) => {
//   let errors = {};
//   const priceRegex = /^\d+(\.\d{1,2})?$/;

//   if (fieldName === "title") {
//     if (!fieldValue.length) {
//       errors.title = "Product name is required";
//     } else if (fieldValue.length < 15) {
//       errors.title = "Product name is too short";
//     } else {
//       delete errors.title;
//     }
//   } else if (fieldName === "price") {
//     if (!fieldValue.length) {
//       errors.price = "Price of the product is required";
//     } else if (!priceRegex.test(parseInt(fieldValue, 10))) {
//       errors.price = "Please enter a valid price";
//     } else {
//       delete errors.price;
//     }
//   } else if (fieldName === "category") {
//     if (!fieldValue.length) {
//       errors.category = "Please select a category for the product";
//     } else {
//       delete errors.category;
//     }
//   } else if (fieldName === "seller") {
//     if (!fieldValue.length) {
//       errors.seller = "Please select a seller for the product";
//     } else {
//       delete errors.seller;
//     }
//   }
//   return errors;
// };