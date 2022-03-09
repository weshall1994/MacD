import React, { useContext, useEffect, useState } from 'react'
import { appContext } from '../App'
const MenuCartHoc = OriginalComponent => {
  function NewComponent(props) {
    const { cartItems, setCartItems, cartSet, setCartSet, totalInCart, setTotalInCart, subTotal, setSubTotal, total, setTotal } = useContext(appContext)
    function addToCart(e) {
      let tempCarts = cartItems;
      let tempSubTotal = 0
      tempCarts.push(e)
      setCartItems(tempCarts)
      if (tempCarts.length > 0) {
        tempCarts.map(c => { tempSubTotal = tempSubTotal + c.price })
      }
      setSubTotal(tempSubTotal)
      setTotal({ id: e.id, totl: tempCarts.filter(i => i.id === e.id).length })
      let tempSet = new Set(tempCarts)
      console.log("addToCart", tempSet)
      setCartSet(tempSet ? Array.from(tempSet) : [])
      setTotalInCart(tempSet ? tempSet.size : 0)
    }
    function RemoveFromCart(e) {
      let removableItem = cartItems.filter(c => c.id === e.id)
      removableItem.pop()
      console.log("removableItem", removableItem)
      let tempCarts = cartItems.filter(c => c.id !== e.id);
      let tempSubTotal = 0
      if (removableItem.length > 0) {
        removableItem.map(i => tempCarts.push(i))
      }
      setCartItems(tempCarts)
      if (tempCarts.length > 0) {
        tempCarts.map(c => { tempSubTotal = tempSubTotal + c.price })
      }
      setSubTotal(tempSubTotal)
      setTotal({ id: e.id, totl: tempCarts.filter(i => i.id === e.id).length })
      let tempSet = new Set(tempCarts)
      console.log("Remove", tempSet)
      setCartSet(tempSet ? Array.from(tempSet) : [])
      setTotalInCart(tempSet ? tempSet.size : 0)

    }
    return (
      <OriginalComponent
        addToCart={addToCart}
        RemoveFromCart={RemoveFromCart} />
    )
  }
  return NewComponent
}

export default MenuCartHoc
