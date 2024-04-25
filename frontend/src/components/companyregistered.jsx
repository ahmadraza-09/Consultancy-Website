import React from 'react'
import '../css/companyregistered.css';

const CompanyRegistered = () => {
  return (
    <>
      <div className="company-registered-section">
        <h2>TOP COMPANY REGISTERED</h2>
        <p>A better career is out there. We'll help you find it. We're your first step to becoming everything you want to be.</p>
        <div className="company-list">
            <div className="company-card">
                <img src="images/company-logo1.png" alt="" />
                <h2>AITS</h2>
            </div>
            <div className="company-card">
                <img src="images/company-logo2.png" alt="" />
                <h2>DELL</h2>
            </div>
            <div className="company-card">
                <img src="images/company-logo3.png" alt="" />
                <h2>MAKE MY TRIP</h2>
            </div>
            <div className="company-card">
                <img src="images/company-logo4.png" alt="" />
                <h2>WAL MART</h2>
            </div>
            <div className="company-card">
                <img src="images/company-logo5.png" alt="" />
                <h2>CARS24</h2>
            </div>
            <div className="company-card">
                <img src="images/company-logo6.png" alt="" />
                <h2>OYO</h2>
            </div>
            <div className="company-card">
                <img src="images/company-logo7.png" alt="" />
                <h2>JUST DIAL</h2>
            </div>
            <div className="company-card">
                <img src="images/company-logo8.png" alt="" />
                <h2>HP</h2>
            </div>
        </div>
      </div>
    </>
  )
}

export default CompanyRegistered
