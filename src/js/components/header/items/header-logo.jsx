import React from 'react';
import Fade from 'react-reveal/Fade';

const HeaderLogo = (props) => {
    return (
        <figure>
            <Fade right>
               <img className='header-logo z-depth-3' src={props.logo.src} alt={props.logo.alt} />
            </Fade>
        </figure>
    );
};


export default HeaderLogo;