import React from 'react'
import '../css/findjob.css';

const FindJob = () => {
  return (
    <>
      <div className="find-job-section">
        <div className="find-job-section-left">
            <div className="heading">
                <h2>MILLIONS OF JOBS.</h2>
                <h4>Find the one that’s right for you.</h4>
            </div>
            <p>Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide. The right job is out there.</p>
            <button>Search Job</button>
        </div>
        <div className="find-job-section-right">
            <img src="images/find-job.jpg" alt="" />
        </div>
      </div>
    </>
  )
}

export default FindJob
