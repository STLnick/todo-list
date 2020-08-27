import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

export const Login = () =>
  <div className="box has-text-centered mx-3">
    <h2 className="is-size-3 mb-5">User Login</h2>
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address!').required('Email is required'),
        password: Yup.string().min(6).required('Password is required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log('submission: ', values)
        setSubmitting(false)
      }}
    >
      <Form>
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
        <button className="button is-primary" type="submit">Login</button>
      </Form>
    </Formik>
  </div>
