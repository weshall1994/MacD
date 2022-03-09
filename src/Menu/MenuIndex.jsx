import { CurrencyRupeeIcon } from '@heroicons/react/solid'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MenuItems from './Componets/MenuItems'
import { appContext } from '../App'
import MenuCartHoc from '../Common/MenuCartHoc'

function MenuIndex(props) {
  const { cartItems, cartSet, totalInCart, subTotal, total, } = useContext(appContext)
  const { addToCart, RemoveFromCart } = props
  let cancelToken = axios.CancelToken
  let source = cancelToken.source()
  const [items, setItems] = useState([])
  useEffect(() => {
    getItems()
    return () => {
      source.cancel();
    }
  }, [])

  async function getItems() {

    await axios.get("https://run.mocky.io/v3/9d71cb03-a9f9-4d70-bae2-9d3adaa1cfe7", { cancelToken: source.token })
      .then(res => {
        if (res.data) {
          console.log(res.data)
          setItems(res.data)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className="grid md:grid-cols-3 relative">
      <div className={"h-screen overflow-y-auto md:col-span-2"}>
        {items.length > 0 ?
          items.map((itm, index) =>
          (
            <div key={index} className="flex relative">
              <MenuItems
                item={itm}
                totalItems={total.id === itm.id ? total.totl : cartItems.filter(i => i.id === itm.id).length}
                addToCart={addToCart}
                RemoveFromCart={RemoveFromCart}
              />
            </div>
          )) : <button type="button" className="bg-rose-600 ..." disabled>
            <svg className="animate-spin br-red h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
            </svg>
          Loading...
        </button>
        }
      </div>
      <div className="flex relative hidden md:block">
        <div className="grid p-5 w-full h-96 shadow-lg border">
          <div className="relative overflow-y-auto">
            <div className="grid justify-items-center relative bg-white sticky top-0 z-9">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 content-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p className="text-sm text-gray-700 bg-white break-words mt-10 absolute">{`${totalInCart} ITEMS`}</p>
            </div>
            {totalInCart === 0 ?
              <>
                <img alt="veg" className="justify-self-center h-44 w-44 my-10 mx-24" loading="lazy"
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
                    <div className="flex font-semibold items-center text-sm text-gray-500">
                      {"Extra charges may apply"}
                    </div>
                  </div>
                  <div className="md:w-full">
                    <div className="mt-2 float-right flex font-bold items-center text-md text-gray-900">
                      <CurrencyRupeeIcon className="h-5 w-5" />&nbsp;
                      {subTotal}
                    </div>
                  </div>
                </div>
                <div className="md:flex md:items-center absolute bg-white sticky bottom-0 z-10  right-1/3">
                  <div className="md:w-full justify-self-center">
                    <Link to="/cart">
                      <button className="shadow bg-yellow-500 uppercase hover:bg-yellow-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                        Checkout
                      </button>
                    </Link>
                  </div>
                </div>
              </>
            }
          </div>
        </div>
      </div>
      <Link to="/cart">
        <button
          className="p-0 w-8 h-8 bg-red-600 fixed md:hidden bottom-5 right-5 z-10 right-0 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
          <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="w-6 h-6 inline-block">
            <path fill="#FFFFFF"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </button></Link>
    </div>
  )
}

export default MenuCartHoc(MenuIndex)
