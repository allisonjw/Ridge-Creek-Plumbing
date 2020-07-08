import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Fade from 'react-reveal/Fade';
import Container from '../Container/Container';

export const App = () => {
  return (
    <>
    <Container />
    <Switch>
      <Route exact path={process.env.PUBLIC_URL + '/'} render={() => <> 
        <Nav /> 
      <Fade left>  
        <About />
      </Fade>   
      <Footer /> </>}/>
      <Route path='/portfolio' render={() => <> <Nav /> <Portfolio/> <Footer /> </>}/> 
      <Route path='/services' render={() => <> <Nav /> <Services/> <Footer /> </>}/>
      <Route path='/contact' render={() => <> <Nav /> <Contact /> <Footer /> </>}/> 
    </Switch>
    </> 
  );
}

export default App;
