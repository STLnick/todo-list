import React, { useEffect, useState } from 'react'
import api from 'api'

import { Display } from './Display'
import { Form } from './Form'
import { List } from './List'

export const TodoList = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    (async () => {
      setTodos(await api.index())
    })()
  }, [])

  const calcCompletedTodos = () => todos.filter(({ completed }) => completed).length

  const handleSubmit = (e) => {
    e.preventDefault()

    const newTodo = {
      completed: false,
      id: Date.now(),
      text: e.target.querySelector('#new-todo').value
    }

    if (e.target.querySelector('#new-todo').value)
      setTodos([...todos, newTodo])

    e.target.querySelector('#new-todo').value = ''
  }

  const handleCompleteTodo = ({ target: { checked } }, targetId) => {
    const targetTodo = todos.find(({ id }) => id === targetId)

    targetTodo.completed = checked

    setTodos(prevState => prevState.map(todo => todo.id === targetTodo.id ? targetTodo : todo))
  }

  const handleDeleteTodo = (e) => {
    // identify which todo was clicked to delete
    const targetId = Number(e.target.closest('span').dataset.id)

    // setTodos with array EXCLUDING the targeted todo
    setTodos(() => todos.filter(({ id }) => id !== targetId))
  }

  return (
    <div className="box p-4">
      <h2
        className="title py-3 has-text-centered is-family-monospace is-uppercase has-background-success-dark has-text-white">
        Todo List
      </h2>
      <Display numComplete={calcCompletedTodos()} numTodos={todos.length} />
      <List
        currentTodos={todos}
        completeHandler={handleCompleteTodo}
        deleteHandler={handleDeleteTodo}
      />
      <Form handler={handleSubmit} />
    </div>
  )
}
