
import React  from 'react';
import { Link} from 'react-router-dom';

function Footer() {
    return(
<div className="container-fluid bg-dark text-white-50 footer pt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 col-md-6">
                        <h5 className="text-white mb-4">Get In Touch</h5>
                        
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>contact@example.com</p>
                        
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <h5 className="text-white mb-4">Quick Links</h5>
                        
                        <Link className="btn btn-link text-white-50 d-inline" to="/">Home</Link>
                        <Link className="btn btn-link text-white-50 d-inline" to="/about">About</Link>
                        <Link className="btn btn-link text-white-50 d-inline" to="/contact">Contact Us</Link>
                        <Link className="btn btn-link text-white-50 d-inline" to="/login">Login</Link>
                        <Link className="btn btn-link text-white-50 d-inline" to="/signup">SignUp</Link>
                        
                    </div>

                </div>
            </div>
            <div className="container py-2">
                <div className="copyright text-center">
                    &copy; <Link className="border-bottom" to="/">Sponsor Connect</Link>, All Right Reserved. 
                    
                </div>
            </div>
        </div>
    );
}

export default Footer;
