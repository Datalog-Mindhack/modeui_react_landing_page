import React from 'react';
import {Link} from 'react-router-dom';
import './LogoCloud.css';

const LogoCloud = () => {
  return (
    <div className='logocloud'>
        <div className="logocloud-container">
            <div className="logocloud-row">
                <Link className='logoCloud1'>
                    <Link className='company-logo1'>
                        <Link className="group">
                            <img src="/images/nuxt.png" alt="group nuxt" />
                        </Link>
                    </Link>
                </Link>
                <Link className='logoCloud2'>
                    <Link className='company-logo2'>
                        <img src="/images/miro.png" alt="miro company" />
                    </Link>
                </Link>
                <Link className='logoCloud3'>
                    <Link className='company-logo3'>
                        <img src="/images/lottiefiles.png" alt="lottie files" />
                    </Link>
                </Link>
                <Link className='logoCloud4'>
                    <Link className='company-logo4'>
                        <img src="/images/wise.png" alt="wise" />
                    </Link>
                </Link>
                <Link className='logoCloud5'>
                    <Link className='company-logo5'>
                        <img src="/images/dribble.png" alt="dribble" />
                    </Link>
                </Link>
                <Link className='logoCloud6'>
                    <Link className='company-logo6'>
                        <img src="/images/kinsta.png" alt="kinsta" />
                    </Link>
                </Link>
                <Link className='logoCloud7'>
                    <Link className='company-logo7'>
                        <img src="/images/angellist.png" alt="angellist" />
                    </Link>
                </Link>
                <Link className='logoCloud8'>
                    <Link className='company-logo8'>
                        <img src="/images/behance.png" alt="" />
                    </Link>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default LogoCloud