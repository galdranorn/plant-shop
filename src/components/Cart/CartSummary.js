import React from 'react';
import './Cart.scss';
import { connect } from 'react-redux';

export class CartSummary extends React.Component {

    createSummary() {
        return this.props.cart.added.map((product) => {
            return (
                <div className="row cart__summary--product" key={product.id}> 
                    <div className="cart__summary--product-name col-6">{product.name}</div>
                    <div className="cart__summary--product-price col-2">{product.quantity}pcs</div>
                    <div className="cart__summary--product-price col-2">${product.price}</div>
                    <div className="cart__summary--product-price col-2">${product.price*product.quantity}</div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="cart container">
                <h1 className="cart__name">Finish your order</h1>
                <div className="row cart__summary--line"> 
                    <div className="cart__summary--line-name col-6">Product name</div>
                    <div className="cart__summary--line-element col-2">Quantity</div>
                    <div className="cart__summary--line-element col-2">Unit price</div>
                    <div className="cart__summary--line-element col-2">Full price</div>
                </div>
                {this.createSummary()}
                <div className="row cart__summary--line"> 
                    <div className="cart__summary--line-element-name col-10">Sum to pay</div>
                    <div className="cart__summary--line-element-sum col-2">$ {this.props.cart.summary}</div>
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