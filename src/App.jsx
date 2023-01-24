import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './containers/Home'
import Checkout from './containers/Checkout'
import Information from './containers/Information'
import Payment from './containers/Payment'
import Success from './containers/Success'
import NotFound from './containers/NotFound'
import Layout from './components/Layout'
import AppContext from './context/AppContext'
import useInitialState from './hooks/useInitialState'

function App() {

  const initialState = useInitialState()
  console.log(initialState)

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route exact path='/checkout/' element={<Checkout/>} />
              <Route exact path='/checkout/information' element={<Information/>} />
              <Route exact path='/checkout/payment' element={<Payment/>} />
              <Route exact path='/checkout/success' element={<Success/>} />
              <Route exact element={<NotFound/>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
