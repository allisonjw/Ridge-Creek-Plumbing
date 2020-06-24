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
import Projects from '../Projects/Projects';
import Container from '../Container/Container';
import Categories from '../Categories/Categories';

export const App = () => {
  return (
    <>
    <Container />
    <Switch>
      <Route exact path='/about' render={() => <> 
        <Nav /> 
      <Fade left>  
        <About />
      </Fade>   
      <Footer /> </>}/>
      <Route path='/portfolio' render={() => <> <Nav /> <Portfolio/> <Projects/> <Footer /> </>}/> 
      <Route path='./container' render={() => <>  <Container /> </>} />
        <Route path='./categories' render={() => <>  <Categories /> </>} />
        <Route path='./products' render={() => <> <Nav /> <Projects/> <Footer /> </>}/>
      <Route path='/services' render={() => <> <Nav /> <Services/> <Footer /> </>}/>
      <Route path='/contact' render={() => <> <Nav /> <Contact /> <Footer /> </>}/> 
      {/* <Redirect to='/about' /> */}
    </Switch>
    </>
  );
}

export default App;
