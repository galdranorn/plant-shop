import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Product.scss';
import { addToCart } from '../../actions/actions-product';


export class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount(){
    this.props.products.map((product, i) => {
      if (product.id == this.props.match.params.id) {
        this.setState({id: (product.id-1)});
      }
    })
  }

  render() {
    return (
      <div className="productPage container">
        <div className="row">
          <div className="productPage__image col-sm-12 col-md-4 col-lg-4">
            <p className="productPage__image--info">
              {this.props.products[this.state.id].additionalInfo}
            </p>
            <img 
              className="productPage__image--photo" 
              src={this.props.products[this.state.id].imgSrc} 
              alt="plant" 
            />
          </div>

          <div className="productPage__description col-sm-12 col-md-8 col-lg-8">
            <p className="productPage__description--name">
              {this.props.products[this.state.id].name}
            </p>
            <p className="productPage__description--price">
              ${this.props.products[this.state.id].price}
            </p>
            <p>
            {this.props.products[this.state.id].text}
            </p>
            <button 
              className="productPage__description--button" 
              onClick={() => this.props.addToCart(this.props.products[this.state.id])}
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
      {addToCart: addToCart}, dispatch
  )
}


export default connect(mapStateToProps, matchDispatchToProps)(Product);