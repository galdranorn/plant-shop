import React from 'react';
import { ProductList } from '../ProductList/ProductList';
import './Home.scss';
import { sortBy } from './sorting';
import products from '../ProductList/products';

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = products;
    }

    sortBy(event) {
        this.setState(products.products.sort(sortBy(event.target.dataset.prop, event.target.dataset.order)));
    }

    render() {
        return (
            <div className='home'>
                <div className='home--sorting col-3'>
                    <p className='home--sorting-header'>
                        Sort by
                    </p>
                    <ul className='home--sorting-list'>
                        <li className='home--sorting-list-element' data-prop='name' data-order='asc' onClick={event => this.sortBy(event)}>Product name: A-Z</li>
                        <li className='home--sorting-list-element' data-prop='name' data-order='desc' onClick={event => this.sortBy(event)}>Product name: Z-A</li>
                        <li className='home--sorting-list-element' data-prop='price' data-order='asc' onClick={event => this.sortBy(event)}>Price: low to high</li>
                        <li className='home--sorting-list-element' data-prop='price' data-order='desc' onClick={event => this.sortBy(event)}>Price: high to low</li>
                    </ul>
                </div>
                <ProductList sorted={this.state}/>
            </div>
        )
    }
}