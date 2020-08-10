import React from 'react'
import PropTypes from 'prop-types'

export const Display = ({ numComplete, numTodos }) => {

  return (
    <div>
      <p className="has-text-centered mb-4 py-2 has-text-weight-bold has-background-success has-text-white">
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
