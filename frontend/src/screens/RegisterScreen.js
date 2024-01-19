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
import { register } from '../actions/userActions'

const RegisterScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()
  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

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
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(register(name, email, password))
    }
  }

  return (
    <FormContainer>
      <h1>Sign UP</h1>
      {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <FormLabel>
            <strong>
              <b>Name</b>
            </strong>
          </FormLabel>
          <FormControl
            type="name"
            className="mb-2"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></FormControl>
        </Form.Group>

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

        <Form.Group controlId="confirmPassword">
          <FormLabel>
            <strong>
              <b>Confirm Password</b>
            </strong>
          </FormLabel>
          <FormControl
            type="password"
            className="mb-2"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></FormControl>
        </Form.Group>

        <Button type="submit" variant="primary" className="mt-1">
          Register
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          Existing User?{' '}
          <Link
            to={redirect ? `/login?redirect=${redirect}` : '/login'}
            style={{ textDecoration: 'none' }}
          >
            <strong>Log In</strong>
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default RegisterScreen
