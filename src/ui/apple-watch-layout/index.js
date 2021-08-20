import React, { useEffect } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import { Item } from './item'
import { device, icon } from './settings'

// Download the Framer Beta: https://www.framer.com/beta/
// Framer Beta API documentation: https://www.framer.com/api/

// Fill a grid of numbers to represent each app icon

export function AppleWatchDock() {
  const width = document.body.clientWidth
  const rows = Math.floor(500 / icon.size) * 2
  const cols = Math.floor(width / icon.size) * 2
  const grid = new Array(rows).fill([...Array(cols).keys()])
  console.log(rows, cols)
  const x = useMotionValue(-225)
  const y = useMotionValue(-225)

  useEffect(() => {
    // width = document.body.clientWidth;
  }, [])

  return (
    <div
      className="device"
      style={{
        width,
        height: 500,
      }}
    >
      <motion.div
        drag
        dragConstraints={{
          left: -width / 3,
          right: -150,
          top: -250,
          bottom: -160,
        }}
        style={{
          width,
          height: 500,
          x,
          y,
          background: 'transparent',
        }}
      >
        {grid.map((rows, rowIndex) =>
          rows.map(colIndex => (
            <Item row={rowIndex} col={colIndex} planeX={x} planeY={y} />
          ))
        )}
      </motion.div>
    </div>
  )
}
