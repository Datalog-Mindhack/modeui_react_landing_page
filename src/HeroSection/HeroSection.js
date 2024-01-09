import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {

  return (
    <div className="herosection-bg">
       <div className="herosection">
        <div className="container">
            <div className="container-row">
                <div className="content">
                    <div className="content1">
                        <span className='subheading'>
                            <text>Seamless experience</text>
                        </span>
                        <div className="content1heading">
                            <span className='title'>
                            <text>Unleashing the Next Generation of Card Solutions</text>
                            </span>
                            <br/>
                            <span className='paratext'>
                                <text>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</text>
                            </span>
                        </div>
                    </div>
                    <div className="content2">
                        <div className='action'>
                            <button className='base-button1'>
                                <span className='textcard'>
                                    <text>Unlock your Card</text>
                                </span>
                                <Link className='arrowright'>
                                    <img src="/images/arrow.png" alt="arrow logo" />
                                </Link>
                            </button>
                            <div className='nocredit'>
                                <text>*No credit card required</text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}


export default HeroSection