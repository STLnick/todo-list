import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

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
            to='/register'>
            Get Started
          </Link>
          <h2 className="subtitle">
            Login
          </h2>
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
    <footer className="footer">
      <div className="footer-content content has-text-centered">
        <a
          href="linkedin.com"
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a
          href="github.com"
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a
          href="twitter.com"
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
      </div>
    </footer>
  </div>
}
