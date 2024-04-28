import React, { useEffect } from 'react';
import '../css/services.css';

const IndustryPracticeComp = () => {
    useEffect(() => {
        showTop();
    }, []);

    const showTop = () => {
        window.scrollTo(0, 0);
    };

    const industryPractices = [
        { name: 'Aerospace & Defense', image: 'images/industry-practice1.jpg' },
        { name: 'Healthcare Pharma, & Diagnostics', image: 'images/industry-practice2.jpg' },
        { name: 'Outsourcing & Offshoring', image: 'images/industry-practice3.jpg' },
        { name: 'Automobile & Auto Components', image: 'images/industry-practice4.jpg' },
        { name: 'Industrial & Infrastructure', image: 'images/industry-practice5.jpeg' },
        { name: 'Consumer Durables & Building Materials', image: 'images/industry-practice6.jpg'},
        { name: 'Real estate & services', image: 'images/industry-practice7.jpg'},
        { name: 'Education & Internet', image: 'images/industry-practice8.jpg'},
        { name: 'Electrical & Electronics', image: 'images/industry-practice9.jpg'},
        { name: 'Metals, Minerals & Mining', image: 'images/industry-practice10.jpg'},
        { name: 'Financial Services', image: 'images/industry-practice11.jpg'},
        { name: 'Oil & Gas', image: 'images/industry-practice12.jpg'},
        { name: 'Media & Entertainment', image: 'images/industry-practice13.jpg'},
        { name: 'FMCG & Telecom', image: 'images/industry-practice14.jpg'},
        { name: 'Retail & Logistics', image: 'images/industry-practice15.jpg'},
    ];

    return (
        <>
            <section className='services-section industry-practice'>
                <h2>INDUSTRY PRACTICES</h2>
                <p>We recognize that each industry has its own nuances in terms of management style, hiring practices and compensation norms. In order to provide clients with specialized recruiting solutions, Hefty services has developed expertise in the following industry segments.</p>
                <div className="service-card-box">
                    {industryPractices.map((practice, index) => (
                        <div key={index} className="service-card">
                            <div className="service-card-image">
                                <img src={practice.image} alt={practice.name} />
                            </div>
                            <div className="service-card-content">
                                <h2>{practice.name}</h2>
                                <button>Know More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default IndustryPracticeComp;
