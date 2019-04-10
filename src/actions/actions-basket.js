export const clickProduct = (product) => {
    console.log(product.name)
    return {
        type: "PRODUCT_CLICKED",
        payload: product
    }
};

export const addQty = (product) => {
    return {
        type: "ADD_QTY",
        payload: product
    }
};

export const removeQty = (product) => {
    return {
        type: "REMOVE_QTY",
        payload: product
    }
};