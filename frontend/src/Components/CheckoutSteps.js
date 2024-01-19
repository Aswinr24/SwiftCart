import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { NavLink } from 'react-router-dom'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <LinkContainer to="/login">
            <Nav.Link>
              <strong>
                <b>1. Login</b>
              </strong>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>
            <strong>Login</strong>
          </Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step2 ? (
          <LinkContainer to="/shipping">
            <Nav.Link>
              <strong>
                <b>2. Shipping Address</b>
              </strong>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>
            <strong>Shipping Address</strong>
          </Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step3 ? (
          <LinkContainer to="/payment">
            <Nav.Link>
              <strong>
                <b>3. Payment</b>
              </strong>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>
            <strong>Payment</strong>
          </Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step4 ? (
          <LinkContainer to="/placeorder">
            <Nav.Link>
              <strong>
                <b>4. Place Order</b>
              </strong>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>
            <strong>Place Order</strong>
          </Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  )
}

export default CheckoutSteps
