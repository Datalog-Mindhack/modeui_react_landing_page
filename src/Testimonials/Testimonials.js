import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className='testimonials'>
      <div className="testimonials-container">
        <div className="testimonials-row">
          <div className="testimonials-column">
            <div className="testimonials-column-content">
              <div className="testimonial-logo">
                <img src="/images/testimonial-logo.png" alt="testimonial logo" />
              </div>
              <br/>
              <div className='testimonial-text'>
                <text>I had the pleasure of experiencing the next generation of card solutions with this incredible product. It's refreshing to see such innovation in the financial industry.</text>
              </div>
            </div>
            <div className="testimonial-avatar">
              <div className="avatar-name">
                <div className="base-avatar">
                  <img src="/images/base-avatar.png" alt="base avatar" />
                </div>
                <br/>
                <div className="avatar-name-content">
                  <div className='avatar-name-name'>
                    <text>Nick Babich</text>
                  </div>
                  <span className='avatar-name-designation'>
                    <text>Lead Designer</text>
                  </span>
                </div>
              </div>
              <br/>
              <div className="avatar-rating">
                <div className="frame-744">
                  <img src="/images/frame.png" alt="frames" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials