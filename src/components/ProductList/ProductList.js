import React from 'react';
import { Product } from './SingleProduct';
import './ProductList.scss';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        currentPage: 0,
        currentProducts: [0, 5]
    };
    this.elements = this.props.sorted.products.length;
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
            <div className="productList col-9">
                <Pagination aria-label="Page navigation example">
                    {[...Array(this.pagesCount)].map((page, i) => 
                        <PaginationItem active={i === currentPage} key={i}>
                            <PaginationLink onClick={e => this.handleClick(e, i)} href="#">
                                {i + 1}
                            </PaginationLink>
                        </PaginationItem>
                    )}
                </Pagination>
                    {
                        (this.props.sorted.products.slice(this.state.currentProducts[0], this.state.currentProducts[1])).map((product, i) => (
                            <Product
                                key={i}
                                index={i}
                                name={product.name}
                                price={product.price}
                                text={product.text}
                                showText={false}
                                additionalInfo={product.additionalInfo}
                                imgSrc={product.imgSrc}
                            />
                        )
                        )
                    }
            </div>
        );
    };
}
