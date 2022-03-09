import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import './styles/app.css'
import { BrowserRouter, Route } from 'react-router-dom';
import Routers from './Routers/Index';
import TopBar from './Common/TopBar';
export const appContext = React.createContext()

function App() {
  const [cartItems, setCartItems] = useState([])
  const [cartSet, setCartSet] = useState([])
  const [totalInCart, setTotalInCart] = useState(0)
  const [subTotal, setSubTotal] = useState(0)
  const [total, setTotal] = useState({ id: 0, totl: 0 })
  return (
    <appContext.Provider value={{ cartItems, setCartItems, cartSet, setCartSet, totalInCart, setTotalInCart, subTotal, setSubTotal, total, setTotal }}>
      <div className="App">
        <BrowserRouter >
          <TopBar />
          <div className="m-5">
            <Route path="/" component={Routers} />
          </div>
        </BrowserRouter>
      </div>
    </appContext.Provider>
  );
}

export default App;
