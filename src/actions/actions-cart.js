export const addDiscount = (value, code) => {
    return {
        type: "ADD_DISCOUNT",
        payload: { 
            value,
            code
        }
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