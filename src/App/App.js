import React from 'react';
import './App.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';

export const App = () => {
  return (
    <main className="App">
        <p>
          Ridge Creek Plumbing
        </p>
    </main>
  );
}

export default App;
