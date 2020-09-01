import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => <footer className="footer">
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
