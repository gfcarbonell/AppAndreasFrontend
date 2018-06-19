import React from 'react';
import {Link} from 'react-router-dom';
import {Col, ProgressBar} from 'react-materialize';
import employees from '../../../../media/images/png/Employees-4.png'
import providers from '../../../../media/images/png/Providers-1.png'


class Menu extends React.Component{
    state = {
        menus:[],
        loading:true
    }
    componentWillMount(){
        this.setState({
            menus:menus,
            loading:false
        })
    }
    render(){
        let menus = this.state.menus;
        if(this.state.loading){
            return (
                <div className='margin-top-bottom-4'>
                    <Col s={12} className='container-center'>
                        <ProgressBar color='green'/>
                    </Col>
                </div>
            )
        }
        return (
            <div className='main-menu'>
                <div className='row'>
                    <h2 className='title center-align'>
                        Menu Principal
                    </h2>
                </div>
                <ul className='menus'>
                    {
                        menus.map((menu, index)=>(
                            <figure 
                                className='menus-item'
                                key={menu.id}>
                                <img 
                                    className='menus-item-image'
                                    src={menu.image.src} 
                                    alt={menu.image.alt}/>
                                <figcaption
                                    className='menus-item-wrapper'
                                    >
                                    <Link 
                                        className='btn waves-effect waves-light z-depth-3 menus-item-wrapper-link hover-underline'
                                        to={menu.url}> 
                                        {menu.name} 
                                    </Link>
                                </figcaption>
                            </figure>

                        ))
                    }
                </ul>
            </div>
        )
    }
}

var menus = [
    {
        id:1,
        name:'Empleados',
        image:{
            src:employees,
            alt:'employees'
        },
        url:'/employees'
    },
    {
        id:2,
        name:'Proveedores',
        image:{
            src:providers,
            alt:'providers'
        },
        url:'/providers'
    }
]

export default Menu;