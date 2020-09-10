import React from 'react'
import PropTypes from 'prop-types'

export const Options = ({ forgotPwMode, clickHandler, loginMode, resetHandler }) => <>
  <p>{loginMode || forgotPwMode ? 'Not registered yet?' : 'Already registered?'}</p>
  <button className="mb-4" onClick={(e) => {
    clickHandler(e)
    resetHandler()
  }}>
    {loginMode || forgotPwMode ? 'Register' : 'Login'}
  </button>
  {
    loginMode
      ? (
        <p className="is-size-7">
          <button onClick={(e) => {
            clickHandler(e)
            resetHandler()
          }}>
            Forgot password?
          </button>
        </p>
      )
      : null
  }
</>

Options.propTypes = {
  clickHandler: PropTypes.func,
  forgotPwMode: PropTypes.bool,
  loginMode: PropTypes.bool,
  resetHandler: PropTypes.func
}
