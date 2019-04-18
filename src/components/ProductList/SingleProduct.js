import React from 'react';
import { NavLink } from 'react-router-dom';
import './ProductList.scss';

export const Product = (props) => (
    <NavLink
        exact to={"/product/" + props.id}
        index={props.index}
        className="productList__product col-sm-12 col-md-6 col-lg-6">
        <div className="productList__product--frame">
            <p className="productList__product--info">{props.additionalInfo}</p>
            <img className="productList__product--photo" src={props.imgSrc} alt="product" />
            <p className="productList__product--name">{props.name}</p>
            <p className="productList__product--price">${props.price.toFixed(2)}</p>
        </div>

    </NavLink>
);
