import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ItemCard } from './ItemCard';
import { clearCart } from '../utils/cartSlice';

export const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleClearBtn = () => {
    dispatch(clearCart());
  }
  return (
    <div className='flex justify-center my-4'>
        <div className='flex flex-col w-8/12 items-center justify-items-center'>
            <h2 className='font-bold my-4 text-2xl'>Cart</h2>
            <ItemCard menu = {cartItems} />
            {
                cartItems.length == 0 ? "" : <button className='font-bold text-2xl border border-black rounded-md px-4 py-1
                bg-red-600 text-white hover:bg-red-800'
                onClick={handleClearBtn}
                >Clear Cart</button>
            }
            
        </div>
    </div>
  )
}
