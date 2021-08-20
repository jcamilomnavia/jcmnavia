import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Slider from 'react-slick'

import awsLogo from 'assets/images/svg/aws.svg'
import gitLogo from 'assets/images/svg/git.svg'
import graphqlLogo from 'assets/images/svg/graphql.svg'
import cssLogo from 'assets/images/svg/css.svg'
import htmlLogo from 'assets/images/svg/html.svg'
import linuxLogo from 'assets/images/svg/linux.svg'
import dockerLogo from 'assets/images/svg/docker.svg'
import nodeLogo from 'assets/images/svg/nodejs.svg'
import reactLogo from 'assets/images/svg/react.svg'
import mongoLogo from 'assets/images/svg/mongo.svg'
import Language from './languages'
import { AppleWatchDock } from '../../../ui/apple-watch-layout'

const Skills = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    speed: 3500,
    autoplaySpeed: 3500,
    cssEase: 'linear',
  }
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

      {/* <Row className="justify-content-center mx-0 my-4">
          <Col xs={12} className="mb-3">
            <h3 className="main-skills__subtitle">Programming Languages</h3>
          </Col>
          <Language time="3 Years" items={['Javascript', 'Java']} />
          <Language time="6 Months" items={['Python', 'PHP', 'C++']} />
        </Row>

        <Row className="mt-3 mx-0">
          <Col>
            <h2 className="main-skills__subtitle">Technologies</h2>
          </Col>
          <Col className="my-5">
            <Slider {...settings}>
              <img
                src={reactLogo}
                alt="node"
                className="px-4 img-fluid"
                title="ReactJS"
              />
              <img
                src={nodeLogo}
                alt="node"
                className="px-4 img-fluid"
                title="Node.JS"
              />
              <img
                src={mongoLogo}
                alt="mongo"
                className="px-4 img-fluid"
                title="MongoDB"
              />
              <img
                src={graphqlLogo}
                alt="Grapql"
                className="px-4 img-fluid"
                title="GraphQl"
              />
              <img
                src={dockerLogo}
                alt="Docker"
                className="px-4 img-fluid"
                title="Docker"
              />
              <img
                src={gitLogo}
                alt="Git"
                className="px-4 img-fluid"
                title="Git"
              />
              <img
                src={awsLogo}
                alt="AWS"
                className="px-4 img-fluid"
                title="AWS"
              />
              <img
                src={linuxLogo}
                alt="Linux"
                className="px-4 img-fluid"
                title="Linux"
              />
              <img
                src={htmlLogo}
                alt="HTML"
                className="px-4 img-fluid"
                title="HTML"
              />
              <img
                src={cssLogo}
                alt="CSS"
                className="px-4 img-fluid"
                title="CSS"
              />
            </Slider>
          </Col>
        </Row> */}
    </section>
  )
}

export default Skills
