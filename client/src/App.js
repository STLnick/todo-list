import React, { useMemo, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'

import { Footer, Navbar } from './components'
import { Contact, FAQ, Home, Login, NotFound, Register, TodoView } from './views'
import { UserContext } from './UserContext'

import './App.scss';

export const App = () => {
  const location = useLocation()
  const [userId, setUserId] = useState(null)

  const providerValue = useMemo(() => ({ userId, setUserId }), [userId, setUserId])

  return (
    <>
      <UserContext.Provider value={providerValue}>
        <Navbar />
        <div id="wrapper">
          <AnimatePresence>
            <Switch location={location} key={location.key}>
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
          </AnimatePresence>
        </div>
      </UserContext.Provider>
      <Footer />
    </>
  );
}
