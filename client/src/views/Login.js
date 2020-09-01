import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

export const Login = () => {
  const location = useLocation()
  const [loginMode, setLoginMode] = useState(location.search.includes('?login'))

  useEffect(() => {
    setLoginMode(location.search.includes('login'))
  }, [location.search])

  return (
    <div className="box has-text-centered mx-3">
      <h2 className="is-size-3 mb-5">{loginMode ? 'Login' : 'Register'}</h2>
      <Formik
        initialValues={{
          email: '',
          password: '',
          name: ''
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('Name is required'),
          email: Yup.string().email('Invalid email address!').required('Email is required'),
          password: Yup.string().min(6).required('Password is required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log('submission: ', values)
          setSubmitting(false)
        }}
      >
        <Form>
          {!loginMode
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

          <div className="field">
            <label htmlFor="password">Password</label>
            <div className="control">
              <Field className="input is-primary mb-5" name="password" type="password" />
              <p className="help is-danger">
                <ErrorMessage name="password" />
              </p>
            </div>
          </div>
          <button className="button is-primary mb-6" type="submit">Sign Up</button>
          <p>{loginMode ? 'Not registered yet?' : 'Already registered?'}</p>
          <Link to={loginMode ? '/login' : '/login?login'}>
            <p className="">
              {loginMode ? 'Register' : 'Login'}
            </p>
          </Link>
        </Form>
      </Formik>
    </div>
  )
}
