import React from 'react';

const Footer = (props) => {
    return (
        <footer className='footer z-depth-3' style={props.style}>
            <div className='copyright'>
                <p className='slogan white-text text-shadow-black'>
                    © {props.footer.year} Copyright: Todos los derechos reservados a {props.footer.entity}
                </p>
                <a 
                    className='slogan grey-text text-lighten-4 right hover-underline text-shadow-black' 
                    target='_blank' 
                    rel="noopener noreferrer" 
                    href='http://qygconsultores.com/'> {props.footer.website} </a>
            </div>
        </footer>
    );
};

export default Footer;