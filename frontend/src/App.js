import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { Container } from 'react-bootstrap'
import Header from './Components/Header'
import Footer from './Components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/shipping" Component={ShippingScreen} exact />
            <Route path="/payment" Component={PaymentScreen} exact />
            <Route path="/placeorder" Component={PlaceOrderScreen} exact />
            <Route path="/login" Component={LoginScreen} exact />
            <Route path="/register" Component={RegisterScreen} exact />
            <Route path="/profile" Component={ProfileScreen} exact />
            <Route path="/product/:id" Component={ProductScreen} exact />
            <Route path="/cart/:id?" Component={CartScreen} exact />
            <Route path="/" Component={HomeScreen} exact />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
