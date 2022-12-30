import React from 'react';
import Navbar from '../components/Navbar';
import Service from '../components/Service';
import Footer from '../components/Footer';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Social from '../components/Social';
import Reference from '../components/Reference';
// import background from "./img/placeholder.png";
// import icon1 from '../resources/assets/img/icons/1.png';

const HomePage = (props) => {
  // const pageTitle = 'Home';

  return (
    <>
      <Navbar />
      <Service />
      <Experience />
      <Education />
      <Skills />
      <Social />
      <Reference />
      <Footer />
    </>
  )
}

export default HomePage
