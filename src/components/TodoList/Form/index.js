import React from 'react'

export const Form = () => {

  return (
    <form>
      <label htmlFor="new-todo">New Todo</label>
      <input id="new-todo" placeholder="New Todo..." type="text" />
      <button type="submit">Add Todo</button>
    </form>
  )
}
