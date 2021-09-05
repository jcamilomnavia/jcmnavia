import * as React from 'react'
import { motion, useMotionValue } from 'framer-motion'
import { icon } from './settings'
import useIconTransform from './use-icon-transform'

// eslint-disable-next-line react/prop-types
const Item = ({ row, col, planeX, planeY, image }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const scale = useMotionValue(1)

  const xOffset =
    col * (icon.size + icon.margin) +
    (row % 2) * ((icon.size + icon.margin) / 2)
  const yOffset = row * icon.size

  useIconTransform({ x, y, scale, planeX, planeY, xOffset, yOffset })

  const saturation = 100
  const hue = Math.floor(Math.random() * 360)
  const lightness = Math.floor((0.2 + Math.random()) * (100 / 2 + 1))
  return (
    <motion.div
      style={{
        position: 'absolute',
        left: xOffset,
        top: yOffset,
        x,
        y,
        scale,
        width: icon.size,
        height: icon.size,
        borderRadius: '50%',
        background: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
      }}
    >
      <figure className="m-0 d-flex h-100 px-4">
        <img
          className="m-auto align-middle main-skills__image"
          src={`./skills/${image}.svg`}
          alt={image}
        />
      </figure>
    </motion.div>
  )
}

export default Item
