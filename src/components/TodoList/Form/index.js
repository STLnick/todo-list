import React from 'react'
import PropTypes from 'prop-types'

export const Form = ({ handler }) => {

  return (
    <form onSubmit={handler}>
      <label htmlFor="new-todo">New Todo</label>
      <input id="new-todo" placeholder="New Todo..." type="text" />
      <button type="submit">Add Todo</button>
    </form>
  )
}

Form.propTypes = {
  handler: PropTypes.func
}
