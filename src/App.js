import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import LandingPage from './components/LandingPage/LandingPage';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import 'tachyons';


class App extends Component {

  constructor() {
    super();
  }

  scrollFunction = (event) => {
    let mainNavLinks = document.getElementsByClassName('selec');
    let fromTop = window.scrollY;

    for (let link of mainNavLinks) {
      let section = document.querySelector(link.hash);

      if (link.classList.contains('am') && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight + 320 > fromTop ) {
        link.classList.add('active');
      }else if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop ) {
        link.classList.add('active');
      }else {
        link.classList.remove('active');
      }
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollFunction);
  }

  render() {
    return (
    <div className='AppContainer'>
      <NavigationBar/>
      <LandingPage/>
      <AboutMe/>
      <Skills/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
    );
  }
}

export default App;
