import React from 'react';
import './Basket.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { clickProduct, addQty, removeQty } from '../../actions/actions-basket';

export class Basket extends React.Component {

    createListProducts() {
        return this.props.basket.added.map((product) => {
            return (
                <div className="row basket--product" key={product.id} onClick={() => this.props.clickProduct(product)}>
                    
                    <div className="basket--product-photo col-2">
                        <img src={product.imgSrc} alt="plant" />
                    </div>

                    <div className="basket--product-description col-6">
                        <h2 className="basket--product-description-name">{product.name}</h2>
                        <p className="basket--product-description-text">{product.text}</p>
                    </div>

                    <div className="basket--product-price col-2">${product.price*product.quantity}</div>

                    <div className="basket--product-quantity col-2">
                        <button onClick={() => this.props.addQty(product)}>+</button>
                        <p>{product.quantity}</p>
                        <button onClick={() => this.props.removeQty(product)}>-</button>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="basket container">
                <h1 className="basket--name">Basket</h1>
                {this.createListProducts()}
                <div className="basket--discount row">
                    <div className="col-8"></div>
                    <div className="col-4"><input className="basket--discount-input" placeholder="discount code"/></div>
                </div>
                <div className="basket--summary row">
                    <div className="col-8"></div>
                    <div className="col-4">Sum to pay: {this.props.basket.summary} $</div>
                </div>
                <div className="basket--pay row">
                    <div className="col-8"></div>
                    <div className="col-4"><button>Pay and finish order</button></div>
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
        {clickProduct,
        addQty,
        removeQty}, dispatch
    )
}

export default connect(mapStateToProps, matchDispatchToProps)(Basket);