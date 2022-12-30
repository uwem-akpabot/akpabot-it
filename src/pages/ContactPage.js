import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import background from "./img/placeholder.png";
// import icon1 from '../resources/assets/img/icons/1.png';

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth:'500px'}}>
        <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">What I Do</div>
        <h1 className="display-6 mb-5">Contact Me</h1>
      </div>
      <Footer />
    </>
  )
}

export default ContactPage
