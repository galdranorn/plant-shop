import React from 'react';
import './Cart.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addDiscount, addQty, removeQty, removeProduct } from '../../actions/actions-cart';

export class CartActive extends React.Component {

    createListProducts() {
        return this.props.cart.added.map((product) => {
            return (
                <div className="row cart__active--product row" key={product.id}>
                    <div className="cart__active--product-photo col-sm-12 col-md-4 col-lg-2">
                        <img className="cart__active--product-photo-img" src={product.imgSrc} alt="plant" />
                    </div>
                    <div className="cart__active--product-description col-sm-12 col-md-8 col-lg-6">
                        <h2 className="cart__active--product-description-name">{product.name}</h2>
                        <p className="cart__active--product-description-text">{product.text}</p>
                    </div>
                    <div className="cart__active--product-price col-sm-6 col-md-4 col-lg-2">
                        ${product.price * product.quantity}
                    </div>
                    <div className="cart__active--product-quantity col-sm-6 col-md-8 col-lg-2">
                        <button className="cart__active--product-quantity-button" onClick={() => this.props.addQty(product)}>+</button>
                        {/* here should be an input but did not manage to do this before deadline :-) */}
                        <p className="cart__active--product-quantity-value">{product.quantity}</p>
                        <button className="cart__active--product-quantity-button" onClick={() => this.props.removeQty(product)}>-</button>
                        <p className="cart__active--product-delete" onClick={() => this.props.removeProduct(product)}>Delete product</p>
                    </div>
                </div>
            );
        });
    }

    acceptDiscountCode = (event) => {
        if (event.target.value === "spring2019") { 
            this.props.addDiscount(0.8, event.target.value);
        }
        else if (event.target.value === "monstera") {
            this.props.addDiscount(0.9, event.target.value)
        }
    }

    render() {
        return (
            <div>
                <h1 className="cart__name">Cart</h1>

                {this.createListProducts()}
                        
                <div className="cart__active--discount row">
                    <div className="col-sm-12 col-md-12 col-lg-8"></div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <input disabled={this.props.cart.discount} onChange={this.acceptDiscountCode} placeholder={this.props.cart.code} className="cart__active--discount-input" />
                    </div>
                </div>
                <div className="cart__active--sum row">
                    <div className="col-sm-12 col-md-12 col-lg-8"></div>
                    <div className="cart__active--sum-cash col-sm-12 col-md-12 col-lg-4">
                        <p> Sum to pay: <span className={this.props.cart.discount ? 'cart__active--sum-cash-green' : null }>{this.props.cart.summary} $</span></p>
                    </div>
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
            removeQty,
            addDiscount,
            removeProduct
        }, 
        dispatch
    )
}

export default connect(mapStateToProps, matchDispatchToProps)(CartActive);