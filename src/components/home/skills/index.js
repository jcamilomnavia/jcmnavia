import React from 'react'
import { Container, Row, Col } from 'reactstrap'
// import Slider from 'react-slick'
// import Language from './languages'
import AppleWatchDock from '../../../ui/apple-watch-layout'

const Skills = () => {
  return (
    <section id="skills" className="main-skills py-5">
      <Container>
        <Row className="mx-0 mt-5">
          <Col>
            <h2 className="main-skills__title">An Amazing Series of SKILLS</h2>
          </Col>
        </Row>
      </Container>
      <AppleWatchDock />
    </section>
  )
}

export default Skills
