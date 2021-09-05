/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
const React = require('react')
const { AnimatePresence } = require('framer-motion')

exports.wrapPageElement = ({ element, props }) => {
  return (
    <AnimatePresence>
      <div {...props}>{element}</div>
    </AnimatePresence>
  )
}
