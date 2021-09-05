/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react'
import './src/assets/styles/style.scss'

export const wrapPageElement = ({ element, props }) => {
  return <div {...props}>{element}</div>
}
