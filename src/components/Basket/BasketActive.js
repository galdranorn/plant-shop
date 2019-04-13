import React from 'react';
import './Basket.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addQty, removeQty } from '../../actions/actions-basket';

export class BasketActive extends React.Component {

    createListProducts() {
        return this.props.basket.added.map((product) => {
            return (
                <div className="row basket__active--product" key={product.id}>
                    <div className="basket__active--product-photo col-2">
                        <img className="basket__active--product-photo-img" src={product.imgSrc} alt="plant" />
                    </div>
                    <div className="basket__active--product-description col-6">
                        <h2 className="basket__active--product-description-name">{product.name}</h2>
                        <p className="basket__active--product-description-text">{product.text}</p>
                    </div>
                    <div className="basket__active--product-price col-2">${product.price * product.quantity}</div>
                    <div className="basket__active--product-quantity col-2">
                        <button className="basket__active--product-quantity-button" onClick={() => this.props.addQty(product)}>+</button>
                        <p className="basket__active--product-quantity-value">{product.quantity}</p>
                        <button className="basket__active--product-quantity-button" onClick={() => this.props.removeQty(product)}>-</button>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <h1 className="basket__name">Basket</h1>

                {this.createListProducts()}
                        
                <div className="basket__active--discount row">
                    <div className="col-8"></div>
                    <div className="col-4"><input className="basket__active--functionalities-discount-input" placeholder="discount code" /></div>
                </div>
                <div className="basket__active--sum row">
                    <div className="col-8"></div>
                    <div className="basket__active--sum-cash col-4">Sum to pay: {this.props.basket.summary} $</div>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        basket: state.basket
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

export default connect(mapStateToProps, matchDispatchToProps)(BasketActive);