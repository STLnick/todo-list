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
