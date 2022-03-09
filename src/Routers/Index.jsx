import React from 'react'
import { Route, Switch } from 'react-router'
import CartIndex from '../Cart/CartIndex'
import MenuIndex from '../Menu/MenuIndex'

function Index() {
  return (
    <Switch>
      <Route exact path="/" component={MenuIndex} />
      <Route path="/menus" component={MenuIndex} />
      <Route path="/cart" component={CartIndex} />
    </Switch>
  )
}

export default Index
