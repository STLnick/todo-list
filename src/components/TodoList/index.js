import React, { useEffect, useReducer, useState } from 'react'
import api from 'api'

import { Display } from './Display'
import { Form } from './Form'
import { List } from './List'

const initialState = []

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return state.concat({
        completed: false,
        id: state.length + 1,
        text: action.text
      })
    case 'DELETE':
      return state.filter(todo => todo.id !== action.id)
    case 'TOGGLE':
      return state.map(todo => {
        return todo.id === action.id
          ? { ...todo, completed: action.checked }
          : todo
      })
    default:
      throw new Error()
  }
}

export const TodoList = () => {
  const [todos, dispatch] = useReducer(reducer, initialState)

  const calcCompletedTodos = () => todos.filter(({ completed }) => completed).length

  const handleSubmit = (e) => {
    e.preventDefault()

    if (e.target.querySelector('#new-todo').value) {
      dispatch({ type: 'ADD', text: e.target.querySelector('#new-todo').value })
    }

    e.target.querySelector('#new-todo').value = ''
  }

  const handleCompleteTodo = ({ target: { checked } }, targetId) => {
    dispatch({ type: 'TOGGLE', checked, id: targetId })
  }

  const handleDeleteTodo = (e) => {
    dispatch({ type: 'DELETE', id: Number(e.target.closest('span').dataset.id) })
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
