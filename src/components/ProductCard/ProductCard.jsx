import { Link } from "react-router-dom";
import CircleButton from "../CircleButton/CircleButton";
import "./ProductCard.scss";
export default function ProductCard({
id,
image,
title,
text,
price,
weight,
amount,
onButtonClick,
}) {

return (


<div className='product-card'>
    <Link to ={`/product/${id}`}>
    <img className='product-card__img' src={image} alt='product-image' />
    </Link>
    <span className='product-card__title'>{title}</span>
    <span className='product-card__text'>{text}</span>
    <div className='product-card__price-block'>
        <span className='product-card__price'>{price} Р</span>
        <span>/</span>

        {Boolean(weight) ? (
        <span className="product-card__text">{weight} г.</span>
        ) : (
        <span className="product-card__text">{amount} шт.</span>
        )}

        <div className="product-card__btn">
            <CircleButton  onClick={onButtonClick}/>
        </div>
    </div>
    
</div>
);
}
