import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

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

export const Home = () => {

  return <motion.div
    initial="hidden"
    animate="visible"
    exit="exit"
    variants={containerVariants}>
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-size-2">
            Todo List App
          </h1>
          <Link
            className="button is-primary is-size-5 has-text-weight-bold cta-button"
            to='/login'>
            Get Started
          </Link>
          <Link to='/login?login'>
            <h2 className="subtitle">
              Login
            </h2>
          </Link>
        </div>
      </div>
    </section>
    <hr className="has-background-grey-light" />
    <section className="about section has-text-centered">
      <h2 className="title">About The App</h2>
      <h3 className="subtitle">
        A productivity app that allows you to track the things you need to get done.
      </h3>
    </section>
  </motion.div>
}
