import React, { useState } from 'react'

import { Form } from './Form'
import { List } from './List'

export const TodoList = () => {
  const [todos, setTodos] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const newTodo = e.target.querySelector('#new-todo').value

    setTodos([...todos, newTodo])
  }

  return (
    <div>
      <h2>Todo List</h2>
      <List currentTodos={todos} />
      <Form handler={submitHandler} />
    </div>
  )
}
