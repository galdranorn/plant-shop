import { combineReducers } from 'redux';
import CartReducer from './reducers-cart';
import ProductsReducer from './reducers-products';

const reducer = combineReducers({
    products: ProductsReducer, // data about products
    cart: CartReducer, // cart functionalities
});

export default reducer;