import React from 'react'
import PropTypes from 'prop-types'
import styles from './Message.css'

const Message = ({ text }) => <span className={styles.message}>{text}</span>

const { string } = PropTypes
Message.propTypes = {
  text: string.isRequired
}

export default Message
