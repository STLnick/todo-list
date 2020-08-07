import React, { useEffect, useState } from 'react'
import api from 'api'

import { Form } from './Form'
import { List } from './List'

export const TodoList = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    (async () => {
      setTodos(await api.index())
    })()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTodo = {
      completed: false,
      id: Date.now(),
      text: e.target.querySelector('#new-todo').value
    }
    setTodos([...todos, newTodo])
  }

  const handleCompleteTodo = (e, targetId) => {
    const targetTodo = todos.find(({ id }) => id === targetId)

    targetTodo['completed'] = e.target.checked

    setTodos(todos.map(todo => todo.id === targetTodo.id ? targetTodo : todo))
  }

  return (
    <div>
      <h2>Todo List</h2>
      <List currentTodos={todos} handler={handleCompleteTodo} />
      <Form handler={handleSubmit} />
    </div>
  )
}
