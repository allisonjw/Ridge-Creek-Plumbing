import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Container from '../Container/Container';

export const App = () => {
  return (
    <>
      <Nav /> 
      <Container />
      <Switch>
      <Route exact path={process.env.PUBLIC_URL + '/'} render={() => {
          return (
            <>
                 <About />
            </>
          );
      }}
      />
      <Route path='/portfolio' render={() => 
        <> 
          <Portfolio/> 
        </>
      }/> 
      <Route path='/services' render={() => {
          return (
            <> 
              <Services/> 
            </>
          );
      }}/>
      <Route path='/contact' render={() => {
          return (
            <> 
              <Contact /> 
            </>
          );
      }}/> 
    </Switch>
    <Footer />
    </> 
  );
}

export default App;
