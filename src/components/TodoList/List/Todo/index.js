import React from 'react'
import PropTypes from 'prop-types'

import './Todo.css'

export const Todo = ({ completed, handler, id, text }) => {
  return (
    <li className="columns">
      <div className="column is-one-fifth"></div>
      <div className="column">
        <span className={`has-text-weight-semibold ${completed ? 'completed-todo' : null}`} >{text}</span>
      </div>
      <div className="column">
        <label className="screen-reader-text" htmlFor="completed">Completed</label>
        <input
          className="checkbox"
          onChange={(e) => handler(e, id)}
          type="checkbox"
          id="completed"
          checked={completed ? true : false}
        />
      </div>
      <div className="column is-one-fifth"></div>
    </li>
  )
}

Todo.propTypes = {
  completed: PropTypes.bool,
  handler: PropTypes.func,
  id: PropTypes.number,
  text: PropTypes.string
}
