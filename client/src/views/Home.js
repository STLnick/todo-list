import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {


  return <div>
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Todo List App
          </h1>
          <Link
            class="button is-primary is-size-5 has-text-weight-bold cta-button"
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
  </div>
}
