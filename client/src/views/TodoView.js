import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { motion } from 'framer-motion'

import { TodoList } from '../components'
import { UserContext } from '../UserContext'

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

export const TodoView = () => {
  const history = useHistory()
  const { userId } = useContext(UserContext)

  if (!userId) {
    history.push('/login?login')
  }

  return <TodoList />
}
