import React, { Component } from 'react';
import {Input, Icon, Row, Button} from 'react-materialize';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import $ from 'jquery';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import {getRates} from '../actions/rates';
import {getUsers} from '../actions/user';

const mapStateToProps = (state, props) => {
    return {
        session:state.sessionReducer,
        rates:state.rateReducer,
        users:state.userReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    const actions = {
        getRates:bindActionCreators(getRates, dispatch),
        getUsers:bindActionCreators(getUsers, dispatch)
    };
    return actions;
}

class Dashboard extends Component {
    componentWillMount(){
        this.props.getRates();
        this.props.getUsers();
    }
    handleSubmit = (event) => {
        event.preventDefault();
        let activeOk = this.active===undefined?false:this.active;
        let number = this.horas.state.value===undefined?0:this.horas.state.value;
        let data = JSON.stringify({
            tarifa_lote:this.tarifaLote.state.value,
            horas: number,
            username: this.username.state.value,
            active:activeOk,
        });
        console.log(data);
    }
    setTarifaLote=(element) =>{
        this.tarifaLote = element;
    }
    setHoras=(element) => {
        this.horas = element;
    }
    setUsername=(element) => {
        this.username = element;
    }
    render() {
        let {rates, users} = this.props
        console.log(rates);
        return (
            <div>
                <form method='post' onSubmit={this.handleSubmit}>
                    <Row>
                        <Input ref={this.setTarifaLote} s={12} l={5} type='select' label='Tarifa por lote' defaultValue='1'>
                            {
                                rates.rates.map((rate, index)=>(
                                    <option key={index} value={rate.id}>
                                        Lote: {rate.lot} - Ubicación: {rate.location} - Tarifa: {rate.rate}
                                    </option>
                                ))
                            }
                         
                        </Input>
                        <Input ref={this.setHoras} s={12} l={2} label={'Hora(s)'} type='number' /> 
                        
                        <Input ref={this.setUsername} s={12} l={5} type='select' label='Usuarios' defaultValue='1'>
                            {
                                users.users.map((user, index)=>(
                                    <option key={index} value={user.id}>
                                        {user.username}
                                    </option>
                                ))
                            }
                        </Input>
                    </Row>
                    <div className='row'>
                        <div className='col s12 l10'>
                            <Input s={12} l={2} 
                                 className='with-gap'
                                 checked={this.active === 'Aprobado'}
                                 onChange={(e) => this.active = e.target.value }
                                 name='active' 
                                 label='Aprobado' 
                                 value='Aprobado'
                                 type='radio' />
                            <Input s={12} l={2} 
                                 className='with-gap'
                                 checked={this.active === 'Desaprobado'}
                                 onChange={(e) => this.active = e.target.value }
                                 name='active' 
                                 label='Desaprobado' 
                                 value='Desaprobado'
                                 type='radio' />
                        </div>
                        <div className='col s12 l2'>
                            <Button
                                className='btn red' type='submit' waves='light'>
                                Solicitar aprobación <Icon right>send</Icon>
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
