import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

export const Login = () =>
  <div className="box has-text-centered mx-3">
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
        <label htmlFor="name">Name</label>
        <Field name="name" type="text" />
        <ErrorMessage name="name" />

        <label htmlFor="email">Email</label>
        <Field name="email" type="text" />
        <ErrorMessage name="email" />

        <label htmlFor="password">Password</label>
        <Field name="password" type="password" />
        <ErrorMessage name="password" />
        <button className="button is-primary" type="submit">Login</button>
      </Form>
    </Formik>
  </div>
