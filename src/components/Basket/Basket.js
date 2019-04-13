import React from 'react';
import './Basket.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { clickProduct, addQty, removeQty } from '../../actions/actions-basket';

export class Basket extends React.Component {

    createListProducts() {
        return this.props.basket.added.map((product) => {
            return (
                <div className="row basket__product" key={product.id} onClick={() => this.props.clickProduct(product)}>
                    
                    <div className="basket__product--photo col-2">
                        <img className="basket__product--photo-img" src={product.imgSrc} alt="plant" />
                    </div>

                    <div className="basket__product--description col-6">
                        <h2 className="basket__product--description-name">{product.name}</h2>
                        <p className="basket__product--description-text">{product.text}</p>
                    </div>

                    <div className="basket__product--price col-2">
                        ${product.price*product.quantity}
                    </div>

                    <div className="basket__product--quantity col-2">
                        <button className="basket__product--quantity-button" onClick={() => this.props.addQty(product)}>
                            +
                        </button>
                        <p className="basket__product--quantity-value">
                            {product.quantity}
                        </p>
                        <button className="basket__product--quantity-button" onClick={() => this.props.removeQty(product)}>
                            -
                        </button>
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
                <div className="basket__discount row">
                    <div className="col-8"></div>
                    <div className="col-4">
                        <input className="basket__discount--input" placeholder="discount code"/>
                    </div>
                </div>
                <div className="basket__summary row">
                    <div className="col-8"></div>
                    <div className="basket__summary--cash col-4">
                        Sum to pay: {this.props.basket.summary} $
                    </div>
                </div>
                <div className="basket__pay row">
                    <div className="col-8"></div>
                    <div className="col-4">
                        <button className="basket__pay--button">Pay and finish order</button>
                    </div>
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