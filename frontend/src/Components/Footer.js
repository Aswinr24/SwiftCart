import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <center>
          <Row>
            <Col classname="text-center py-3">Copyright &copy; SwiftCart</Col>
          </Row>
        </center>
      </Container>
    </footer>
  )
}

export default Footer
