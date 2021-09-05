import React from 'react'
import { Col, Row, Container } from 'reactstrap'
import Accordeon from '../../../ui/accordeon'

const Education = () => {
  return (
    <section id="education" className="main-education py-5">
      <Container>
        <Row className="mx-0 mt-5 mb-3">
          <Col xs={12}>
            <h2 className="main-education__title mb-5">Training Courts</h2>
          </Col>
        </Row>
        <Accordeon />
      </Container>
    </section>
  )
}
export default Education
