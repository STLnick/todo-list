import React, { useState } from 'react'

import { Form } from './Form'
import { List } from './List'

export const TodoList = () => {
  const [todos, setTodos] = useState([])

  return (
    <div>
      <h2>Todo List</h2>
      <List />
      <Form />
    </div>
  )
}
