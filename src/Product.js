import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
const Product = ({ id, title, price, image, rating }) => {
    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        });
    }
	return (
		<div className="product">
			<div className="product__info">
                {/* <p>title</p> */}
				<p>{title}</p>
				<p className="product__price">
					<small>$</small>
                    {/* <strong>price</strong> */}
					<strong>{price}</strong>
				</p>
                <div className="product__rating">
                    {/* <p>🌟</p> */}
                    {Array(rating)
                        .fill()
                        .map(()=>(<p>🌟</p>))
                    }                    
				</div>
			</div>
			<img
            // src="https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C91Etdp5vzbL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX679_.png" alt="image" /> */}
				src={image}
				alt="image"
			/>
			<button id="add_to_basket" onClick={addToBasket}>Add to Basket</button>
		</div>
	);
};

export default Product;
