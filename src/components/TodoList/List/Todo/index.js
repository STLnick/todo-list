import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import './Todo.scss'

export const Todo = ({ completed, completeHandler, deleteHandler, id, text }) => {
  return (
    <li className="columns">
      <div className="column is-four-fifths">
        <span className={`has-text-weight-semibold ${completed ? 'completed-todo' : null}`} >{text}</span>
      </div>
      <div className="columns column">
        <div className="column">
          <label className="screen-reader-text" htmlFor="completed">Completed</label>
          <input
            className="checkbox"
            onChange={(e) => completeHandler(e, id)}
            type="checkbox"
            id="completed"
            checked={completed ? true : false}
          />
        </div>
        <div className="column has-text-danger">
          <span tabIndex="0" role="button" data-id={id} onClick={deleteHandler} onKeyUp={deleteHandler}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </span>
        </div>
      </div>

    </li>
  )
}

Todo.propTypes = {
  completed: PropTypes.bool,
  completeHandler: PropTypes.func,
  deleteHandler: PropTypes.func,
  id: PropTypes.number,
  text: PropTypes.string
}
