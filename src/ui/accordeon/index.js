import React from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion'
import Item from './item'

const Accordeon = () => {
  const items = [
    {
      university: 'EAFIT University',
      location: 'Medellin, Colombia',
      eyebrow: 'Graduation date: July 2022',
      title: "Bachelor's in Computer Engineering",
      extra: 'GPA: 4.02',
      courses: null,
    },
    {
      university: 'University La Salle Ramon Llull',
      location: 'Barcelona, Spain',
      eyebrow: 'September 2019 - January 2020',
      title: "Bachelor's in Computer Engineering",
      extra: 'Exchange Program',
      courses:
        'Courses: Data mining, Computer Architecture, Operative Systems, Project Management, Project Web',
    },
  ]
  return (
    <AnimateSharedLayout>
      <motion.ul
        layout
        className="main-education__list"
        initial={{ borderRadius: 25 }}
      >
        {items.map(item => (
          <Item key={item?.location} item={item} />
        ))}
      </motion.ul>
    </AnimateSharedLayout>
  )
}

export default Accordeon
