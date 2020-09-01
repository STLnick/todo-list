import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => <section className="section has-text-centered">
  <h2 className="has-text-danger is-size-2">404</h2>
  <p className="has-text-danger is-size-3 has-text-weight-bold">Page Not Found</p>
  <Link to='/'>Back to Application</Link>
</section>
