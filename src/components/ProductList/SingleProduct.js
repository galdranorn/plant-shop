import React from 'react';
import { NavLink } from 'react-router-dom';
import './ProductList.scss';

export const Product = (props) => (
    <NavLink
        exact to={"/product/" + props.id}
        index={props.index}
        className="productList__product col-5">

        <p className="productList__product--info">{props.additionalInfo}</p>
        <img className="productList__product--photo" src={props.imgSrc} alt="product" />
        <p className="productList__product--name">{props.name}</p>
        <p className="productList__product--price">${props.price}</p>

    </NavLink>
);
