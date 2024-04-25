import React from 'react'
import '../css/welcome.css';

const WelcomeSection = () => {
  return (
    <>
      <section className="welcome-section">
        <h3>Welcome</h3>
        <h2>Hefty Source & Services Private limited</h2>
        <p>We Are A Solution Oriented Company And Your Needs Are Our Greatest Concern.The company has strived to achieve its impeccable standards over a decade and has evolved in all the aspects of its existence to provide the unmatched services that our attained by our clients.</p>
        <div className="welcome-section-box">
            <div className="welcome-box-card">
                <div className="img-box">
                    <img src="images/welcome1.png" alt="" />
                </div>
                <h2>Certified Company</h2>
                <p>Experienced and reputed placement agencies providing the unmatched services that our attained by our client.</p>
            </div>
            <div className="welcome-box-card">
                <div className="img-box">
                    <img src="images/welcome2.png" alt="" />
                </div>
                <h2>Certified Company</h2>
                <p>Experienced and reputed placement agencies providing the unmatched services that our attained by our client.</p>
            </div>
            <div className="welcome-box-card">
                <div className="img-box">
                    <img src="images/welcome3.png" alt="" />
                </div>
                <h2>Certified Company</h2>
                <p>Experienced and reputed placement agencies providing the unmatched services that our attained by our client.</p>
            </div>
            <div className="welcome-box-card">
                <div className="img-box">
                    <img src="images/welcome4.png" alt="" />
                </div>
                <h2>Certified Company</h2>
                <p>Experienced and reputed placement agencies providing the unmatched services that our attained by our client.</p>
            </div>
        </div>
      </section>
    </>
  )
}

export default WelcomeSection
