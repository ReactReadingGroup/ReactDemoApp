export const productCategories = [
    {
        name: "Electronics",
        value: "electronics"
    },
    {
        name: "Skincare",
        value: "skincare"
    },
    {
        name: "Baby Products",
        value: "baby-products"
    },
    {
        name: "Apparels",
        value: "apparels"
    },
    {
        name: "Fitness",
        value: "fitness"
    },
    {
        name: "Footwear",
        value: "footwear"
    },
    {
        name: "Winter Wear",
        value: "winter-wear"
    },
    {
        name: "Accessories",
        value: "accessories"
    },
];

export const sellers = [
    {
        name: "Cocoblu Retail",
        value: "cocoblu-retail"
    },
    {
        name: "RK World Infocom Pvt Ltd",
        value: "rk-world-infocom"
    },
    {
        name: "RetailEZ Pvt Ltd",
        value: "retailEZ"
    },
    {
        name: "Appario Retail Private Ltd",
        value: "appario-retail"
    },
    {
        name: "ETrade Online",
        value: "etrade-online"
    },
    {
        name: "Allen Solly Men",
        value: "allen-solly-men"
    },
    {
        name: "Popsugar Off Roader",
        value: "popsugar-off-roader"
    },
    {
        name: "Wembley RC",
        value: "wembley-rc"
    },
    {
        name: "Storio Toys",
        value: "storio-toys"
    },
    {
        name: "Cetaphil SkinCare",
        value: "cetaphil-skin-care"
    }
];

export const validationRules = {
    title: {
      emptyError: "Product name is required",
      lengthError: "Product name is too short",
      minLength: 15
    },
    price: {
      emptyError: "Price of the product is required",
      regex: /^\d+(\.\d{1,2})?$/,
      invalidError: "Please enter a valid price"
    },
    category: {
      emptyError: "Please select a category for the product"
    },
    seller: {
      emptyError: "Please select a seller for the product"
    }
};