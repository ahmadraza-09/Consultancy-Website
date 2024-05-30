import React, { useEffect } from 'react';
import '../css/companyregistered.css';

const CompanyRegistered = () => {
    useEffect(() => {
        showTop();
    }, []);

    const showTop = () => {
        window.scrollTo(0, 0);
    };

    const companies = [
        { name: 'AITS', logo: 'images/company-logo1.png' },
        { name: 'DELL', logo: 'images/company-logo2.png' },
        { name: 'MAKE MY TRIP', logo: 'images/company-logo3.png' },
        { name: 'WAL MART', logo: 'images/company-logo4.png' },
        { name: 'CARS24', logo: 'images/company-logo5.png' },
        { name: 'OYO', logo: 'images/company-logo6.png' },
        { name: 'JUST DIAL', logo: 'images/company-logo7.png' },
        { name: 'HP', logo: 'images/company-logo8.png' },
        { name: 'CAR24', logo: 'images/company-logo5.png' }, 
        { name: 'MAKE MY TRIP', logo: 'images/company-logo3.png' }
    ];

    return (
        <>
            {/* <div className="company-registered-section">
                <h2>TOP COMPANY REGISTERED</h2>
                <p>A better career is out there. We'll help you find it. We're your first step to becoming everything you want to be.</p>
                <div className="company-list">
                    {companies.map((company, index) => (
                        <div key={index} className="company-card">
                            <img src={company.logo} alt={company.name} />
                            <h2>{company.name}</h2>
                        </div>
                    ))}
                </div>
            </div> */}

            <div className="industries-serve">
                <h2>INDUSTRIES WE SERVE</h2>
                <div className="industries-boxes">
                    <div className="industries-box">
                        <img src="images/bank.png" alt="" />
                        <div className="title">
                            <h4>BFSI</h4>
                        </div>
                    </div>
                    <div className="industries-box">
                        <img src="images/infrastructure.png" alt="" />
                        <div className="title">
                            <h4>Industrial</h4>
                        </div>
                    </div>
                    <div className="industries-box">
                        <img src="images/technology.png" alt="" />
                        <div className="title">
                            <h4>Technology</h4>
                        </div>
                    </div>
                    <div className="industries-box">
                        <img src="images/supply-chain.png" alt="" />
                        <div className="title">
                            <h4>SCM/Logistics</h4>
                        </div>
                    </div>
                    <div className="industries-box">
                        <img src="images/telecommunication.png" alt="" />
                        <div className="title">
                            <h4>Telecom</h4>
                        </div>
                    </div>
                    <div className="industries-box">
                        <img src="images/online-shop.png" alt="" />
                        <div className="title">
                            <h4>Ecommerce</h4>
                        </div>
                    </div>
                    <div className="industries-box">
                        <img src="images/education.png" alt="" />
                        <div className="title">
                            <h4>Education</h4>
                        </div>
                    </div>
                    <div className="industries-box">
                        <img src="images/bridge.png" alt="" />
                        <div className="title">
                            <h4>Infrastructure</h4>
                        </div>
                    </div>
                    <div className="industries-box">
                        <img src="images/medical-team.png" alt="" />
                        <div className="title">
                            <h4>Healthcare & Pharma</h4>
                        </div>
                    </div>
                    <div className="industries-box">
                        <img src="images/conveyor.png" alt="" />
                        <div className="title">
                            <h4>Manufacturing</h4>
                        </div>
                    </div>
                    <div className="industries-box">
                        <img src="images/electric-car.png" alt="" />
                        <div className="title">
                            <h4>Automobile</h4>
                        </div>
                    </div>
                    <div className="industries-box">
                        <img src="images/social-media.png" alt="" />
                        <div className="title">
                            <h4>Media & Entertainment</h4>
                        </div>
                    </div>
                    <div className="industries-box">
                        <img src="images/hospitality.png" alt="" />
                        <div className="title">
                            <h4>Hospitality</h4>
                        </div>
                    </div>
                    <div className="industries-box">
                        <img src="images/fast-food.png" alt="" />
                        <div className="title">
                            <h4>FMCG/FMCD/Retail</h4>
                        </div>
                    </div>
                    <div className="industries-box">
                        <img src="images/renewable-energy.png" alt="" />
                        <div className="title">
                            <h4>Power and Energy</h4>
                        </div>
                    </div>
                    <div className="industries-box">
                        <img src="images/natural-gas.png" alt="" />
                        <div className="title">
                            <h4>Oil and Gas</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanyRegistered;
