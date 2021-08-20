import * as React from 'react'
import { motion, useMotionValue } from 'framer-motion'
import { icon } from './settings'
import { useIconTransform } from './use-icon-transform'

export function Item({ row, col, planeX, planeY }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const scale = useMotionValue(1)

  const xOffset =
    col * (icon.size + icon.margin) +
    (row % 2) * ((icon.size + icon.margin) / 2)
  const yOffset = row * icon.size

  useIconTransform({ x, y, scale, planeX, planeY, xOffset, yOffset })

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
        background: `hsla(${Math.random() * 360}, 95%, 55%, 1)`,
      }}
    />
  )
}
