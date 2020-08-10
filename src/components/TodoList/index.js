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

  const calcCompletedTodos = (numTodos = todos.length) => {
    // divide # of trues by # of todos
    const numComplete = todos.filter(todo => todo.completed === true).length

    document.querySelector('.completed-todos').textContent = `${numComplete} / ${numTodos}`
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTodo = {
      completed: false,
      id: Date.now(),
      text: e.target.querySelector('#new-todo').value
    }
    setTodos([...todos, newTodo])

    e.target.querySelector('#new-todo').value = ''

    calcCompletedTodos(todos.length + 1)
  }

  const handleCompleteTodo = ({ target: { checked } }, targetId) => {
    const targetTodo = todos.find(({ id }) => id === targetId)

    targetTodo.completed = checked

    setTodos(prevState => prevState.map(todo => todo.id === targetTodo.id ? targetTodo : todo))

    calcCompletedTodos()
  }

  return (
    <div className="box p-4">
      <h2
        className="title py-3 has-text-centered is-family-monospace is-uppercase has-background-success-dark has-text-white">
        Todo List
      </h2>
      <div>
        <p className="has-text-centered mb-4 py-2 has-text-weight-bold has-background-success has-text-white">
          Completed
          <span className="completed-todos">
            {` ${todos.filter(todo => todo.completed === true).length} / ${todos.length} `}
          </span>
          Todos
        </p>
      </div>
      <List currentTodos={todos} handler={handleCompleteTodo} />
      <Form handler={handleSubmit} />
    </div>
  )
}
