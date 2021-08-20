import React from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion'
import Item from './item'

export default function Accordeon() {
  const items = [0, 1, 2]
  return (
    <AnimateSharedLayout>
      <motion.ul
        layout
        className="main-education__list"
        initial={{ borderRadius: 25 }}
      >
        {items.map(item => (
          <Item key={item} />
        ))}
      </motion.ul>
    </AnimateSharedLayout>
  )
}
