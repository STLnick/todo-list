import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from '../../UserContext'

import logo from '../../todo.png'

export const Navbar = () => {
  const history = useHistory()
  const { user, setUser } = useContext(UserContext)

  const handleBurgerClick = () => {
    document.querySelector('.navbar-burger').classList.toggle('is-active');
    document.querySelector('.navbar-menu').classList.toggle('is-active');
  }

  const handleLogout = () => {
    // Remove the user from context
    setUser(null)
    history.push('/login?login')
  }

  return <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link to='/' className="navbar-item" href="https://bulma.io">
        <img src={logo} alt="Todo App Logo" width="35" height="35" />
        Todo List App
      </Link>

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
      <div className="navbar-start">
        <Link to='/' className="navbar-item">
          Home
        </Link>
        <Link to='/contact' className="navbar-item">
          Contact
        </Link>
        <Link to='/faq' className="navbar-item">
          FAQ
        </Link>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            {user
              ? <button
                className="button is-light"
                onClick={handleLogout}
              >
                Logout
              </button>
              : <>
                <Link to='/login?login' className="button is-light">
                  Login
                </Link>
                <Link to='/login' className="button is-primary">
                  Register
                </Link>
              </>}
          </div>
        </div>
      </div>
    </div>
  </nav>
}
