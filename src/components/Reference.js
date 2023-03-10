import React from 'react';
import testimonial1 from '../images/testimonial-1.jpg';
import testimonial2 from '../images/testimonial-2.jpg';
import testimonial3 from '../images/testimonial-3.jpg';

const Reference = () => {
  return (
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth:'600px'}}>
                <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">Academic/Professional Referees</div>
                <h1 className="display-6 mb-5">References</h1>
            </div>
            <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                <div className="testimonial-item text-center">
                    <img className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src={testimonial1} style={{width:'100px', height:'100px'}} />
                    <div className="testimonial-text rounded text-center p-4">
                        <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                        <h5 className="mb-1">Doner Name</h5>
                        <span className="fst-italic">Profession</span>
                    </div>
                </div>
                <div className="testimonial-item text-center">
                    <img className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src={testimonial2} style={{width:'100px', height:'100px'}} />
                    <div className="testimonial-text rounded text-center p-4">
                        <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                        <h5 className="mb-1">Doner Name</h5>
                        <span className="fst-italic">Profession</span>
                    </div>
                </div>
                <div className="testimonial-item text-center">
                    <img className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src={testimonial3} style={{width:'100px', height:'100px'}} />
                    <div className="testimonial-text rounded text-center p-4">
                        <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                        <h5 className="mb-1">Doner Name</h5>
                        <span className="fst-italic">Profession</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Reference