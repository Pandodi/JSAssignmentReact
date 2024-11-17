import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import ContactForm from './ContactForm'

const ContactUs = () => {

    return (
    <>
    <Header />
        <section className='ContactUsSection'>
            <div className='contact-container'>
                <div className='contact-left-side'>
                    <h1 className='contact-headline'>Contact Us</h1>
                    <div className='contact-card'>
                        <img src='./src/assets/images/careers-logo.svg' alt="" />
                        <div className='card-text'>
                            <h2>Email Us</h2>
                            <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
                            <span>Leave a message &nbsp; &nbsp; <i className="fas fa-arrow-right" style={{ color: '#6366F1' }}></i> </span>
                        </div>
                    </div>
                    <div className='contact-card'>
                        <img src='./src/assets/images/email-logo.svg' alt="" />
                        <div className='card-text'>
                            <h2>Careers</h2>
                            <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
                            <span>Send an application  &nbsp; &nbsp; <i className="fas fa-arrow-right" style={{ color: '#6366F1' }}></i></span>
                        </div>
                    </div>
                </div>
                <div className='contact-right-side'>
                    <ContactForm/>
                </div>
            </div>
        </section>
        <div className='map-section'>
            <div className='map-container'>
                <img  src="./src/assets/images/map.svg" alt="Map-Location" />    
            </div>
            <div className='locations-container'>
                <div className='contact-details'>
                    <h1>Medical Center 1</h1>
                    <span className='location-line'><i class="fa-solid fa-location-dot"></i>4517 Washington Ave. Manchester, Kentucky 39495</span>
                    <span className='location-line'><i class="fa-solid fa-phone"></i>(406) 555-0120</span>
                    <span className='location-line'><i class="fa-solid fa-clock"></i><span style={{fontWeight: 'bold'}}>Mon – Fri:</span> 9:00 am – 22:00 am</span>
                    <p><span style={{fontWeight: 'bold'}}>Sat – Sun:</span> 9:00 am – 20:00 am</p>
                </div>
                <div className='contact-details'>
                    <h1 className='second-h1'>Medical Center 2</h1>
                    <span className='location-line'><i class="fa-solid fa-location-dot"></i>2464 Royal Ln. Mesa, New Jersey 45463</span>
                    <span className='location-line'><i class="fa-solid fa-phone"></i>(406) 544-0123</span>
                    <span className='location-line'><i class="fa-solid fa-clock"></i><span style={{fontWeight: 'bold'}}>Mon – Fri:</span>9:00 am – 22:00 am</span>
                    <p><span style={{fontWeight: 'bold'}}>Sat – Sun:</span> 9:00 am – 20:00 am</p>
                    <img  src="./src/assets/images/socials.svg" alt="" />
                </div>
            </div> 
            
        </div>
    <Footer/>
    </>
  )
}

export default ContactUs