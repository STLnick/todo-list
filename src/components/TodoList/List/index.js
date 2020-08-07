import React from 'react'
import PropTypes from 'prop-types'

export const List = ({ currentTodos }) => {

  const renderTodos = () => {
    return currentTodos.map((todo, i) => {
      return (
        <li key={i}>
          {todo}
          <label htmlFor="completed" >Completed</label>
          <input type="checkbox" id="completed" />
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
  currentTodos: PropTypes.array
}
