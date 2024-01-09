import React from 'react';
import './Feature2.css';
import {Link} from 'react-router-dom';

const Feature2 = () => {
  return (
    <div className='feature2'>
        <div className="feature2-container">
        <div className="feature2-row">
            <div className="feature2-subtitle">
                <div className="feature2-subtitle-content">
                    <div className="subtitle-content-content">
                        <div className='subtitle-content-title'>
                            <text>Elevating Card Programs with Cutting-Edge Technology</text>
                        </div>
                        <div className="subtitle-content-paratext">
                            <text>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</text>
                        </div>
                    </div>
                    <div className="subtitle-content-action">
                        <Link className='subtitle-base'>
                            <Link className='base-subtitle-text'>
                                <text>Compare all Pro features</text>
                            </Link>
                            <Link className="arrow-subtitle">
                                <img src="/images/arrow.png" alt="arrow icons" />
                            </Link>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="feature2-row-column">
                <div className="feature2-device">
                   
                    <img src="/images/device.png" alt="device" />
                
                </div>
                <div className="feature2-spending">
                    
                    <img src="/images/spending.png" alt="spending" />
                    
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Feature2