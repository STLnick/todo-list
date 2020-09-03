import React, { useContext } from 'react'

import { TodoList } from '../components'
import { UserContext } from '../UserContext'

export const TodoView = () => {
  const { userId } = useContext(UserContext)

  return userId ? <TodoList /> : <div className="todo-box box p-4">
    <h2
      className="title py-3 has-text-centered is-family-monospace is-uppercase has-background-danger has-text-white">
      Not Logged In
    </h2>
  </div>
}
