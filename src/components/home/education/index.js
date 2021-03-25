import React from 'react'
import { Col, Row, Container } from 'reactstrap'

const Education = () => {
  return (
    <section id="education" className="main-education py-5">
      <Container>
        <Row className="mx-0">
          <Col xs={12}>
            <h2 className="main-education__title">Education</h2>
          </Col>
        </Row>

        <Row className="mx-0">
          <Col xs={12} className="main-education-item p-4  my-2">
            <h4 className="main-education-item__title">EAFIT University</h4>
            <p className="float-right">Graduation date: July 2021</p>
            <h5>Medellin, Colombia</h5>
            <span>Bachelor's in Computer Engineering</span>
          </Col>

          <Col xs={12} className="main-education-item p-4 my-2">
            <h4 className="main-education-item__title">
              University La Salle Ramon Llull
            </h4>
            <p className="float-right">September 2019 - January 2020</p>
            <h5>Barcelona, Spain</h5>
            <span>Bachelor's in Computer Engineering</span>
            <span>Exchange Program</span>
            <span>
              Courses: Data mining, Computer Architecture, Operative Systems,
              Project Management, Web Project
            </span>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Education
