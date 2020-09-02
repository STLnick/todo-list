import React from 'react'
import PropTypes from 'prop-types'

import { Todo } from './Todo'

export const List = ({ currentTodos, completeHandler, deleteHandler }) => {

  const renderTodos = () => {
    return currentTodos.map(({ completed, _id, title }, i) => {
      return (
        <Todo
          completed={completed}
          completeHandler={completeHandler}
          deleteHandler={deleteHandler}
          id={_id}
          key={i}
          title={title}
        />
      )
    })
  }

  return (
    <ol className="list has-text-centered mb-5 px-4">
      {renderTodos()}
    </ol>
  )
}

List.propTypes = {
  completeHandler: PropTypes.func,
  currentTodos: PropTypes.array,
  deleteHandler: PropTypes.func
}
