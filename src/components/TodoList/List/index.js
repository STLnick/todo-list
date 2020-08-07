import React from 'react'
import PropTypes from 'prop-types'

export const List = ({ currentTodos, handler }) => {

  const renderTodos = () => {
    return currentTodos.map(({ completed, id, text }) => {
      return (
        <li key={id}>
          {text}
          <label htmlFor="completed">Completed</label>
          <input
            onChange={(e) => handler(e, id)}
            type="checkbox"
            id="completed"
            checked={completed ? true : false}
          />
        </li>
      )
    })
  }

  return (
    <ol>
      {renderTodos()}
    </ol>
  )
}

List.propTypes = {
  currentTodos: PropTypes.array,
  handler: PropTypes.func
}
