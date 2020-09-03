import React, { useMemo, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Footer, Navbar } from './components'
import { Contact, FAQ, Home, Login, NotFound, Register, TodoView } from './views'
import { UserContext } from './UserContext'

import './App.scss';

export const App = () => {
  const [userId, setUserId] = useState(null)

  const providerValue = useMemo(() => ({ userId, setUserId }), [userId, setUserId])

  return (
    <>
      <UserContext.Provider value={providerValue}>
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
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </UserContext.Provider>
      <Footer />
    </>
  );
}
