import React from 'react';
import Fade from 'react-reveal/Fade';

const HeaderTitle = (props) => {
    return (
        <div className='container'>
            <Fade top>
                <h1 className='header-title title center-align'>{props.entity}</h1>
            </Fade>
            <Fade left>
                <h5 className='header-slogan slogan center-align'>{props.slogan}</h5>
            </Fade> 
        </div>
    );
};



export default HeaderTitle;