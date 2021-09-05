/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { motion, useMotionValue, transform } from 'framer-motion'

function calcAngle(top, left, cursorTop, cursorLeft) {
  const angle = Math.atan2(cursorTop - left, cursorLeft - top) * (180 / Math.PI)
  return angle < 0 ? -(angle + 540) : -(angle + 180)
}

const Box = ({ x, y, row, column, size, container, styles }) => {
  const top = column * size
  const left = row * size

  const angle = useMotionValue(0)
  const scale = useMotionValue(0)
  const borderRadius = useMotionValue(0)
  const background = useMotionValue('')

  useEffect(() => {
    function updateProps() {
      const updatedAngle = calcAngle(top, left, x.get(), y.get())
      angle.set(updatedAngle)

      const proximity = Math.max(
        Math.abs(left - x.get()),
        Math.abs(top - y.get())
      )
      const newColor = transform(
        proximity,
        [0, container - size],
        ['#F00', '#60F']
      )
      const newScale = transform(proximity, [0, container - size], [0.8, 0.5])
      const newBorderRadius = transform(
        proximity,
        [0, container - size],
        [size * 0.11, size * 0.33]
      )
      background.set(newColor)
      scale.set(newScale)
      borderRadius.set(newBorderRadius)
    }

    const unsubscribeX = x.onChange(updateProps)
    const unsubscribeY = y.onChange(updateProps)

    return () => {
      unsubscribeX()
      unsubscribeY()
    }
  }, [])

  return (
    <motion.div
      style={{
        ...styles.Box,
        position: 'absolute',
        top,
        left,
        background,
        scale,
        borderRadius,
        rotate: angle,
      }}
    />
  )
}

export default Box
