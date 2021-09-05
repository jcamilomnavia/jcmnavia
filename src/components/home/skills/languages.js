import React from 'react'
import { Col } from 'reactstrap'

const Language = ({ time, items }) => {
  return (
    <Col
      xs={12}
      sm={6}
      lg={4}
      className="text-center main-skills-language mb-5 mb-lg-0 px-5 px-lg-5"
    >
      <div className="main-skills-language__container py-4">
        {items.map(item => (
          <span key={Math.random(3)} className="d-block">
            {item}
          </span>
        ))}
        <span className="main-skills-language__time mt-2">{time}</span>
      </div>
    </Col>
  )
}

export default Language
