import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LoginForm, RegisterForm } from '../components'

export const Login = () => {
  const location = useLocation()
  const [loginMode, setLoginMode] = useState(location.search.includes('?login'))

  useEffect(() => {
    setLoginMode(location.search.includes('?login'))
  }, [location.search])

  console.log(loginMode)
  console.log(location)

  return loginMode ? <LoginForm /> : <RegisterForm />
}
