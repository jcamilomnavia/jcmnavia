/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
const React = require('react')

exports.wrapPageElement = ({ element, props }) => {
  return <div {...props}>{element}</div>
}
