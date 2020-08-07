import React from 'react'

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
