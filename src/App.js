import React, { useEffect } from 'react';
import './App.css';
import './assets/css/_Common.css';
import './assets/css/_Variable.css';
import './assets/css/_Reset.css';
import './assets/css/_Responsive.css';

import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import 'animate.css';
import WOW from 'wowjs';
import 'wowjs/css/libs/animate.css';

function App() {
  useEffect(() => {
    const moveMouseTrail = (event) => {
      var x = event.clientX;
      var y = event.clientY;
      var cursor = document.querySelector(".cursor-trail");
      var cursorWidth = cursor.offsetWidth;
      var cursorHeight = cursor.offsetHeight;
      cursor.style.left = x - cursorWidth / 2 + "px";
      cursor.style.top = y - cursorHeight / 2 + "px";
    };

    document.addEventListener("mousemove", moveMouseTrail);

    const wow = new WOW.WOW();
    wow.init();

    const navLinks = document.querySelectorAll('.nav__Link');
    const sections = document.querySelectorAll('section');

    const changeLinkState = () => {
      if (navLinks && navLinks.length > 0) {
        let index = sections.length;

        while (--index && window.scrollY + 500 < sections[index].offsetTop) { }

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index] && navLinks[index].classList.add('active');
      }
    }

    window.addEventListener('scroll', changeLinkState);

    return () => {
      window.removeEventListener('scroll', changeLinkState);
      document.removeEventListener("mousemove", moveMouseTrail);
    };
  }, []);

  return (
    <div className="App">

      <div className='main'>
        <div className="cursor-trail"></div>
        <div className="Content">
          <Navbar />
        </div>
        <div className="Content">
          <About />
          <Skills />
          <Education />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}


export default App;