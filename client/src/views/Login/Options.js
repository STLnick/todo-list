import React from 'react'
import PropTypes from 'prop-types'

export const Options = ({ forgotPwMode, forgotPwModeClickHandler, loginMode, loginModeClickHandler }) => <>
  <p>{loginMode || forgotPwMode ? 'Not registered yet?' : 'Already registered?'}</p>
  <button className="mb-4" onClick={loginModeClickHandler}>
    {loginMode || forgotPwMode ? 'Register' : 'Login'}
  </button>
  {
    loginMode
      ? (
        <p className="is-size-7">
          <button onClick={forgotPwModeClickHandler}>
            Forgot password?
          </button>
        </p>
      )
      : null
  }
</>

Options.propTypes = {
  forgotPwMode: PropTypes.bool,
  forgotPwModeClickHandler: PropTypes.func,
  loginMode: PropTypes.bool,
  loginModeClickHandler: PropTypes.func
}
