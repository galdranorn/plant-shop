import React from 'react';
import { connect } from 'react-redux';
import { ProductList } from '../ProductList/ProductList';
import { sortBy } from './sorting';
import './Home.scss';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    sortBy(event) {
        this.setState({
            "products": this.props.products.concat().sort(sortBy(event.target.dataset.prop, event.target.dataset.order))
        });
    }

    render() {
        return (
            <div className='home row'>
                <div className='home__sorting col-sm-12 col-md-4 col-lg-3'>
                    <p className='home__sorting--header'>Sort by</p>
                    <ul className='home__sorting--list row'>
                        <li 
                            className='home__sorting--list-element col-sm-6 col-md-12 col-lg-12' 
                            data-prop='name' 
                            data-order='asc' 
                            onClick={event => this.sortBy(event)}>
                            Product name: A-Z
                        </li>
                        <li 
                            className='home__sorting--list-element col-sm-6 col-md-12 col-lg-12' 
                            data-prop='name' 
                            data-order='desc' 
                            onClick={event => this.sortBy(event)}>
                            Product name: Z-A
                        </li>
                        <li 
                            className='home__sorting--list-element col-sm-6 col-md-12 col-lg-12' 
                            data-prop='price' 
                            data-order='asc' 
                            onClick={event => this.sortBy(event)}>
                            Price: low to high
                        </li>
                        <li 
                            className='home__sorting--list-element col-sm-6 col-md-12 col-lg-12' 
                            data-prop='price' 
                            data-order='desc' 
                            onClick={event => this.sortBy(event)}>
                            Price: high to low
                        </li>
                    </ul>
                </div>
                <ProductList sorted={this.state.products || this.props.products}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Home);