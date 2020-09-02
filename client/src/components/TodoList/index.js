import React, { useEffect, useReducer, useState } from 'react'
import { useLocation } from 'react-router-dom'
import api from 'api'

import { Display } from './Display'
import { Form } from './Form'
import { List } from './List'

const repo = api()

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
        return todo._id === action.id
          ? { ...todo, completed: action.checked }
          : todo
      })
    case 'RETRIEVE':
      return state.concat(action.dbTodos)
    default:
      throw new Error()
  }
}

export const TodoList = () => {
  const location = useLocation()
  const [inputText, setInputText] = useState('')
  const [todos, dispatch] = useReducer(reducer, initialState);

  const user = location.state.user;

  useEffect(() => {
    (async () => {
      const dbTodos = await repo.getUserTodos({ id: location.state.user._id })
      dispatch({ type: 'RETRIEVE', dbTodos })
    })()
  }, [location.state.user])

  const calcCompletedTodos = () => todos.filter(({ completed }) => completed).length

  const handleCompleteTodo = ({ target: { checked } }, targetId) => {
    // Update database

    // Update state
    dispatch({ type: 'TOGGLE', checked, id: targetId })
  }

  const handleDeleteTodo = (e) => {
    // Update database

    // Update state
    dispatch({ type: 'DELETE', id: Number(e.target.closest('span').dataset.id) })
  }

  const handleInputChange = (e) => {
    setInputText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputText) {
      // Update database

      // Update state
      dispatch({ type: 'ADD', text: inputText })
    }
    setInputText('')
  }

  return (
    <div className="todo-box box p-4">
      <h2
        className="title py-3 has-text-centered is-family-monospace is-uppercase has-background-primary-dark has-text-white">
        Todo List
      </h2>
      <Display numComplete={calcCompletedTodos()} numTodos={todos.length} />
      <List
        currentTodos={todos}
        completeHandler={handleCompleteTodo}
        deleteHandler={handleDeleteTodo}
      />
      <Form inputHandler={handleInputChange} submitHandler={handleSubmit} text={inputText} />
    </div>
  )
}
