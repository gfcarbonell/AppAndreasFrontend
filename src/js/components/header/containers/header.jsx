import React from 'react';
import HeaderTitle from '../items/header-title';
import HeaderLogo from '../items/header-logo';

const Header = (props) => {
    return (
        <header className='header z-depth-3' style={props.style}>
            <HeaderTitle entity={props.header.entity} slogan={props.header.slogan} />
            <HeaderLogo logo={props.header.logo}/>
        </header>
    );
};

export default Header;