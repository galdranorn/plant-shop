export const addToBasket = (product) => {
    return {
        type: "ADD_TO_BASKET",
        payload: product
    }
};