import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../todo.png'

export const Navbar = () => {
  const handleBurgerClick = () => {
    document.querySelector('.navbar-burger').classList.toggle('is-active');
    document.querySelector('.navbar-menu').classList.toggle('is-active');
  }

  return <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <span className="navbar-item" href="https://bulma.io">
        <img src={logo} alt="Todo App Logo" width="35" height="35" />
        Todo List App
      </span>

      <a
        aria-expanded="false"
        aria-label="menu"
        className="navbar-burger burger"
        data-target="navbarBasicExample"
        onClick={handleBurgerClick}
        role="button"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <Link to='/' className="button is-primary">
              <strong>Todo App</strong>
            </Link>
            <Link to='/about' className="button is-light">
              About
            </Link>
            <Link to='/contact' className="button is-light">
              Contact
            </Link>
            <Link to='/faq' className="button is-light">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
}
