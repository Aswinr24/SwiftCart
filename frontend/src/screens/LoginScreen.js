import React, { useState, useEffect } from 'react'
import {
  Link,
  useSearchParams,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import { Form, Row, Col, Button, FormLabel, FormControl } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import FormContainer from '../Components/FormContainer'
import Loader from '../Components/Loader'
import { login } from '../actions/userActions'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const history = useNavigate()
  const [search, setSearch] = useSearchParams()
  const location = useLocation()

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <FormLabel>
            <strong>
              <b>Email</b>
            </strong>
          </FormLabel>
          <FormControl
            type="email"
            className="mb-2"
            placeholder="Enter your email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></FormControl>
        </Form.Group>

        <Form.Group controlId="password">
          <FormLabel>
            <strong>
              <b>Password</b>
            </strong>
          </FormLabel>
          <FormControl
            type="password"
            className="mb-2"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></FormControl>
        </Form.Group>

        <Button type="submit" variant="primary" className="mt-1">
          Sign in
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          New to Swiftcart?{' '}
          <Link
            to={redirect ? `/register?redirect=${redirect}` : '/register'}
            style={{ textDecoration: 'none' }}
          >
            <strong>Register Now</strong>
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen
