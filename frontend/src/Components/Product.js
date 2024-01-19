import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link style={{ textDecoration: 'none' }} to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>
              <b>{product.name}</b>
            </strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text
          as="h2"
          style={{ color: 'chrome' }}
          className="mt-1 py-2 px-1"
        >
          <strong>₹{product.price}</strong>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
