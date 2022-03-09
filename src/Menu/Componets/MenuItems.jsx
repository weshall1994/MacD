import { CurrencyRupeeIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'

function MenuItems(props) {
  const { item, totalItems, addToCart, RemoveFromCart } = props;

  return (
    <div className="grid">
      {item &&

        <div className="grid md:grid-cols-3 mb-5 border md:border-b md:border-r p-5 border-gray-200">
          <div className="col-span-2">
            <img alt="veg" className="dish-type margin-dish align-self-start" loading="lazy"
              src="https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/v1591261933/NewWebsiteResource2020/Assets/Img/Veg.svg">
            </img>
            <div className="mt-2 flex font-semibold items-center text-xl text-gray-900">
              {item.item_name}
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-700">
              <CurrencyRupeeIcon className="h-4 w-4" />&nbsp;
                  {item.price}
            </div>
            <div className="mt-2 flex text-sm text-gray-600">
              Tender and juicy chicken patty cooked to perfection, with creamy mayonnaise and crunchy lettuce adding flavour to each bite.
                </div>
          </div>
          <div className="relative justify-self-center">
            <img alt="veg" className="h-36 w-44 mb-5" loading="lazy"
              src="https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_750/v1589466657/Item/197.png">
            </img>
            <div className="flex flex-row border ml-10  h-10 w-24 border-gray-400 relative" >
              <button
                disabled={totalItems === 0 ? true : false}
                onClick={() => RemoveFromCart(item)}
                className="font-semibold border-r bg-white text-gray-500 border-gray-400 h-full w-20 flex focus:outline-none cursor-pointer">
                <span className="m-auto">-</span>
              </button>
              <input
                type="hidden"
                className="md:p-2 p-1 text-xs md:text-base border-gray-400 focus:outline-none text-center"
                readOnly
                name="custom-input-number" />
              <div
                className="bg-white w-24 text-xs md:text-base flex items-center justify-center cursor-default">
                <span >{totalItems}</span>
              </div>
              <button onClick={() => addToCart(item)}
                className="font-semibold border-l  bg-white text-gray-500 border-gray-400 h-full w-20 flex focus:outline-none cursor-pointer">
                <span className="m-auto">+</span>
              </button>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default MenuItems
