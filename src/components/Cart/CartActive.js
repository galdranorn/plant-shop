import React from 'react';
import './Cart.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addQty, removeQty } from '../../actions/actions-cart';

export class CartActive extends React.Component {

    createListProducts() {
        return this.props.cart.added.map((product) => {
            return (
                <div className="row cart__active--product" key={product.id}>
                    <div className="cart__active--product-photo col-2">
                        <img className="cart__active--product-photo-img" src={product.imgSrc} alt="plant" />
                    </div>
                    <div className="cart__active--product-description col-6">
                        <h2 className="cart__active--product-description-name">{product.name}</h2>
                        <p className="cart__active--product-description-text">{product.text}</p>
                    </div>
                    <div className="cart__active--product-price col-2">${product.price * product.quantity}</div>
                    <div className="cart__active--product-quantity col-2">
                        <button className="cart__active--product-quantity-button" onClick={() => this.props.addQty(product)}>+</button>
                        <p className="cart__active--product-quantity-value">{product.quantity}</p>
                        <button className="cart__active--product-quantity-button" onClick={() => this.props.removeQty(product)}>-</button>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <h1 className="cart__name">Cart</h1>

                {this.createListProducts()}
                        
                <div className="cart__active--discount row">
                    <div className="col-8"></div>
                    <div className="col-4"><input className="cart__active--functionalities-discount-input" placeholder="discount code" /></div>
                </div>
                <div className="cart__active--sum row">
                    <div className="col-8"></div>
                    <div className="cart__active--sum-cash col-4">Sum to pay: {this.props.cart.summary} $</div>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            addQty,
            removeQty
        }, dispatch
    )
}

export default connect(mapStateToProps, matchDispatchToProps)(CartActive);