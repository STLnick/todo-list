import React from 'react'
import PropTypes from 'prop-types'

import './Form.css'

export const Form = ({ handler }) => {

  return (
    <form className="has-text-centered" onSubmit={handler}>
      <div className="field is-flex">
        <label className="screen-reader-text" htmlFor="new-todo">New Todo</label>
        <input className="input is-rounded is-success" id="new-todo" placeholder="New Todo..." type="text" />
        <p className="help">e.g. Take out the Trash</p>
        <button
          className="button is-success is-uppercase has-text-weight-bold"
          id="submitBtn"
          type="submit"
        >
          Add Todo
        </button>
      </div>
    </form>
  )
}

Form.propTypes = {
  handler: PropTypes.func
}
