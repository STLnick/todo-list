import React from 'react'
import PropTypes from 'prop-types'

export const Todo = ({ completed, handler, id, text }) => {
  return (
    <li>
      {text}
      <label className="screen-reader-text" htmlFor="completed">Completed</label>
      <input
        onChange={(e) => handler(e, id)}
        type="checkbox"
        id="completed"
        checked={completed ? true : false}
      />
    </li>
  )
}

Todo.propTypes = {
  completed: PropTypes.bool,
  handler: PropTypes.func,
  id: PropTypes.number,
  text: PropTypes.string
}
