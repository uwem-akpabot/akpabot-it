import React from 'react';
import Navbar from '../components/Navbar';
import Service from '../components/Service';
import Footer from '../components/Footer';
// import background from "./img/placeholder.png";
// import icon1 from '../resources/assets/img/icons/1.png';

const HomePage = (props) => {
  // const pageTitle = 'Home';

  return (
    <>
      <Navbar />
      <Service />
      <Footer />
    </>
  )
}

export default HomePage
