import React from 'react';
import {Input, Icon, Row, Button} from 'react-materialize';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import $ from 'jquery';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import {getRates} from '../actions/rates';
import {getUsers} from '../actions/user';
import {getTasks, addTask} from '../actions/task';
import 'react-table/react-table.css';
import ReactTable from "react-table";

const mapStateToProps = (state, props) => {
    return {
        session:state.sessionReducer,
        rates:state.rateReducer,
        users:state.userReducer,
        tasks:state.taskReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    const actions = {
        getRates:bindActionCreators(getRates, dispatch),
        getUsers:bindActionCreators(getUsers, dispatch),
        getTasks:bindActionCreators(getTasks, dispatch),
        addTask:bindActionCreators(addTask, dispatch),
    };
    return actions;
}

class Dashboard extends React.Component {
    state = {
        search: '',
        columns: [
            {
                Header: "ID",
                accessor: "id",
                show: false
            },
            {
                Header: "LOTE",
                accessor: "lote",
                show: true
            },
            {
                Header: "UBICACIÓN",
                accessor: "location",
                show: true
            },
            {
                Header: "TARIFA",
                accessor: "rate",
                show: true
            },
            {
                Header: "NOMBRE DE USUARIO",
                accessor: "username",
                show: true
            },
            {
                Header: "HORA(S)",
                accessor: "hour",
                show: true
            },
            {
                Header: "APROBADO",
                accessor: "active",
                show: true
            }
        ],
    };
    componentWillMount(){
        this.props.getRates();
        this.props.getUsers();
        this.props.getTasks();
    }
    handleSubmit = (event) => {
        event.preventDefault();
        let activeOk = $('input:radio[name=active]:checked').val()?true:false;
        let number = this.horas.state.value===undefined?0:this.horas.state.value;
        let user = this.username.state.value;
        let rate = this.tarifaLote.state.value;
        let data = JSON.stringify({
            user_id:user,
            rate_id:rate,
            hour:number,
            active:$('input:radio[name=active]:checked').val(),
        });
        console.log(data);
        this.props.addTask(data);
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
        let rates = this.props.rates
        let users = this.props.users     
        let newActive = $('input:radio[name=active]:checked')?'SI':'NO'
        let data = this.props.tasks.tasks.map((task,index)=>{
            let data = {
                id: task.id,
                lote:task.rate.lot,
                location:task.rate.location,
                rate:task.rate.rate,
                username:task.user.username,
                hour:task.hour,
                active:newActive
            }
            return data;
        })
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
                                 checked={true}
                                 name='active' 
                                 label='Aprobado' 
                                 value='true'
                                 type='radio' />
                            <Input s={12} l={2} 
                                 className='with-gap'
                                 name='active' 
                                 label='Desaprobado' 
                                 value='false'
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
                <div>
                <ReactTable 
                    style={{'textAlign':'center'}}
                    data={data} 
                    resizable={true}
                    minRows={0} 
                    pageSizeOptions={[5, 10, 20, 25, 50, 100]}
                    columns={this.state.columns} 
                    defaultPageSize={10}
                    className="-striped -highlight -responsive-table"
                />
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
