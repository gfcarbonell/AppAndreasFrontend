import React from 'react';
import {Link} from "react-router-dom";

const NavBarItem = (props) => {
    let to = (props.to)? props.to : '/';
    return (
        <li> 
            <Link to={to} name={props.name} onClick={props.handleClick}>
                {props.children}
            </Link>
        </li>
    );
};


export default NavBarItem;