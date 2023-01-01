import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import Subtotal from "./Subtotal"
import { useStateValue } from './StateProvider';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad'
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Shopping_Feb22/1500x250PCbanneFeb22.jpg"
                    alt=""
                />
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className='checkout__title'>Your shopping Basket</h2>
                    {
                        basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                price={item.price}
                                image={item.image}
                                title={item.title}
                                rating={item.rating}
                            />
                        ))
                    }
                </div>
            </div>
            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout