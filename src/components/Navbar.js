import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
            <div className="top-bar text-white-50 row gx-0 align-items-center d-none d-lg-flex">
                <div className="col-lg-6 px-5 text-start">
                    <small><i className="fa fa-map-marker-alt me-2"></i>123 Street, New York, USA</small>
                    <small className="ms-4"><i className="fa fa-envelope me-2"></i>info@example.com</small>
                </div>
                <div className="col-lg-6 px-5 text-end">
                    <small>Follow us:</small>
                    <a className="text-white-50 ms-3" href=""><i className="fab fa-facebook-f"></i></a>
                    <a className="text-white-50 ms-3" href=""><i className="fab fa-twitter"></i></a>
                    <a className="text-white-50 ms-3" href=""><i className="fab fa-linkedin-in"></i></a>
                    <a className="text-white-50 ms-3" href=""><i className="fab fa-instagram"></i></a>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg navbar-dark py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
                <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
                    <h1 className="fw-bold text-white m-0">akpabot<span className="text-primary">-it</span></h1>
                </a>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <a href="index.html" className="nav-item nav-link">Home</a>
                        <a href="about.html" className="nav-item nav-link">About</a>
                        <a href="causes.html" className="nav-item nav-link">Causes</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu m-0">
                                <a href="service.html" className="dropdown-item active">Service</a>
                                <a href="donate.html" className="dropdown-item">Donate</a>
                                <a href="team.html" className="dropdown-item">Our Team</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                <a href="404.html" className="dropdown-item">404 Page</a>
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">Contact</a>
                    </div>
                    <div className="d-none d-lg-flex ms-2">
                        <a className="btn btn-outline-primary py-2 px-3" href="">
                            Donate Now
                            <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                                <i className="fa fa-arrow-right"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
        <div class="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container text-center">
                <h1 class="display-4 text-white animated slideInDown mb-4">Uwem Akpabot</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol class="breadcrumb justify-content-center mb-0">
                        <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                        <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                        <li class="breadcrumb-item text-primary active" aria-current="page">Service</li>
                    </ol>
                </nav>
            </div>
        </div>
    </>
  )
}

export default Navbar
