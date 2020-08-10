import React from 'react'
import PropTypes from 'prop-types'

export const Display = ({ numComplete, numTodos }) => {

  const getBackgroundAndTextClass = () => {
    if (numComplete === 0) {
      return 'has-background-danger has-text-white'
    } else if (numComplete < numTodos) {
      return 'has-background-warning has-text-grey'
    }
    return 'has-background-success has-text-white'
  }

  return (
    <div>
      <p className={`has-text-centered mb-4 py-2 has-text-weight-bold ${getBackgroundAndTextClass()}`}>
        <span className="completed-todos">
          {`${numComplete} / ${numTodos} `}
        </span>
        Completed
      </p>
    </div>
  )
}

Display.propTypes = {
  numComplete: PropTypes.number,
  numTodos: PropTypes.number
}
