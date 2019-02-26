//
import React from 'react'
import { render } from 'react-dom'
import Root from './Root'

//
const rootEl = document.getElementById('root')

if (rootEl) {
  render(<Root />, rootEl)
}

//
export default Root