import React from 'react'
import { Col, Row } from 'reactstrap'
import { AnimateSharedLayout } from 'framer-motion'
import Matrix from '../../../ui/magnets'

const Hero = () => {
  return (
    <section id="particles" className="main-hero position-relative">
      {/* <ParticleAnimation
        background={{ r: 17, g: 20, b: 36, a: 255 }}
        color={{ r: 255, g: 255, b: 255, a: 100 }}
        interactive
        numParticles={180}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      /> */}
      <AnimateSharedLayout>
        <Matrix />
        <Row className="main-hero__container mx-0">
          <Col className="text-center">
            <h1 className="main-hero__subtitle">Stop searching</h1>
            <h1 className="main-hero__title">It's me, Navia</h1>
            <h2 className="main-hero__subtitle">
              The Full Stack Developer you've been looking for
            </h2>
          </Col>
        </Row>
      </AnimateSharedLayout>
    </section>
  )
}

export default Hero
