import React from 'react'
import PropTypes from 'prop-types'

export const Form = ({ inputHandler, submitHandler, text }) => {

  return (
    <form className="has-text-centered" onSubmit={submitHandler}>
      <div className="field is-flex">
        <label className="screen-reader-text" htmlFor="new-todo">New Todo</label>
        <input
          className="input is-rounded is-primary"
          id="new-todo"
          onChange={inputHandler}
          placeholder="New Todo..."
          type="text"
          value={text} />
        <p className="help">e.g. Take out the Trash</p>
        <button
          className="button is-primary is-uppercase has-text-weight-bold"
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
  inputHandler: PropTypes.func,
  submitHandler: PropTypes.func,
  text: PropTypes.string
}
