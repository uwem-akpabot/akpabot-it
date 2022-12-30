import React from 'react'

const Feature = () => {
  return (
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth:'600px'}}>
                <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">What I Do</div>
                <h1 className="display-6 mb-5">I am an enthusiastic Full-Stack Software Developer</h1>
            </div>
            <div className="row g-4 justify-content-center">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                        <img className="img-fluid mb-4" src="img/icon-1.png" alt="" />
                        <h4 className="mb-3">Software Engineering</h4>
                        <p className="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                        <a className="btn btn-outline-primary px-3" href="">
                            Learn More
                            <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                                <i className="fa fa-arrow-right"></i>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                        <img className="img-fluid mb-4" src="img/icon-2.png" alt="" />
                        <h4 className="mb-3">Web Development</h4>
                        <p className="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                        <a className="btn btn-outline-primary px-3" href="">
                            Learn More
                            <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                                <i className="fa fa-arrow-right"></i>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                        <img className="img-fluid mb-4" src="img/icon-3.png" alt="" />
                        <h4 className="mb-3">IT Training</h4>
                        <p className="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                        <a className="btn btn-outline-primary px-3" href="">
                            Learn More
                            <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                                <i className="fa fa-arrow-right"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feature
