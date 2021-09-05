import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { isWindow } from '../../../utils/isBrowser'

const About = () => {
  const { scrollY } = useViewportScroll()
  const viewport = isWindow() && window.innerHeight
  const opacity = useTransform(
    scrollY,
    [0, viewport, viewport * 2],
    [0.1, 1, 0.1]
  )

  return (
    <motion.section
      id="about"
      className="main-about"
      style={{
        opacity,
      }}
    >
      <Container className="my-5">
        <Row className="mx-0">
          <Col xs={12} lg={7}>
            <article>
              <h2 className="main-about__title">Believe it or not</h2>
              <p className="main-about__description">
                I’m a 22-year-old guy born in Colombia, always interested in
                learning and improving myself in every way. I’m a passionate
                person in what I do and always give my best. I’ve been always
                into computers and stuff, also reading books and articles. I
                really believe in self-taught learning, that's why even since I
                started the university, I took the knowledge to the next level
                and now I’m proud to say that I've become a great developer,
                more specific a full-stack Developer. My journey started at 18th
                years-old and now I'm working in one of the bests companies in
                the world.
              </p>
            </article>
          </Col>
          <Col xs={12} lg={5}>
            <figure className="m-0">
              <img
                src="/profile.jpg"
                alt="profile"
                className="main-about__image img-fluid"
              />
            </figure>
          </Col>
        </Row>
      </Container>
    </motion.section>
  )
}

export default About
