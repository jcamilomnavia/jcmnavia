import { useMemo, useRef } from 'react'
import { transform } from 'framer-motion'
import { device, icon } from './settings'

// Transform the provided x, y and scale motion values based on changes
// in the provided planeX and planeY motion values
export function useIconTransform({
  x,
  y,
  scale,
  planeX,
  planeY,
  xOffset,
  yOffset,
}) {
  // Keep track of our calculated x and y scales - we'll
  // set scale to the smallest of the two
  const xScale = useRef(1)
  const yScale = useRef(1)

  // We can useMemo as it'll work before any visual changes. With the underlying
  // production-ready code this will make the icon transformation work even in SSR
  useMemo(() => {
    // Transform x and scale based on planeX
    const transform = v => {
      // Calculate the offset of the icon relative to its position on the screen
      const screenOffset = v + xOffset + 20

      // Save the xScale to also be used in the planeY useMemo below.
      xScale.current = mapScreenXToScale(screenOffset)
      const newScale = Math.min(xScale.current, yScale.current)

      // Any changed motion values are only rendered once per frame,
      // so we can repeat the scale.set and it'll only render once,
      // with latest values passed to it
      scale.set(newScale)
      x.set(mapScreenToXOffset(screenOffset))
    }

    return planeX.onRenderRequest(transform)
  }, [planeX, scale, x, xOffset])

  useMemo(() => {
    // Transform y and scale based on planeY
    const transform = v => {
      const screenOffset = v + yOffset + 20
      yScale.current = mapScreenYToScale(screenOffset)
      const newScale = Math.min(xScale.current, yScale.current)
      scale.set(newScale)
      y.set(mapScreenToYOffset(screenOffset))
    }

    return planeY.onRenderRequest(transform)
  }, [planeY, scale, y, yOffset])
}

const createScreenRange = axis => [
  -60,
  80,
  device[axis] - (icon.size + icon.margin) / 2 - 80,
  device[axis] - (icon.size + icon.margin) / 2 + 60,
]
// Try changing these values to see how scrolling affects the scale and position of the icons
const scaleRange = [0, 1, 1, 0]
const xRange = createScreenRange('width')
const yRange = createScreenRange('height')
const mapScreenToXOffset = transform(xRange, [50, 0, 0, -50])
const mapScreenToYOffset = transform(yRange, [50, 0, 0, -50])
const mapScreenXToScale = transform(xRange, scaleRange)
const mapScreenYToScale = transform(yRange, scaleRange)
