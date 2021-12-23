import React, {useState} from 'react';
// import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './components/pages/Products';
import Discographie from './components/pages/Discographie';
import Footer from './components/Footer';
import Navbar2 from './components/Navbar2';
import Dropdown from './components/Dropdown';
import Contact from './components/pages/Contact';
import ProjectsDetail from './components/project-detail';
import ProjectPres from './components/ProjectPres';




function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Router>
        {/* <Navbar2 toggle={toggle}/> */}
      <Dropdown isOpen= {isOpen} toggle={toggle}/>
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route exact path='/Discographie' component={Discographie} />
          <Route path="/Discographie/:id" component={ProjectsDetail} />    
          <Route path='/products' component={Products} />
          <Route path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
