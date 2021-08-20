import React from 'react'
import { Row, Col, Container } from 'reactstrap'

const About = () => {
  return (
    <section id="about" className="main-about py-5">
      <Container className='my-5'>
        <Row className="mx-0">
          <Col xs={12} lg={6}>
            <article>
              <h2 className="main-about__title">Believe it or not</h2>
              <p className="main-about__description">
                I’m a 20-year-old guy born in Colombia, always interested in
                learning and improving myself in every way. I’m a passionate
                person in what I do and always do my best. I’ve been always into
                computers and stuff, also reading books and articles. I really
                believe in self-taught learning, that's why even since I started
                the university, I like to taking the knowledge to the next level
                and now I’m proud to say that I've become a developer, more
                specific a full-stack Developer. I started some projects about a
                year ago as a Freelancer and now I’m looking forward to acquire
                more experience in the world of development with new
                technologies
              </p>
            </article>
          </Col>
          <Col xs={12} lg={6}>
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
    </section>
  )
}

export default About
