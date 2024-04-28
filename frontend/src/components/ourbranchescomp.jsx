import React, { useState } from 'react';
import '../css/ourbranches.css';

const OurBranchesComp = () => {
  const [selectedBranch, setSelectedBranch] = useState('Patna');
  const [showClickBranch, setShowClickBranch] = useState(true);

  const handleBranchClick = (branch) => {
    setSelectedBranch(branch);
    setShowClickBranch(false);
  };

  return (
    <>
      <div className="our-branches-section">
        <h2>Our Branches</h2>
        <div className="branches">
          <div className="branch" onClick={() => handleBranchClick('Patna')}>
            <div className="brance-image">
              <img src="https://www.indiasinvitation.com/wp-content/uploads/2016/09/Patna-Tourism.jpg" alt="" />
            </div>
            <h3>Patna</h3>
          </div>
          <div className="branch" onClick={() => handleBranchClick('Noida')}>
            <div className="brance-image">
              <img src="https://themetrorailguy.com/wp-content/uploads/2015/11/WaveOneb.jpg" alt="" />
            </div>
            <h3>Noida</h3>
          </div>
          <div className="branch" onClick={() => handleBranchClick('Delhi')}>
            <div className="brance-image">
              <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0f/c5/e8/5c.jpg" alt="" />
            </div>
            <h3>Delhi</h3>
          </div>
        </div>
        <br />
        {showClickBranch && (
          <h3 className='click-branch'>
            Click The Branches To View Address & Location.
          </h3>
        )}
        <div className="branches-details">
          <h2>{selectedBranch} Address</h2>
          {/* Render details based on selectedBranch */}
          {selectedBranch === 'Patna' && <p>Patna Address details here</p>}
          {selectedBranch === 'Noida' && <p>Noida Address details here</p>}
          {selectedBranch === 'Delhi' && <p>Delhi Address details here</p>}
        </div>
      </div>
    </>
  );
};

export default OurBranchesComp;
