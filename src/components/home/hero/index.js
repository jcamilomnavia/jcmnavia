import React from 'react'
import { Col, Row } from 'reactstrap'
import ParticleAnimation from 'react-particle-animation'

const Hero = () => {
  return (
    <section id="particles" className="main-hero position-relative">
      <ParticleAnimation
        background={{ r: 17, g: 20, b: 36, a: 255 }}
        color={{ r: 255, g: 255, b: 255, a: 100 }}
        interactive
        numParticles={180}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      />
      <Row className="main-hero__container mx-0">
        <Col className="text-center">
          <h1 className="main-hero__title">Hey, This is Navia</h1>
          <h2 className="main-hero__subtitle">Full Stack Developer</h2>
        </Col>
      </Row>
    </section>
  )
}

export default Hero
