import React from 'react';
import './Product.scss';
import products from '../ProductList/products';

export class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = products;
    console.log(this.props);
  }

  render() {
    return (
      <div className="productPage container">
        <div className="row">
          <div className="productPage--image col-4">
            <p className="productPage--image-info">
              {this.state.products[this.props.match.params.id].additionalInfo}
            </p>
            <img 
              className="productPage--image-photo" 
              src={this.state.products[this.props.match.params.id].imgSrc} 
              alt="plant" 
            />
          </div>

          <div className="productPage--description col-7">
            <p className="productPage--description-name">
              {this.state.products[this.props.match.params.id].name}
            </p>
            <p className="productPage--description-price">
              ${this.state.products[this.props.match.params.id].price}
            </p>
            <p>
            {this.state.products[this.props.match.params.id].text}
            </p>
            <button className="productPage--description-button">Buy me!</button>
          </div>
        </div>
      </div>
    );
  }
};
