import React from 'react';
import './Cart.scss';
import { connect } from 'react-redux';

export class CartSummary extends React.Component {

    createSummary() {
        return this.props.cart.added.map((product) => {
            return (
                <div className="row cart__summary--product" key={product.id}> 
                    <div className="cart__summary--product-name col-xs-12 col-sm-3 col-md-6 col-lg-6">{product.name}</div>
                    <div className="cart__summary--product-price col-xs-12 col-sm-3 col-md-2 col-lg-2">{product.quantity}pcs</div>
                    <div className="cart__summary--product-price d-none d-sm-block col-xs-12 col-sm-3 col-md-2 col-lg-2">${product.price}</div>
                    <div className="cart__summary--product-price col-xs-12 col-sm-3 col-md-2 col-lg-2">${product.price*product.quantity}</div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="cart container">
                <h1 className="cart__name">Finish your order</h1>
                <div className="row cart__summary--line"> 
                    <div className="cart__summary--line-name col-xs-12 col-sm-3 col-md-6 col-lg-6">Product name</div>
                    <div className="cart__summary--line-element col-xs-12 col-sm-3 col-md-2 col-lg-2">Quantity</div>
                    <div className="cart__summary--line-element d-none d-sm-block col-xs-12 col-sm-3 col-md-2 col-lg-2">Unit price</div>
                    <div className="cart__summary--line-element col-xs-12 col-sm-3 col-md-2 col-lg-2">Full price</div>
                </div>
                {this.createSummary()}
                <div className="row cart__summary--line"> 
                    <div className="cart__summary--line-element-name col-xs-12 col-sm-6 col-md-10 col-lg-10">Sum to pay</div>
                    <div className="cart__summary--line-element-sum col-xs-12 col-sm-6 col-md-2 col-lg-2">$ {this.props.cart.summary}</div>
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

export default connect(mapStateToProps)(CartSummary);