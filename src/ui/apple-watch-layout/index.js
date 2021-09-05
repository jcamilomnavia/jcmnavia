import React from 'react'
import { motion, useMotionValue } from 'framer-motion'
import Item from './item'
import { icon } from './settings'

const images = [
  'aws',
  'bash',
  'bootstrap',
  'docker',
  'express',
  'gatsby',
  'git',
  'github',
  'graphql',
  'heroku',
  'html5',
  'jest',
  'js',
  'laravel',
  'nodejs',
  'php',
  'postgres',
  'react',
  'redux',
  'sass',
  'sql',
  'terraform',
  'ts',
  'vscode',
  'wordpress',
]

const AppleWatchDock = () => {
  const isBrowser = typeof document !== 'undefined'
  const width = isBrowser && document.body.clientWidth
  const rows = Math.floor(500 / icon.size) * 2
  const cols = Math.floor(width / icon.size) * 2
  const grid = new Array(rows).fill([...Array(cols).keys()])
  const x = useMotionValue(-225)
  const y = useMotionValue(-225)
  let counter = -1

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
          left: -width / 2,
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
        {grid.map((row, rowIndex) =>
          row.map(colIndex => {
            counter += 1
            if (counter >= images.length) {
              counter = 0
            }
            return (
              <>
                <Item
                  // eslint-disable-next-line react/no-array-index-key
                  key={`skill-${rowIndex}`}
                  row={rowIndex}
                  col={colIndex}
                  planeX={x}
                  planeY={y}
                  image={images[counter]}
                />
              </>
            )
          })
        )}
      </motion.div>
    </div>
  )
}

export default AppleWatchDock
