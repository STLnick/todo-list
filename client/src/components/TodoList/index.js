import React, { useEffect, useReducer, useState } from 'react'
import { useLocation } from 'react-router-dom'
import api from 'api'

import { Display } from './Display'
import { Form } from './Form'
import { List } from './List'

const repo = api()

const initialState = []
const reducer = (state, action) => {
  const { type, ...payload } = action
  switch (type) {
    case 'ADD':
      return state.concat({ ...payload })
    case 'DELETE':
      return state.filter(todo => todo._id !== payload._id)
    case 'TOGGLE':
      return state.map(todo => {
        return todo._id === payload._id
          ? { ...todo, completed: payload.checked }
          : todo
      })
    case 'RETRIEVE':
      return state.concat(payload.dbTodos)
    default:
      throw new Error()
  }
}

export const TodoList = () => {
  const location = useLocation()
  const [inputText, setInputText] = useState('')
  const [todos, dispatch] = useReducer(reducer, initialState);

  const userId = location.state.userId;

  useEffect(() => {
    (async () => {
      const dbTodos = await repo.getUserTodos({ userId })
      dispatch({ type: 'RETRIEVE', dbTodos })
    })()
  }, [location.state.userId])

  const calcCompletedTodos = () => todos.filter(({ completed }) => completed).length

  const handleCompleteTodo = async ({ target: { checked } }, targetId) => {
    // Update database
    await repo.toggleTodo({ _id: targetId, completed: checked })
    // Update state
    dispatch({ type: 'TOGGLE', checked, _id: targetId })
  }

  const handleDeleteTodo = async (e) => {
    const targetId = e.target.closest('span').dataset.id
    // Update database
    await repo.deleteTodo({ _id: targetId })
    // Update state
    dispatch({ type: 'DELETE', _id: targetId })
  }

  const handleInputChange = (e) => {
    setInputText(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (inputText) {
      // Create new todo object
      const newTodo = { completed: false, title: inputText, userId }
      // Update database and grab _id of inserted document
      const { insertedId } = await repo.addTodo(newTodo)
      // Update state
      dispatch({ type: 'ADD', _id: insertedId, ...newTodo })
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
