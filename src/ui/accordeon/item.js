/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Content = ({ title, university, location, eyebrow, extra, courses }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h3 className="main-education__item-university">{university}</h3>
      <div>
        <p className="main-education__item-location">{location}</p>
        <p className="main-education__item-eyebrow float-right">{eyebrow}</p>
      </div>
      <p className="main-education__item-title">{title}</p>
      <div className="main-education__item-extra">{extra}</div>
      <div className="main-education__item-courses">{courses}</div>
    </motion.div>
  )
}

const Item = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen(!isOpen)
  return (
    <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1.7,
            ease: [0.83, 0, 0.17, 1],
          }}
          layout
          className="main-education__card"
        >
          <h3 className="main-education__item-university">{item.university}</h3>
          <p className="main-education__item-title d-inline-block">
            {item.title}
          </p>
          <img
            className="main-education__arrow float-right"
            src="./arrow-down.svg"
            alt="expand details"
          />
        </motion.div>
      )}
      <AnimatePresence>
        {isOpen && (
          <Content
            title={item.title}
            university={item.university}
            location={item?.location}
            eyebrow={item?.eyebrow}
            extra={item?.extra}
            courses={item?.courses}
          />
        )}
      </AnimatePresence>
    </motion.li>
  )
}

export default Item
