import React from 'react'

const About = () => {
  return (
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">More details about me</div>
                    <h1 className="display-6 mb-5">About Me</h1>
                    
                    <p class="mb-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <a class="btn btn-primary py-2 px-3 me-3" href="">
                        Learn More
                        <div class="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                            <i class="fa fa-arrow-right"></i>
                        </div>
                    </a>
                    <a class="btn btn-outline-primary py-2 px-3" href="">
                        Contact Us
                        <div class="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                            <i class="fa fa-arrow-right"></i>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
