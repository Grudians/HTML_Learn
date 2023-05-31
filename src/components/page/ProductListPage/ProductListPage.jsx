import './ProductListPage.scss';
import { productList } from '../../../utils/data';
import ProductCard from '../../ProductCard/ProductCard';
import { useState } from 'react';
import Button from '../../Button/Button';
import { Link } from 'react-router-dom';






export default function ProductListPage() {
    const [cart, setCart] = useState([]);

    const cartTotalPrice = cart.reduce((totalPrice, product) => totalPrice + product.price, 0);


    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product])

    }

    return (


        <div>
            <header className='header'>
                <h1 className='header__title'>наша продукция</h1>
                <div className='header__cart-block'>
                    <span>
                        {cart.length} товаров <br />
                        на сумму {cartTotalPrice} ₽
                    </span>
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="25" cy="25" r="25" fill="#D58C51" />
                        <g clipPath="url(#clip0_884_11)">
                            <path d="M34.0746 23.2042H30.1774L27.379 15.239C27.2096 14.7568 26.6815 14.5032 
                       26.1992 14.6727C25.717 14.842 25.4635 15.3703 25.6329 15.8525L28.2157 
                       23.2041H20.7843L23.3671 15.8525C23.5365 15.3703 23.283 14.842 22.8008 
                       14.6727C22.3187 14.5032 21.7904 14.7568 21.621 15.239L18.8226 
                       23.2042H14.9254C14.4143 23.2042 14 23.6184 14 24.1296C14 24.6406 
                       14.4143 25.0549 14.9254 25.0549H15.1789L17.4465 33.3309C17.6163 33.9505 
                       18.1793 34.38 18.8217 34.38H30.2413C30.8871 34.38 31.4522 33.946 31.6189 
                       33.3221L33.8274 25.0549H34.0746C34.5857 25.0549 35 24.6406 35 24.1296C35 
                       23.6185 34.5857 23.2042 34.0746 23.2042ZM21.4678 31.3549C21.4678 31.866 
                       21.0535 32.2803 20.5425 32.2803C20.0314 32.2803 19.6171 31.866 19.6171 
                       31.3549V26.6562C19.6171 26.1451 20.0314 25.7308 20.5425 25.7308C21.0535 
                       25.7308 21.4678 26.1451 21.4678 26.6562V31.3549ZM25.4254 31.3549C25.4254 31.866 
                       25.011 32.2803 24.5 32.2803C23.9889 32.2803 23.5746 31.866 23.5746 31.3549V26.6562C23.5746 
                       26.1451 23.9889 25.7308 24.5 25.7308C25.011 25.7308 25.4254 26.1451 25.4254 
                       26.6562V31.3549ZM29.3829 31.3549C29.3829 31.866 28.9686 32.2803 28.4575 
                       32.2803C27.9464 32.2803 27.5321 31.866 27.5321 31.3549V26.6562C27.5321 26.1451 
                       27.9464 25.7308 28.4575 25.7308C28.9686 25.7308 29.3829 26.1451 29.3829 26.6562V31.3549Z"
                                fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_884_11">
                                <rect width="21" height="21" fill="white" transform="translate(14 14)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>

                <div className='btnExit'>
                    <Link to={'/signIn'}>
                        <Button outline>Выйти</Button>
                    </Link>
                </div>
            </header>
            <main className='product-list-wrap'>
                {productList.map((product) => (
                    <div key={product.id} className='product-list-item'>
                        <ProductCard
                            id={product.id}
                            tittle={product.title}
                            text={product.text}
                            image={product.image}
                            price={product.price}
                            weight={product.weight}
                            amount={product.amount}
                            onButtonClick={() => addToCart(product)}
                        />
                    </div>
                ))}
            </main>
        </div>)
}
