import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LoginForm, RegisterForm } from '../components'

export const Login = () => {
  const location = useLocation()
  const [loginMode, setLoginMode] = useState(location.search.includes('?login'))

  useEffect(() => {
    setLoginMode(location.search.includes('login'))
  }, [location.search])

  return loginMode ? <LoginForm /> : <RegisterForm />
}
