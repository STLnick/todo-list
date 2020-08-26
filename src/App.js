import React from 'react';

import { Navbar, TodoList } from './components'

import './App.scss';

export const App = () => {
  return (
    <div className="level" id="wrapper">

      <TodoList />
    </div>
  );
}
