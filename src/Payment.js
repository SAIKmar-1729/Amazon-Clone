import React from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { Link } from "react-router-dom";
function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>Checkout (<Link to='/checkout'>{basket?.length} items</Link>)</h1>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>jdnjfgjf.d,gjfkgfng</p>
                        <p>jdjkfhgjltkjg.to</p>
                    </div>

                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {
                            basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    price={item.price}
                                    image={item.image}
                                    title={item.title}
                                    rating={item.rating}
                                />
                            ))}
                    </div>

                </div>
                <div className='payment__section'>
                    <div className='payment__section'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Payment