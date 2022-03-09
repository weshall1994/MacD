import React, { useContext, useEffect, useState } from 'react'
import { CurrencyRupeeIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'
import { appContext } from '../App'
import MenuCartHoc from '../Common/MenuCartHoc'

function CartIndex(props) {
  const { cartItems, cartSet, totalInCart, subTotal, total, setCartItems, setCartSet, setTotalInCart, setSubTotal, setTotal } = useContext(appContext)
  const { addToCart, RemoveFromCart } = props
  return (
    <div className="grid">
      <h1 className="text-3xl font-bold flex relative justify-self-center pb-5">
        <Link to="/menus" className="">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </Link>
        Your order details
        </h1>
      <div className="flex relative md:w-1/2 justify-self-center">
        <div className="grid p-5 w-full h-screen rounded-lg shadow-lg border">
          <div className="relative overflow-y-auto">
            <div className="grid justify-items-center relative bg-white sticky top-0 z-9">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 content-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p className="text-sm text-gray-700 bg-white break-words mt-10 absolute">{`${totalInCart} ITEMS`}</p>
              {totalInCart !== 0 &&
                <p
                  onClick={() => {
                    setCartItems([])
                    setCartSet([])
                    setTotalInCart(0)
                    setSubTotal(0)
                    setTotal({ id: 0, totl: 0 })
                  }}
                  className="text-sm text-red-500 font-bold cursor-pointer hover:text-red-400 bg-white justify-self-end break-words mt-10 absolute">{`Clear all`}</p>
              }
            </div>
            {totalInCart === 0 ?
              <>
                <img alt="veg" className="justify-self-center h-44 w-44 my-10 md:mx-56 mx-20" loading="lazy"
                  src="https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/v1591261933/NewWebsiteResource2020/Assets/Img/Empty_cart.svg">
                </img>
                <p className="text-xs text-gray-500 break-words">Opps! Your cart is empty.
            You haven’t yet placed any order yet.</p>
              </> :
              <div className="overflow-y-auto my-10">
                {
                  cartSet.map((i, index) => (
                    <div className="" key={index}>
                      <div className="grid md:grid-cols-10 mt-2 flex font-semibold items-center text-sm text-gray-900">
                        <img alt="veg" className="" loading="lazy"
                          src="https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/v1591261933/NewWebsiteResource2020/Assets/Img/Veg.svg">
                        </img>
                        <span className="text-sm break-words col-span-4">&nbsp;&nbsp;{i.item_name}</span>&nbsp;
                        <div className="grid col-span-3">
                          <div className="flex flex-row border justify-self-end  h-10 w-24 border-gray-400 relative" >
                            <button
                              onClick={() => RemoveFromCart(i)}
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
                              <span >{total.id === i.id ? total.totl : cartItems.filter(itm => itm.id === i.id).length}</span>
                            </div>
                            <button onClick={() => addToCart(i)}
                              className="font-semibold border-l  bg-white text-gray-500 border-gray-400 h-full w-20 flex focus:outline-none cursor-pointer">
                              <span className="m-auto">+</span>
                            </button>
                          </div>
                        </div>
                        <span className="col-span-1 flex ">&nbsp;&nbsp;
                       {i.price * (total.id === i.id ? total.totl : cartItems.filter(itm => itm.id === i.id).length)}

                        </span>
                      </div>
                    </div>
                  ))
                }
              </div>
            }
            {totalInCart !== 0 &&
              <>
                <div className="md:flex grid grid-cols-2 md:items-center absolute sticky bg-white bottom-10 z-10  pb-2 fixed">
                  <div className="md:w-full justify-self-center">
                    <div className="mt-2 flex font-semibold items-center text-xl text-gray-900">
                      {"Subtotal"}
                    </div>
                  </div>
                  <div className="md:w-full">
                    <div className="mt-2 float-right flex font-bold items-center text-md text-gray-900">
                      {subTotal}
                    </div>
                  </div>
                </div>
                <div className="md:flex grid grid-cols-2 md:items-center absolute sticky bg-white bottom-10 z-10  pb-2 fixed">
                  <div className="md:w-full justify-self-center">
                    <div className="mt-2 flex font-semibold items-center text-xl text-gray-900">
                      {"Discount"}
                    </div>
                  </div>
                  <div className="md:w-full">
                    <div className="mt-2 float-right flex font-bold items-center text-md text-gray-900">
                      {subTotal <= 100 ? "0 %" : (subTotal <= 500 ? "10%" : "20%")}
                    </div>
                  </div>
                </div>
                <div className="md:flex grid grid-cols-2 md:items-center absolute sticky bg-white bottom-10 z-10  pb-2 fixed">
                  <div className="md:w-full justify-self-center">
                    <div className="mt-2 flex font-semibold items-center text-xl text-gray-900">
                      {"Total"}
                    </div>
                  </div>
                  <div className="md:w-full">
                    <div className="mt-2 float-right flex font-bold items-center text-md text-gray-900">
                      {subTotal <= 100 ? subTotal : (subTotal <= 500 ? subTotal - (subTotal * 0.1).toFixed(0) : subTotal - (subTotal * 0.2).toFixed(0))}
                    </div>
                  </div>
                </div>
                <div className="md:flex md:items-center absolute bg-white sticky bottom-0 z-10  right-1/3">
                  <div className="md:w-full justify-self-center">
                    <button className="shadow bg-yellow-500 uppercase hover:bg-yellow-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                      Place Order
                      </button>
                  </div>
                </div>
              </>
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default MenuCartHoc(CartIndex)
