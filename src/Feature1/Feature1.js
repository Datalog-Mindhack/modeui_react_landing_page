import React from 'react';
import './Feature1.css';
import {Link} from 'react-router-dom';

const Feature1 = () => {
  return (
    <div className='feature1'>
        <div className="feature1-container">
            <div className="feature1-row">
                <div className="subtitle-center">
                    <div className="feature1-content">
                        <div className="feature1-content-content">
                            <div className='content-title'>
                                <text>Elevating Card Programs with Cutting-Edge Technology</text>
                            </div>
                            <div className='content-paratext'>
                                <text>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</text>
                            </div>
                        </div>

                        <div className="feature1-content-action">
                            <Link className='action-base-button'>
                                <Link className='base-button-text'>
                                    <text>Compare all Pro features</text>
                                </Link>
                                <Link className="base-arrow-right">
                                    <img src="/images/arrow.png" alt="arrow" />
                                </Link>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row-column">
                    <div className="column-column1">
                        <div className="column1-content">
                            <div className="big-icons1">
                                <div className="globe">
                                    <img src="/images/globe.png" alt="globe" />
                                </div>
                            </div>
                            <br/>
                            <div className="column1-contents">
                                <div className='contents-heading01'>
                                    <text>Globally Accepted</text>
                                </div>
                                <br/>
                                <div className='contents-description01'>
                                    <text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </text>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column-column2">
                        <div className="column2-content">
                            <div className="big-icons2">
                                <div className="key">
                                    <img src="/images/key.png" alt="key-img" />
                                </div>
                            </div>
                            <br/>
                            <div className="column2-contents">
                                <div className='contents-heading1'>
                                    <text>Biometric Integrated</text>
                                </div>
                                <br/>
                                <div className='contents-description1'>
                                    <text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </text>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column-column3">
                        <div className="column3-content">
                            <div className="big-icons3">
                                <div className="lock">
                                    <img src="/images/lock.png" alt="lock-img" />
                                </div>
                            </div>
                            <br/>
                            <div className="column3-contents">
                                <div className='contents-heading2'>
                                    <text>Fully Secured</text>
                                </div>
                                <br/>
                                <div className='contents-description2'>
                                    <text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </text>
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

export default Feature1