import React, { useRef, useEffect } from 'react'
import { motion, useMotionValue, transform, useAnimation } from 'framer-motion'
import Box from './box'

const width = window.innerWidth
const height = window.innerHeight
const containerSize = width
const containerSizeHeight = height
const boxSize = 100
const rows = Array.from([...Array(Math.ceil(containerSize / boxSize)).keys()])
const columns = Array.from([
  ...Array(Math.ceil(containerSizeHeight / boxSize)).keys(),
])
const transition = { duration: 3, loop: Infinity, ease: 'easeOut' }

export default function Matrix() {
  const x = useMotionValue(-boxSize)
  const y = useMotionValue(-boxSize)
  const containerRef = useRef(null)
  const animation = useAnimation()

  const loopAnimation = () =>
    animation.start({
      x: [-boxSize, containerSize, containerSize, -boxSize, -boxSize],
      y: [-boxSize, -boxSize, containerSize, containerSize, -boxSize],
      rotate: [0, 0, 90, 90, 180, 180, 270, 270, 360],
      transition,
    })

  const stopAnimation = () => animation.stop()

  const restartAnimation = async () => {
    await animation.start({
      x: -boxSize,
      y: -boxSize,
      rotate: 0,
    })
    await loopAnimation()
  }

  const handleMouseMove = event => {
    x.set(
      event.pageX - containerRef.current.getBoundingClientRect().x - boxSize / 2
    )
    y.set(
      event.pageY - containerRef.current.getBoundingClientRect().y - boxSize / 2
    )
  }

  useEffect(() => {
    loopAnimation()
    return () => stopAnimation()
  }, [loopAnimation, stopAnimation])

  return (
    <div
      style={styles.page}
      onMouseEnter={stopAnimation}
      onMouseLeave={restartAnimation}
      onMouseMove={handleMouseMove}
    >
      <div style={styles.container} ref={containerRef}>
        {rows.map((row, rowIndex) =>
          columns.map((column, columnIndex) => (
            <Box
              x={x}
              y={y}
              row={rowIndex}
              column={columnIndex}
              key={`${row}${column}`}
              size={boxSize}
              container={containerSize}
              styles={styles}
            />
          ))
        )}
        <motion.div
          style={{
            ...styles.magnet,
            x,
            y,
            border: '6px solid #FFF',
            scale: 0.5,
          }}
          animate={animation}
          onPan={handleMouseMove}
          drag
        />
      </div>
    </div>
  )
}

const styles = {
  page: {
    background: 'rgb(17, 17, 17)',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'self-start',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  container: {
    position: 'relative',
    width: containerSize,
    height: containerSizeHeight,
    overflow: 'hidden',
  },
  Box: {
    height: boxSize,
    width: boxSize,
  },
  magnet: {
    height: boxSize,
    width: boxSize,
    borderRadius: boxSize * 0.33,
  },
}
