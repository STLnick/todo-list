import React from 'react'
import PropTypes from 'prop-types'

export const Options = ({ forgotPwMode, handler, loginMode }) => <>
  <p>{loginMode || forgotPwMode ? 'Not registered yet?' : 'Already registered?'}</p>
  <button className="mb-4" onClick={(e) => handler(e)}>
    {loginMode || forgotPwMode ? 'Register' : 'Login'}
  </button>
  {
    loginMode
      ? (
        <p className="is-size-7">
          <button onClick={(e) => handler(e)}>
            Forgot password?
          </button>
        </p>
      )
      : null
  }
</>

Options.propTypes = {
  forgotPwMode: PropTypes.bool,
  handler: PropTypes.func,
  loginMode: PropTypes.bool,
}
