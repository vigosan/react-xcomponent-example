import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import './xcomponent/FwPayment'

render(
  <App message="It Work!" {...window.xprops} />,
  document.getElementById('app')
)
