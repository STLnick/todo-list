import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Footer, Navbar } from './components'
import { Contact, FAQ, Home, Login, NotFound, Register, TodoView } from './views'

import './App.scss';

export const App = () => {
  return (
    <>
      <Navbar />
      <div id="wrapper">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/todo">
            <TodoView />
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
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  );
}
