import React, {useState}  from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {useNavigate,Link} from 'react-router-dom';
import Footer from '../components/Footer';
function Home() {
  const state = useSelector((state) => state);
  const [eventTitle, setTitle] = useState('');
  const [eventType, setEventType] = useState('');
  const [eventCity, setEventCity] = useState('');
   
  const navigate = useNavigate(); 
  const handleSearch = () => {
    
    const queryParams = new URLSearchParams();
    if (eventTitle) {
      queryParams.append('title', eventTitle);
    }
    if (eventType) {
      queryParams.append('eventtype', eventType);
    }
    if (eventCity) {
        queryParams.append('location', eventCity);
      }
      
    navigate(`/events?${queryParams.toString()}`);
  };
    return (
        <div>
                <div className="container-xxl bg-white p-0">        
         <Navbar/>
        <div className="container-fluid header bg-dark p-0">
            <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                <div className="col-md-6 p-5 mt-lg-5">
                    <h1 className="display-5 animated fadeIn mb-4 text-white">Discover Your <span className="text-primary">Ideal Event.</span></h1>
                    <h6 className="animated fadeIn mb-4 pb-2 text-white">Connect with the best sponsors</h6>
                    <Link to={state.userType === null ? "login" :state.userType === "sponsor"? "/events?eventtype=Sports" :"/createevent"} className="btn btn-primary py-3 px-5 me-3 animated fadeIn">Get Started</Link>
                </div>
                <div className="col-md-6 animated fadeIn">
                <OwlCarousel 
        className='owl-theme'
        items="1"
        autoplay="true"
        autoplayTimeout="2000"
        loop
    
        dots={false}
        >
        <div className="item">
            <img className="img-fluid" src="assets/img/carousel-2.jpg" alt=""/>
        </div>
        <div className="item">
            <img className="img-fluid" src="assets/img/carousel-1.jpg" alt=""/>
             </div>
        <div className="item">
          <img className="img-fluid" src="assets/img/carousel-3.jpg" alt=""/>
             </div>
  
        </OwlCarousel>
                </div>
            </div>
        </div>

        <div className="container-fluid bg-primary wow fadeIn" data-wow-delay="0.1s" style={{padding:'35px'}}>
            <div className="container">
                <div className="row g-2">
                    <div className="col-md-10">
                        <div className="row g-2">
                            <div className="col-md-4">
                                <input type="text"  className="form-control border-0 py-3" placeholder="Search Event" value={eventTitle}
                  onChange={(e) => setTitle(e.target.value)}/>
                            </div>
                            <div className="col-md-4">
                                <select className="form-select border-0 py-3" value={eventType}
                  onChange={(e) => setEventType(e.target.value)}>
                                <option value="">Select Event Type</option>
        <option value="Sports">Sports</option>
        <option value="Concert">Concert</option>
        <option value="Conference">Conference</option>
        <option value="Trade Shows">Trade Shows</option>
        <option value="Festivals">Festivals</option>
        <option value="Seminar">Seminar</option>
        <option value="Charity">Charity</option>
        <option value="Art Exhibitions">Art Exhibitions</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <select className="form-select border-0 py-3" value={eventCity}
                  onChange={(e) => setEventCity(e.target.value)}>
                                    <option value="">City</option>
                                    <option value="Lahore">Lahore</option>
<option value="Karachi">Karachi</option>
<option value="Islamabad">Islamabad</option>
<option value="Faisalabad">Faisalabad</option>
<option value="Rawalpindi">Rawalpindi</option>
<option value="Multan">Multan</option>
<option value="Gujranwala">Gujranwala</option>
<option value="Quetta">Quetta</option>
<option value="Peshawar">Peshawar</option>
<option value="Sialkot">Sialkot</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-dark border-0 w-100 py-3" onClick={handleSearch}>Search</button>
                    </div>
                </div>
            </div>
        </div>
 
        <div className="container-xxl py-5 bg-dark">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                    <h1 className="mb-3 text-white">Events Types</h1>
                    
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <Link className="cat-item d-block bg-light text-center rounded p-3" to="/events?eventtype=Sports">
                                <div className="mb-3">
                                    <img className="img-fluid" src="assets/img/sports.jpeg" alt="Event"/>
                                </div>                            
                                <span>Sports</span>
                        </Link>
                    </div>  
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <Link className="cat-item d-block bg-light text-center rounded p-3" to="/events?eventtype=Concert">
                                <div className="mb-3">
                                    <img className="img-fluid" src="assets/img/concert.jpg" alt="Event"/>
                                </div>                            
                                <span>Concert</span>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <Link className="cat-item d-block bg-light text-center rounded p-3" to="/events?eventtype=Conference">
                                <div className="mb-3">
                                    <img className="img-fluid" src="assets/img/conference.jpeg" alt="Event"/>
                                </div>                            
                                <span>Conference</span>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <Link className="cat-item d-block bg-light text-center rounded p-3" to="/events?eventtype=Trade Shows">
                                <div className="mb-3">
                                    <img className="img-fluid" src="assets/img/tradeshow.jpeg" alt="Event"/>
                                </div>                            
                                <span>Trade Shows</span>
                        </Link>
                    </div> 
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <Link className="cat-item d-block bg-light text-center rounded p-3" to="/events?eventtype=Festivals">
                                <div className="mb-3">
                                    <img className="img-fluid" src="assets/img/festivals.jpeg" alt="Event"/>
                                </div>                            
                                <span>Festivals</span>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <Link className="cat-item d-block bg-light text-center rounded p-3" to="/events?eventtype=Seminar">
                                <div className="mb-3">
                                    <img className="img-fluid" src="assets/img/seminar.jpeg" alt="Event"/>
                                </div>                            
                                <span>Seminar</span>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <Link className="cat-item d-block bg-light text-center rounded p-3" to="/events?eventtype=Charity">
                                <div className="mb-3">
                                    <img className="img-fluid" src="assets/img/charity.jpeg" alt="Event"/>
                                </div>                            
                                <span>Charity</span>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <Link className="cat-item d-block bg-light text-center rounded p-3" to="/events?eventtype=Art Exhibitions">
                                <div className="mb-3">
                                    <img className="img-fluid" src="assets/img/artexhibition.jpeg" alt="Event"/>
                                </div>                            
                                <span>Art Exhibitions</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        
        
        <div className="container-xxl py-5 bg-primary">
            <div className="container">
                <div className="wow fadeIn text-center" data-wow-delay="0.5s">
                    <div className="mb-4">
                        <h1 className="mb-3">Get Started Now</h1>
                        <p></p>
                    </div>
                    <Link to={state.userType === null ? "/login" :state.userType === "sponsor"? "/events?eventtype=Trade Shows" :"/viewevents"} className="btn btn-light py-3 px-4 me-2">DISCOVER EVENTS</Link>
                    {
                        state.userType === null ? (
                            <Link to="/login" className="btn btn-dark py-3 px-4">FIND SPONSOR</Link>
                        ) : state.userType === "sponsor" ? (
                            <Link to="/contact" className="btn btn-dark py-3 px-4">CONTACT US</Link>
                        ) : (
                            <Link to="/createevent" className="btn btn-dark py-3 px-4">CREATE EVENT</Link>
                        )
                    }
                </div>
         
            </div>
        </div>
        
        <Footer/>
        
    </div>

    

        </div>
    )
}

export default Home;