import React from 'react';

const Footer = () => {
  return (
    <>
    <div className="container-fluid bg-dark text-white-50 footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                <h1 className="fw-bold text-white m-0">akpabot<span className="text-primary">-it</span></h1>
                    <br />
                    <p>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-square me-1" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square me-1" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square me-1" href=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-square me-0" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-light mb-4">Address</h5>
                    <p><i className="fa fa-map-marker-alt me-3"></i>Abuja FCT, Nigeria</p>
                    <p><i className="fa fa-phone-alt me-3"></i>+234 (0)816-266-5633</p>
                    <p><i className="fa fa-globe me-3"></i>akpabot-it.com</p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-light mb-4">Quick Links</h5>
                    <a className="btn btn-link" href="">About Us</a>
                    <a className="btn btn-link" href="">Contact Us</a>
                    <a className="btn btn-link" href="">Our Services</a>
                    <a className="btn btn-link" href="">Terms & Condition</a>
                    <a className="btn btn-link" href="">Support</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-light mb-4">Newsletter</h5>
                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                    <div className="position-relative mx-auto" style={{maxWidth: '400px'}}>
                        <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                        <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid copyright">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a href="#">Uwemedimo Edem Akpabot</a>. All rights reserved.
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        Developer: <a href="#">Me (Uncle Life)</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
    </>
  )
}

export default Footer
