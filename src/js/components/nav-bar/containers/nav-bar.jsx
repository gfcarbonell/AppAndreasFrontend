import React from 'react';
import $ from 'jquery';
import 'materialize-css';


class NavBar extends React.Component {
    
    componentDidMount(){
        $('.button-collapse').sideNav();
    }
    render (){
        let name = (this.props.name)? this.props.name : '';
        let style = (this.props.style)? this.props.style: {'background':'red'};
        return (
            <nav className="z-depth-3" style={style}>
                <div className="nav-wrapper padding-left-right-1">
                    <a href="#!" id="brand_logo" className="brand-logo text-shadow-black" > {name}</a>
                    <a href="#!" data-activates="mobile-demo" className="button-collapse text-shadow-black"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down text-shadow-black">
                        {this.props.children}
                    </ul>
                    <ul className="side-nav" id="mobile-demo">
                        {this.props.children}
                    </ul>
                </div>
            </nav>     
        )
    }
}
export default NavBar