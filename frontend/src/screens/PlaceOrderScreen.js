import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {
  Button,
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  ListGroupItem,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutSteps from '../Components/CheckoutSteps'
import Message from '../Components/Message'

const PlaceOrderScreen = () => {
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  cart.itemsPrice = cart.cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  )
  cart.ShippingPrice = cart.itemsPrice > 5000 ? 0 : 500
  cart.totalPrice = Number(cart.itemsPrice) + cart.ShippingPrice
  const placeOrderHandler = () => {
    console.log('Place Order')
  }

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h1>Shipping To:</h1>
              <strong style={{ fontSize: '19px' }}>
                {'   '}
                {cart.shippingAddress.address}, {cart.shippingAddress.city},{' '}
                {cart.shippingAddress.state}, {cart.shippingAddress.pincode}
              </strong>
            </ListGroupItem>
            <ListGroupItem>
              <h1>Payment Method:</h1>
              <b style={{ fontSize: '18px' }}> {cart.paymentMethod}</b>
            </ListGroupItem>

            <ListGroupItem>
              <h1>Order Items:</h1>
              <ListGroup variant="flush">
                {cart.cartItems.map((item, index) => (
                  <ListGroupItem key={index}>
                    <Row>
                      <Col md={1}>
                        <Image src={item.image} alt={item.name} fluid rounded />
                      </Col>
                      <Col>
                        <Link
                          to={`/product/${item.product}`}
                          style={{ textDecoration: 'none' }}
                        >
                          {item.name}
                        </Link>
                      </Col>
                      <Col md={4}>
                        {item.qty} x {item.price} = ₹{item.qty * item.price}
                      </Col>
                    </Row>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup>
              <ListGroupItem style={{ marginBottom: '-4px' }}>
                <h2>Order Summary:</h2>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col style={{ fontSize: '18px' }}>
                    Subtotal(
                    {cartItems.reduce((acc, item) => acc + item.qty, 0)} items):
                    <b style={{ fontSize: '20px', textAlign: 'end' }}>
                      {' '}
                      ₹ {cart.itemsPrice}
                    </b>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col style={{ fontSize: '18px' }}>
                    Delivery:
                    {cart.ShippingPrice === 0 ? (
                      <b> Free </b>
                    ) : (
                      <b>₹ {cart.ShippingPrice}</b>
                    )}
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col style={{ fontSize: '22px' }}>
                    Total:{' '}
                    <b style={{ fontSize: '24px' }}>₹ {cart.totalPrice}</b>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem className="text-center">
                <Button
                  type="button"
                  variant="outline-dark"
                  className="w-100 center"
                  onClick={placeOrderHandler}
                >
                  Place Order
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default PlaceOrderScreen
