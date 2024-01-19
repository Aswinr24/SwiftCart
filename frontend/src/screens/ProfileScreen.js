import React, { useState, useEffect } from 'react'
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom'
import { Form, Row, Col, Button, FormLabel, FormControl } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import { getUserDetails, updateUserProfile } from '../actions/userActions'

const ProfileScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()
  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  const history = useNavigate()
  const [search, setSearch] = useSearchParams()
  const location = useLocation()
  useEffect(() => {
    if (!userInfo) {
      history('/login')
    } else {
      if (!user.name) {
        dispatch(getUserDetails('profile'))
      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [dispatch, history, userInfo, user])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }))
    }
  }

  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {success && <Message variant="success">Profile Updated</Message>}
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

          <Button type="submit" variant="primary" className="mt-2">
            Update
          </Button>
        </Form>
      </Col>
      <Col md={9} className="mt-3">
        <h2>My Orders</h2>
      </Col>
    </Row>
  )
}

export default ProfileScreen
