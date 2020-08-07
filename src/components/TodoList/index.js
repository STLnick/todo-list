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
