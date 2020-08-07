import React from 'react'
import PropTypes from 'prop-types'

import './Todo.css'

export const Todo = ({ completed, handler, id, text }) => {
  return (
    <li className={completed ? 'completed-todo' : null}>
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
