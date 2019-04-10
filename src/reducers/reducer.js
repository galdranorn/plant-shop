import { combineReducers } from 'redux';
import BasketReducer from './reducers-basket';
import ProductsReducer from './reducers-products';

const reducer = combineReducers({
    products: ProductsReducer, // data about products
    basket: BasketReducer, // basket functionalities
});

export default reducer;