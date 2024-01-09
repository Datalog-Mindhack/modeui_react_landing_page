import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="footer-row">
                <div className="footer-content1">
                    <div className="footer-content1-content01">
                        <div className="footer-contents">
                            <div className="footer-contents-content">
                                <div className="footer-logo">
                                    <img src="/images/Vector.png" alt="Mode ui" />
                                </div>
                                <br/>
                                <div className="footer-contents-text">
                                    <text>Mode UI is a comprehensive design system that empowers designers and developers to create cohesive and visually stunning user interfaces across various platforms and devices</text>
                                </div>
                            </div>

                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className="footer-content1-content02">
                        <div className="footer-content2">
                            <div className="footer-content2-content001">
                                <div className='content001-company'>
                                    <text>Company</text>
                                </div>
                                <br/>
                                <div className="content001-content">
                                    <ul>
                                        <text>About Us</text>
                                        <br/>
                                        <br/>
                                        <text>Pricing</text>
                                        <br/>
                                        <br/>
                                        <text>Contact Us</text>
                                        <br/>
                                        <br/>
                                        <text>Features</text>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-content2-content002">
                                <div className='content002-product'>
                                    <text>Product</text>
                                </div>
                                <br/>
                                <div className="content002-content">
                                    <ul>
                                        <text>Figma design system</text>
                                        <br/>
                                        <br/>
                                        <text>Ios kit</text>
                                        <br/>
                                        <br/>
                                        <text>Android kit</text>
                                        <br/>
                                        <br/>
                                        <text>Wireframe</text>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-content2-content003">
                                <div className='content003-resources'>
                                    <text>Resources</text>
                                </div>
                                <br/>
                                <div className="content003-content">
                                    <ul>
                                        <text>Templates</text>
                                        <br/>
                                        <br/>
                                        <text>Landing pages</text>
                                        <br/>
                                        <br/>
                                        <text>Documentation</text>
                                        <br/>
                                        <br/>
                                        <text>Comp library</text>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-content2-content004">
                                <div className='content004-legal'>
                                    <text>Legal</text>
                                </div>
                                <br/>
                                <div className="content004-content">
                                    <ul>
                                       <text>Privacy policy</text>
                                        <br/>
                                        <br/>
                                        <text>Terms & Conditions</text>
                                        <br/>
                                        <br/>
                                        <text>Disclaimer</text>
                                        <br/>
                                        <br/>
                                        <text>Affiliate programme</text>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-content2-content005">
                                <div className='content005-support'>
                                    <text>Support</text>
                                </div>
                                <br/>
                                <div className="content004-content">
                                    <ul>
                                        <text>Help centre</text>
                                        <br/>
                                        <br/>
                                        <text>Raise ticket</text>
                                        <br/>
                                        <br/>
                                        <text>Report</text>
                                        <br/>
                                        <br/>
                                        <text>Refund</text>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <div className="footer-content2-container">
                    <div className="footer-container-content2">
                        <div className="footer-content2-social-group">
                            <Link className="footer-content2-social">
                                <Link className="content2-social-frame">
                                    <img src="/images/github.png" alt="github" />
                                </Link>
                            </Link>
                            <Link className="footer-content2-social2">
                                    <img src="/images/linkedin.png" alt="linkedin" />
                            </Link>
                            <Link className="footer-content2-social3">
                                    <img src="/images/discord.png" alt="discord" />
                            </Link>
                        </div>
                    </div>
                    
                    <div className='copyright'>
                        <text>© 2023 Mode UI  Inc. All Rights Reserved.</text>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer