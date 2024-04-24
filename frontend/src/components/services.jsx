import React from 'react'
import '../css/services.css';

const Services = () => {
  return (
    <>
      <section className='services-section'>
        <h2>Our Services</h2>
        <p>Hefty Source & Services Private limited providing excellence in recruitment and placement services across
            domains carving a niche for ourselves in the recruitment service.</p>
        <div className="service-card-box">
            <div className="service-card">
                <div className="service-card-image">
                    <img src="images/service-img1.jpg" alt="" />
                </div>
                <div className="service-card-content">
                    <h2>Recruitment</h2>
                    <button>Know More</button>
                </div>
            </div>
            <div className="service-card">
                <div className="service-card-image">
                    <img src="images/service-img2.jpg" alt="" />
                </div>
                <div className="service-card-content">
                    <h2>Apprenticeship</h2>
                    <button>Know More</button>
                </div>
            </div>
            <div className="service-card">
                <div className="service-card-image">
                    <img src="images/service-img3.jpg" alt="" />
                </div>
                <div className="service-card-content">
                    <h2>Manpower</h2>
                    <button>Know More</button>
                </div>
            </div>
            <div className="service-card">
                <div className="service-card-image">
                    <img src="images/service-img4.jpg" alt="" />
                </div>
                <div className="service-card-content">
                    <h2>Staffing Solution</h2>
                    <button>Know More</button>
                </div>
            </div>
            <div className="service-card">
                <div className="service-card-image">
                    <img src="images/service-img5.jpg" alt="" />
                </div>
                <div className="service-card-content">
                    <h2>Skill Development</h2>
                    <button>Know More</button>
                </div>
            </div>
            <div className="service-card">
                <div className="service-card-image">
                    <img src="images/service-img6.jpg" alt="" />
                </div>
                <div className="service-card-content">
                    <h2>Social Entrepreneurship</h2>
                    <button>Know More</button>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Services
