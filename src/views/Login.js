import React from 'react'
import { useFormik } from 'formik'
import utils from 'utils'

export const Login = () => {
  const validate = values => {
    const errors = {}

    if (!utils.validateInput(values.name, utils.lettersRegex)) {
      errors.name = 'Name is required.'
    }
    if (!values.email || !utils.validateInput(values.email, utils.emailRegex)) {
      errors.email = 'Valid email is required.'
    }
    if (!values.password) {
      errors.password = 'Password is required.'
    }

    return errors
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: ''
    },
    validate,
    onSubmit: values => {
      console.log('submission: ', values)
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>Login Page</h2>
      <input
        type="text"
        name="name"
        id="name"
        onChange={formik.handleChange}
        placeholder="Name"
        value={formik.values.name} />
      {formik.errors.name ? <p className="has-text-danger">{formik.errors.name}</p> : null}
      <input
        type="email"
        name="email"
        id="email"
        onChange={formik.handleChange}
        placeholder="Email"
        value={formik.values.email} />
      {formik.errors.name ? <p className="has-text-danger">{formik.errors.email}</p> : null}
      <input
        type="password"
        name="password"
        id="password"
        onChange={formik.handleChange}
        placeholder="Password"
        value={formik.values.password} />
      {formik.errors.password ? <p className="has-text-danger">{formik.errors.password}</p> : null}
      <button type="submit">Login</button>
    </form>
  )
}
