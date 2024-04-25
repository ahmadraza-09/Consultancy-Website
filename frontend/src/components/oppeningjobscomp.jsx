import React, { useState, useEffect } from 'react';
import '../css/oppeningjobs.css';

const OppeningJobsComp = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All Region');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [filteredJobOpenings, setFilteredJobOpenings] = useState([]);

  useEffect(() => {
    setFilteredJobOpenings(jobOpenings);
  }, []);

  const jobOpenings = [
    { id: 1, title: 'Bussiness Manager', region: 'India', category: 'Finance' },
    { id: 2, title: 'Bank Manager', region: 'Canada', category: 'Banking' },
    { id: 3, title: 'Web Developer', region: 'India', category: 'IT Software' },
    { id: 4, title: 'Software Developer', region: 'India', category: 'IT Software' },
    { id: 5, title: 'Web Developer', region: 'Nepal', category: 'IT Software' },
    { id: 6, title: 'Software Developer', region: 'Canada', category: 'IT Software' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredJobs = jobOpenings.filter(job => {
      return (
        (selectedRegion === 'All Region' || job.region === selectedRegion) &&
        (selectedCategory === 'All Categories' || job.category === selectedCategory) &&
        (job.title.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    });
    setFilteredJobOpenings(filteredJobs);
  };

  return (
    <>
      <div className="oppening-jobs-section">
        <div className="job-search-form">
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder='What are you looking for ?'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
            >
              <option value="All Region">All Region</option>
              <option value="India">India</option>
              <option value="Canada">Canada</option>
              <option value="Nepal">Nepal</option>
            </select>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All Categories">All Categories</option>
              <option value="Finance">Finance</option>
              <option value="Banking">Banking</option>
              <option value="IT Software">IT Software</option>
            </select>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="job-oppening-data">
          <h2>Opening Jobs List</h2>
          <div className="jobs-data">
            {filteredJobOpenings.length > 0 ? (
                filteredJobOpenings.map(job => (
                  <li key={job.id} className='job-card'>
                    <h3>{job.title}</h3>
                    <p>Region: {job.region}</p>
                    <p>Category: {job.category}</p>
                    <button>Apply Now</button>
                  </li>
                ))
              ) : (
                <p className="no-data-message">No Data Found!</p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default OppeningJobsComp
