import React from 'react';
import BasketActive from './BasketActive';
import BasketSummary from './BasketSummary';

export default class Basket extends React.Component {
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
                <div className="basket container">
                    <BasketActive />

                    <div className="basket__active--pay row">
                        <div className="col-8"></div>
                        <div className="col-4">
                            <button className="basket__active--functionalities-pay" onClick={() => { this.initSummary() }}>Pay and finish order</button>
                        </div>
                    </div>
                    
                </div>
            )
        }
        else if (this.state.summary === true) {
            return <BasketSummary />
        }
    }
}