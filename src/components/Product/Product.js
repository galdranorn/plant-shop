import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Product.scss';
import { addToBasket } from '../../actions/actions-product';


export class Product extends React.Component {
  render() {
    return (
      <div className="productPage container">
        <div className="row">
          <div className="productPage--image col-4">
            <p className="productPage--image-info">
              {this.props.products[this.props.match.params.id].additionalInfo}
            </p>
            <img 
              className="productPage--image-photo" 
              src={this.props.products[this.props.match.params.id].imgSrc} 
              alt="plant" 
            />
          </div>

          <div className="productPage--description col-7">
            <p className="productPage--description-name">
              {this.props.products[this.props.match.params.id].name}
            </p>
            <p className="productPage--description-price">
              ${this.props.products[this.props.match.params.id].price}
            </p>
            <p>
            {this.props.products[this.props.match.params.id].text}
            </p>
            <button 
              className="productPage--description-button" 
              onClick={() => this.props.addToBasket(this.props.products[this.props.match.params.id])}
            >
              Buy me!
            </button>
          </div>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
      products: state.products
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
      {addToBasket: addToBasket}, dispatch
  )
}


export default connect(mapStateToProps, matchDispatchToProps)(Product);