import React from 'react'

import { useFormik } from 'formik'

export const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: ''
    },
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
      <input
        type="email"
        name="email"
        id="email"
        onChange={formik.handleChange}
        placeholder="Email"
        value={formik.values.email} />
      <input
        type="password"
        name="password"
        id="password"
        onChange={formik.handleChange}
        placeholder="Password"
        value={formik.values.password} />
      <button type="submit">Login</button>
    </form>
  )
}
