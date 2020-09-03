import React, { useContext } from 'react'
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
  const { userId } = useContext(UserContext)

  return userId ? <TodoList /> : <div className="todo-box box p-4">
    className="todo-box box p-4"
    initial="hidden"
    animate="visible"
    exit="exit"
    variants={containerVariants}>
    <h2
      className="title py-3 has-text-centered is-family-monospace is-uppercase has-background-danger has-text-white">
      Not Logged In
    </h2>
  </motion.div>
}
