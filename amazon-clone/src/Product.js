import React from "react";
import "./Product.css";
import image from './image.PNG'
const Product = () => {
	return (
		<div className="product">
			<div className="product__info">
				<p>title</p>
				<p className="product__price">
					<small>$</small>
					<strong>price</strong>
				</p>
				<div className="product__rating">
					<p>🌟</p>
				</div>
			</div>
			<img
				src={image}
				alt="image"
			/>
			<button>Add to Basket</button>
		</div>
	);
};

export default Product;
