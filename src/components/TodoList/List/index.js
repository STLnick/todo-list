import React from 'react'
import PropTypes from 'prop-types'

import { Todo } from './Todo'

export const List = ({ currentTodos, handler }) => {

  const renderTodos = () => {
    return currentTodos.map(({ completed, id, text }) => {
      return (
        <Todo completed={completed} handler={handler} id={id} key={id} text={text} />
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
