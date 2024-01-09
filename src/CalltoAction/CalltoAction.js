import React from 'react';
import './CalltoAction.css';
import {Link} from 'react-router-dom';

const CalltoAction = () => {
  return (
    <div className='calltoaction'>
        <div className="calltoaction-container">
            <div className="calltoaction-row">
                <div className="calltoaction-subtitle">
                    <div className='calltoaction-title'>
                        <text>Unlock Limitless Possibilities with Our New Card Solutions</text>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="calltoaction-action">
                    <Link className="button1">
                    <button className='calltoaction-base-btn1'>
                        <span className='base-btn1-text'>
                            <text>Unlock your card</text>
                        </span>
                        <span className="btn1-credit">
                            <img src="/images/credit-card.png" alt="credit card" />
                        </span>
                    </button>
                    </Link>
                    <Link className="button2">
                    <button className='calltoaction-base-btn2'>
                        <span className='base-btn2-text'>
                            <text>Customer support</text>
                        </span>
                        <span className="btn2-credit">
                            <img src="/images/headphones.png" alt="headphone" />
                        </span>
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CalltoAction