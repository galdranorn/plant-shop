import React from 'react';
import { ProductList } from '../ProductList/ProductList';
import './Home.scss';

export class Home extends React.Component {
    render() {
        return (
            <div className='home'>
                <div className='home--sorting col-3'>
                    <p className='home--sorting-header'>
                        Sort by
                    </p>
                    <ul className='home--sorting-list'>
                        <li className='home--sorting-list-element'>Product name: A-Z</li>
                        <li className='home--sorting-list-element'>Product name: Z-A</li>
                        <li className='home--sorting-list-element'>Price: low to high</li>
                        <li className='home--sorting-list-element'>Price: high to low</li>
                    </ul>
                </div>
                <ProductList />
            </div>
        )
    }
}