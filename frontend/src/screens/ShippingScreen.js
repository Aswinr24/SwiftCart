import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, FormLabel, FormControl } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutSteps from '../Components/CheckoutSteps'
import FormContainer from '../Components/FormContainer'
import { saveShippingAddress } from '../actions/cartActions'

const ShippingScreen = () => {
  const history = useNavigate()
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [pincode, setPincode] = useState(shippingAddress.pincode)
  const [state, setState] = useState(shippingAddress.state)

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, pincode, state }))
    history('/payment')
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Shipping Address:</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address">
          <FormLabel>
            <strong>
              <b>Address:</b>
            </strong>
          </FormLabel>
          <FormControl
            type="text"
            classname="mb-2"
            placeholder="Enter your address"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></FormControl>
        </Form.Group>
        <Form.Group controlId="city">
          <FormLabel>
            <strong>
              <b>City:</b>
            </strong>
          </FormLabel>
          <FormControl
            type="text"
            classname="mb-2"
            placeholder="Enter your city"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></FormControl>
        </Form.Group>
        <Form.Group controlId="state">
          <FormLabel>
            <strong>
              <b>State:</b>
            </strong>
          </FormLabel>
          <FormControl
            type="text"
            classname="mb-2"
            placeholder="Enter your state"
            value={state}
            required
            onChange={(e) => setState(e.target.value)}
          ></FormControl>
        </Form.Group>
        <Form.Group controlId="pincode">
          <FormLabel>
            <strong>
              <b>Pincode:</b>
            </strong>
          </FormLabel>
          <FormControl
            type="text"
            classname="mb-2"
            placeholder="Enter your pincode"
            value={pincode}
            required
            onChange={(e) => setPincode(e.target.value)}
          ></FormControl>
        </Form.Group>

        <Button type="submit" variant="primary" className="mt-3">
          Continue to payment
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingScreen
