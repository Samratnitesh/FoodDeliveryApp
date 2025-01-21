import React, { useState } from 'react'
import { ItemCard } from './ItemCard.js';

export const ResInfoCard = ({data}) => {
  
  const {title, itemCards} = data;
  console.log(title);

  const [hide, setHide] = useState(false);

  const handleClick = () => (
    setHide(!hide)
  );

  return (
    <div className='flex w-full m-4 flex-col'>
      {/* {Here i have my accordion header} */}
      <div className=' border bg-gray-200 w-full mx-auto rounded-lg p-4 py-8 cursor-pointer'>
        <div className='flex justify-between text-2xl' onClick={handleClick}>
          <h2 className='font-bold '>{title}{" "}({itemCards.length})</h2>
          {hide == true ? <h2 className='font-bold'>⋀</h2> : <h2 className='font-bold'>⋁</h2>}
        </div>
        {/* {Here comes the accordian data} */}
        {
        hide == true ? <ItemCard menu = {itemCards}/> : <></>
        }
      </div>
    </div>
  )
}
