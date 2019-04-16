import React from 'react';
import { Product } from './SingleProduct';
import './ProductList.scss';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        products: this.props.products,
        currentPage: 0,
        currentProducts: [0, 6]
    };
    this.elements = this.props.sorted.length;
    this.pageSize = 6;
    this.pagesCount = Math.ceil(this.elements / this.pageSize);
  }

  handleClick(e, index) {
    e.preventDefault();
    this.setState({
      currentPage: index,
      currentProducts: [index*this.pageSize, (index+1)*this.pageSize]
    });
  }

  render() {
        const { currentPage } = this.state;
        return (
            <div className="productList col-sm-12 col-md-8 col-lg-9">
                <div className="productList__pagination row">
                    <Pagination aria-label="Page navigation example">
                        {[...Array(this.pagesCount)].map((page, i) => 
                            <PaginationItem active={i === currentPage} key={i}>
                                <PaginationLink onClick={e => this.handleClick(e, i)} href="#">
                                    {i + 1}
                                </PaginationLink>
                            </PaginationItem>
                        )}
                    </Pagination>
                </div>
                <div className="productList__products row">
                    {
                        (this.props.sorted.slice(this.state.currentProducts[0], this.state.currentProducts[1])).map((product, i) => {
                            return (
                            <Product
                                id={product.id}
                                key={i}
                                //index={this.state.currentPage*this.pageSize+i}
                                name={product.name}
                                price={product.price}
                                text={product.text}
                                showText={false}
                                additionalInfo={product.additionalInfo}
                                imgSrc={product.imgSrc}
                                sorted={this.props.sorted}
                            />
                        )
                    }
                        )
                    }
                </div>
            </div>
        );
    };
}