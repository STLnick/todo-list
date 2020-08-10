import React from 'react'
import PropTypes from 'prop-types'

export const Display = ({ numComplete, numTodos }) => {

  const getBackgroundAndTextClass = () => {
    if (numComplete < numTodos / 2) {
      return 'has-background-danger has-text-white'
    } else if (numComplete === numTodos) {
      return 'has-background-success has-text-white'
    }

    return 'has-background-warning has-text-grey'
  }

  return (
    <div className="has-text-centered has-text-weight-semibold">
      <p>{new Date().toDateString()}</p>
      <p className={`mb-4 py-2 has-text-weight-bold ${getBackgroundAndTextClass()}`}>
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
