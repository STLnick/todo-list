import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const Login = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address!').required('Email is required'),
      password: Yup.string().min(6).required('Password is required'),
    }),
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
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        placeholder="Name"
        value={formik.values.name} />
      {formik.touched.name && formik.errors.name ? <p className="has-text-danger">{formik.errors.name}</p> : null}
      <input
        type="text"
        name="email"
        id="email"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        placeholder="Email"
        value={formik.values.email} />
      {formik.touched.email && formik.errors.email ? <p className="has-text-danger">{formik.errors.email}</p> : null}
      <input
        type="password"
        name="password"
        id="password"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        placeholder="Password"
        value={formik.values.password} />
      {formik.touched.password && formik.errors.password ? <p className="has-text-danger">{formik.errors.password}</p> : null}
      <button type="submit">Login</button>
    </form>
  )
}
