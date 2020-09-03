import React, { useContext, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { motion } from 'framer-motion'

import api from 'api'
import auth from 'auth'
import { removeEmptyProps } from 'utils'

import { Options } from './Options'
import { UserContext } from '../../UserContext'

const repo = api()

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.75,
      duration: 1.25
    }
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' }
  }
}

export const Login = () => {
  const history = useHistory()
  const location = useLocation()
  const [loginMode, setLoginMode] = useState(location.search.includes('?login'))
  const [forgotPwMode, setForgotPwMode] = useState(location.search.includes('?forgot'))
  const { userId, setUserId } = useContext(UserContext)

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
    <motion.div
      className="box has-text-centered mx-3"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}>
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
          const userInfoObj = removeEmptyProps(values)

          if (forgotPwMode) {
            // Resetting Password
            auth.sendPasswordResetEmail(userInfoObj.email)
          } else if (loginMode) {
            // Logging In
            auth.signInWithEmailAndPassword(userInfoObj.email, userInfoObj.password)
              .then((res) => {
                setSubmitting(false)
                setUserId(auth.currentUser.uid)
                history.push('/todo')
              })
              .catch((err) => console.log(err))
          } else {
            // Registering
            auth.createUserWithEmailAndPassword(userInfoObj.email, userInfoObj.password)
              .then(async (res) => {
                console.log('Account created: ', res)
                await repo.addUser({ uid: auth.currentUser.uid })
                history.push('/todo', { user: auth.currentUser.uid })
              })
              .catch((err) => console.log('Error: ', err))
          }

        }}
      >
        {({ isSubmitting, resetForm }) => <Form>
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

          <button
            className="button is-primary mb-6"
            disabled={isSubmitting}
            type="submit">
            {buttonText}
          </button>
          <Options
            clickHandler={handleClick}
            forgotPwMode={forgotPwMode}
            loginMode={loginMode}
            resetHandler={resetForm}
          />
        </Form>}
      </Formik>
    </motion.div>
  )
}
