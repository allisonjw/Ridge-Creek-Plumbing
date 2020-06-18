import React from 'react';
import './App.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import Nav from '../Nav/Nav';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Fade from 'react-reveal/Fade';

export const App = () => {
  return (
    <Switch>
      <Route exact path='/about' render={() => <> 
      <Fade bottom>
        <Nav /> 
      </Fade>
      <Fade left>  
        <About />
      </Fade>   
      <Footer /> </>}/>
      <Route path='/portfolio' render={() => <> <Nav /> <Portfolio/> <Footer /> </>}/> 
      <Route path='/services' render={() => <> <Nav /> <Services/> <Footer /> </>}/>
      <Route path='/contact' render={() => <> <Nav /> <Contact /> <Footer /> </>}/> 
      <Redirect to='/about' />
    </Switch>
  );
}

export default App;
