import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../Logo'
import Message from '../Message'
import styles from './App.css'

const App = ({ message }) => (
  <div className={styles.container}>
    <Logo />
    <Message text={message} />
  </div>
)

const { string } = PropTypes
App.propTypes = {
  message: string.isRequired
}

export default App
