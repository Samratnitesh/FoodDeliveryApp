import React, { useEffect, useState } from 'react'
import { ResInfoCard } from './ResInfoCard';
import { useParams } from 'react-router';
import useRestaurantMenu from '../utils/useRestaurantMenu';

export const RestaurantMenu = () => {

    const {resId} = useParams();

    const [resMenuList, resDetails] = useRestaurantMenu(resId);

    console.log(resMenuList);

    const category = resMenuList?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    console.log("Here is your category list ",category);

  return (
   
    <div className='flex flex-col justify-center items-center my-5 mx-2'>
        <h1 className='items-center font-bold my-4 text-3xl font-serif'>Restaurant Details</h1>
        <div className='border border-black w-full rounded-md p-4 mb-4 shadow-lg'>
            <div className='flex flex-col justify-center items-center font-mono'> 
                <h1 className='font-bold text-2xl font-mono'>{resDetails?.name}</h1>
                <h2>Rating: ⭐ {resDetails?.avgRating}</h2>
                <h2>{resDetails?.costForTwoMessage}</h2>
                <h2>Location: {resDetails?.locality}</h2>
            </div>
        </div>
        <h1 className='font-bold text-3xl font-serif mb-4 my-5'>Menu</h1>
        {
            resMenuList?.map((res) => {
                const cat = res?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
                if(cat == true) {
                    return <ResInfoCard data = {res?.card?.card} />
                }
            }) 
        }
    </div>
  )
}
