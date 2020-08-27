import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Navbar } from './components'
import { About, Contact, FAQ, Login, Register, TodoView } from './views'

import './App.scss';

export const App = () => {
  return (
    <>
      <Navbar />
      <div id="wrapper">
        <Switch>
          <Route exact path="/">
            <TodoView />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/faq'>
            <FAQ />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
        </Switch>
      </div>
    </>
  );
}
