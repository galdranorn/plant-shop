import React from 'react';
import CartActive from './CartActive';
import CartSummary from './CartSummary';

export default class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = { "summary": false }
    }

    initSummary() {
        this.setState({ "summary": true })
    }

    render() {
        if (this.state.summary === false) {
            return (
                <div className="cart container">
                    <CartActive />

                    <div className="cart__active--pay row">
                        <div className="col-sm-12 col-md-12 col-lg-8"></div>
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <button className="cart__active--functionalities-pay" onClick={() => { this.initSummary() }}>Pay and finish order</button>
                        </div>
                    </div>
                    
                </div>
            )
        }
        else if (this.state.summary === true) {
            return <CartSummary />
        }
    }
}