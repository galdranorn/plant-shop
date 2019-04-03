import React from 'react';
import { Product } from './SingleProduct';
import './ProductList.scss';
import products from './products';


export class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = products;
  }

  render() {
        return (
            <div className="productList col-9">
                {
                    this.state.products.map((product, i) => (
                        <Product
                            key={i}
                            index={i}
                            name={product.name}
                            price={product.price}
                            text={product.text}
                            showText={false}
                            additionalInfo={product.additionalInfo}
                            imgSrc={product.imgSrc}
                        />)
                    )
                }
            </div>
        );
    };
}
