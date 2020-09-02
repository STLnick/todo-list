import React, { useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import api from 'api'
import { removeEmptyProps } from 'utils'

import { Options } from './Options'

const repo = api()

export const Login = () => {
  const history = useHistory()
  const location = useLocation()
  const [loginMode, setLoginMode] = useState(location.search.includes('?login'))
  const [forgotPwMode, setForgotPwMode] = useState(location.search.includes('?forgot'))

  const handleClick = (e) => {
    if (e.target.textContent.includes('Forgot')) {
      setForgotPwMode(true)
    } else {
      setForgotPwMode(false)
      setLoginMode(prevMode => !prevMode)
    }
  }

  let titleText = loginMode ? 'Login' : 'Register'
  titleText = forgotPwMode ? 'Forgot Password' : titleText

  let buttonText = loginMode ? 'Login' : 'Sign Up'
  buttonText = forgotPwMode ? 'Get Password' : buttonText

  return (
    <div className="box has-text-centered mx-3">
      <h2 className="is-size-3 mb-5">{titleText}</h2>
      <Formik
        initialValues={{
          email: '',
          password: '',
          name: ''
        }}
        validationSchema={Yup.object({
          name: !loginMode && Yup.string().required('Name is required'),
          email: Yup.string().email('Invalid email address!').required('Email is required'),
          password: !forgotPwMode && Yup.string().min(6).required('Password is required'),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          const loginObj = removeEmptyProps(values)
          console.log(loginObj)

          // const res = await repo.loginUser(loginObj)

          setSubmitting(false)
          // history.push('/todo', { user: res })
        }}
      >
        <Form>
          {!loginMode && !forgotPwMode
            ? (<div className="field">
              <label htmlFor="name">Name</label>
              <div className="control">
                <Field className="input is-primary mb-5" name="name" type="text" />
                <p className="help is-danger">
                  <ErrorMessage name="name" />
                </p>
              </div>
            </div>)
            : null}

          <div className="field">
            <label htmlFor="email">Email</label>
            <div className="control">
              <Field className="input is-primary mb-5" name="email" type="text" />
              <p className="help is-danger">
                <ErrorMessage name="email" />
              </p>
            </div>
          </div>

          {!forgotPwMode
            ? (<div className="field">
              <label htmlFor="password">Password</label>
              <div className="control">
                <Field className="input is-primary mb-5" name="password" type="password" />
                <p className="help is-danger">
                  <ErrorMessage name="password" />
                </p>
              </div>
            </div>)
            : null
          }

          <button className="button is-primary mb-6" type="submit">
            {buttonText}
          </button>
        </Form>
      </Formik>
      <Options
        forgotPwMode={forgotPwMode}
        handler={handleClick}
        loginMode={loginMode}
      />
    </div>
  )
}
